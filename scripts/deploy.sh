#!/usr/bin/env bash
#
# Deploy the built Astro site to DirectAdmin via FTPS.
#
# Usage:
#   ./scripts/deploy.sh                 # build + upload (delta sync)
#   ./scripts/deploy.sh --dry-run       # show what would be uploaded, no changes
#   ./scripts/deploy.sh --no-build      # upload existing dist/ without rebuilding
#   ./scripts/deploy.sh --delete        # also remove remote files missing locally
#
# Credentials are read from .env.deploy (gitignored). See .env.deploy.example.

set -euo pipefail

# --- locate repo root regardless of where the script is called from ---
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}"

# --- parse flags ---
DRY_RUN=0
SKIP_BUILD=0
DELETE=0
for arg in "$@"; do
    case "$arg" in
        --dry-run)   DRY_RUN=1 ;;
        --no-build)  SKIP_BUILD=1 ;;
        --delete)    DELETE=1 ;;
        -h|--help)
            sed -n '3,13p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
            exit 0
            ;;
        *)
            echo "Unknown option: $arg" >&2
            exit 1
            ;;
    esac
done

# --- preflight ---
if ! command -v lftp >/dev/null 2>&1; then
    echo "ERROR: lftp is not installed. Install with: brew install lftp" >&2
    exit 1
fi

if [[ ! -f .env.deploy ]]; then
    echo "ERROR: .env.deploy not found. Copy .env.deploy.example and fill it in." >&2
    exit 1
fi

# shellcheck disable=SC1091
set -a
source .env.deploy
set +a

: "${FTP_HOST:?FTP_HOST must be set in .env.deploy}"
: "${FTP_USER:?FTP_USER must be set in .env.deploy}"
: "${FTP_PASS:?FTP_PASS must be set in .env.deploy}"
: "${FTP_REMOTE_PATH:?FTP_REMOTE_PATH must be set in .env.deploy}"

# --- build ---
if [[ "${SKIP_BUILD}" -eq 0 ]]; then
    echo "==> Building site..."
    npm run build
else
    echo "==> Skipping build (--no-build)"
fi

if [[ ! -d dist ]]; then
    echo "ERROR: dist/ directory does not exist. Run 'npm run build' first." >&2
    exit 1
fi

# --- assemble lftp mirror command ---
MIRROR_OPTS="-R --parallel=4 --verbose"
[[ "${DRY_RUN}" -eq 1 ]] && MIRROR_OPTS="${MIRROR_OPTS} --dry-run"
[[ "${DELETE}" -eq 1 ]] && MIRROR_OPTS="${MIRROR_OPTS} --delete"

# Exclude files the server may own that shouldn't be touched.
MIRROR_OPTS="${MIRROR_OPTS} --exclude-glob .well-known/ --exclude-glob cgi-bin/"

echo "==> Deploying dist/ -> ${FTP_HOST}:${FTP_REMOTE_PATH}"
[[ "${DRY_RUN}" -eq 1 ]] && echo "    (dry run — no files will be changed)"
[[ "${DELETE}" -eq 1 ]] && echo "    (delete mode — remote files not in dist/ will be removed)"

lftp -u "${FTP_USER},${FTP_PASS}" "${FTP_HOST}" <<EOF
set ssl:verify-certificate no
set ftp:ssl-allow yes
set ftp:ssl-force yes
set ftp:ssl-protect-data yes
set net:max-retries 3
set net:timeout 20
mirror ${MIRROR_OPTS} dist/ ${FTP_REMOTE_PATH}
bye
EOF

echo "==> Done."
