import { staticPath } from "../../utils/staticPath";

type Aliado =
	| { kind: "logo"; name: string; logo: string }
	| { kind: "text"; name: string };

const aliados: Aliado[] = [
	{ kind: "logo", name: "Microsoft", logo: "assets/img/alianzas/microsoft.png" },
	{ kind: "logo", name: "Universidad de la República — Uruguay", logo: "assets/img/alianzas/udelar.webp" },
	{ kind: "logo", name: "Secretaría de Políticas Lingüísticas", logo: "assets/img/alianzas/spl.webp" },
	{ kind: "logo", name: "Conacyt", logo: "assets/img/alianzas/conacyt.webp" },
	{ kind: "logo", name: "Universidad Nacional de Itapúa", logo: "assets/img/alianzas/uni.png" },
	{ kind: "logo", name: "Fintech", logo: "assets/img/alianzas/fintech.png" },
	{ kind: "logo", name: "CENIA", logo: "assets/img/alianzas/cenia.webp" },
	{ kind: "logo", name: "Cruz Roja Paraguaya", logo: "assets/img/alianzas/cruz-roja.png" },
	{ kind: "logo", name: "Ayacape", logo: "assets/img/alianzas/ayacape.webp" },
	{ kind: "logo", name: "Ycua Bolaños", logo: "assets/img/alianzas/ycua-bolanos.png" },
	{ kind: "logo", name: "Gobernación de Caaguazú", logo: "assets/img/alianzas/gobernacion-caaguazu.png" },
	{ kind: "logo", name: "UCAP", logo: "assets/img/alianzas/ucap.webp" },
	{
		kind: "text",
		name: "Ministerio de Educación y Ciencias — Dirección General del Tercer Ciclo de la Educación Escolar Básica y Educación Media",
	},
];

export default function Alianzas() {
	return (
		<section className="py-30! lg:py-50! bg-white">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="text-center mb-16! lg:mb-24!">
						<h2 className="text-6xl! lg:text-7xl!">Laboratorio de Alianzas</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
						{aliados.map((a) => (
							<AlianzaBox key={a.name} aliado={a} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function AlianzaBox({ aliado }: { aliado: Aliado }) {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-200 rounded-md min-h-48!">
			{aliado.kind === "logo" ? (
				<>
					<div className="flex-1 flex items-center justify-center w-full">
						<img
							src={staticPath(aliado.logo)}
							alt={aliado.name}
							loading="lazy"
							className="max-h-20! w-auto object-contain"
						/>
					</div>
					<p className="text-center text-sm! text-gray-700! leading-tight">
						{aliado.name}
					</p>
				</>
			) : (
				<p className="text-center text-sm! text-gray-800! font-semibold leading-snug">
					{aliado.name}
				</p>
			)}
		</div>
	);
}
