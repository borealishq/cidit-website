const team = {
	senior: [
		"Luca Cernuzzi",
		"Jorge Saldivar",
		"Marvin Aguero",
		"Luis Chiruzzo (UdelaR) - Asociado",
		"Alethia Hume (UC) - Asociada",
		"Gloria Aguilar - Asociada",
	],
	experts: [
		"Perla Alvarez",
		"Fanny Alvarez",
		"Arnaldo Casco (SPL) - Asociado",
		"Abelardo Ayala (SPL) - Asociado ",
		"Christian Ojeda (SPL) - Asociado",
		"Diego Duarte (SPL) - Asociado ",
		"Aldo Alvarez (UNI) - Asociado",
		"Mirtha Lugo (UNI) - Asociada",
	],
	junior: [
		"Andrea Báez",
		"Agustín Lucas",
		"Carlos Lugo",
		"Arsenio Ramón Araujo",
		"Cecilia González",
		"Raquel Insfrán",
		"Mathias Ayala",
	],
	socialResearchers: [
		"Teresa Gamarra",
		"Rebeca Gamarra",
		"Fabricio Vázquez",
		"Vivian Caje",
		"Tomás López",
		"Julia Fernández",
	],
};

export default function StaffList() {
	return (
		<section className="flex justify-center pb-70!">
			<div className="mxd-footer__footer-blocks">
				<div className="footer-blocks__column animate-card-3">
					<div className="footer-blocks__card fullheight-card">
						<div className="footer-blocks__block">
							<div className="footer-blocks__title anim-uni-in-up">
								<p className="footer-blocks__title-l">Nuestro equipo</p>
							</div>

							<p className="t-small leading-relaxed!">
								Un equipo internacional multidisciplinario con experimentados
								investigadores en informática social e inteligencia artificial,
								lingüistas en guaraní e investigadores sociales, comprometidos
								en impulsar la integración del idioma guaraní en el ámbito
								digital mediante herramientas basada en inteligencia artificial
								para ayudar poblaciones guaraní-hablantes a acceder a productos
								y servicios que mejoren su calidad de vida.
							</p>
						</div>
					</div>
				</div>

				<div className="footer-blocks__column animate-card-3">
					<div className="footer-blocks__card">
						<div className="footer-blocks__block">
							<div className="footer-blocks__title anim-uni-in-up">
								<p className="text-5xl! font-bold! leading-tight!">
									Investigadores Senior
								</p>
							</div>

							<div className="footer-blocks__socials">
								<ul className="footer-socials">
									{team.senior.map((e) => (
										<li className="footer-socials__item anim-uni-in-up" key={e}>
											{e}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-blocks__card">
						<div className="footer-blocks__block">
							<div className="footer-blocks__title anim-uni-in-up">
								<p className="text-5xl! font-bold! leading-tight!">
									Expertos Lingüistas
								</p>
							</div>

							<div className="footer-blocks__socials">
								<ul className="footer-socials">
									{team.experts.map((e) => (
										<li className="footer-socials__item anim-uni-in-up" key={e}>
											{e}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-blocks__column animate-card-3">
					<div className="footer-blocks__card">
						<div className="footer-blocks__block">
							<div className="footer-blocks__title anim-uni-in-up">
								<p className="text-5xl! font-bold! leading-tight!">
									Investigadores Junior
								</p>
							</div>

							<div className="footer-blocks__socials">
								<ul className="footer-socials">
									{team.junior.map((e) => (
										<li className="footer-socials__item anim-uni-in-up" key={e}>
											{e}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-blocks__card">
						<div className="footer-blocks__block">
							<div className="footer-blocks__title anim-uni-in-up">
								<p className="text-5xl! font-bold! leading-tight!">
									Investigadores Sociales
								</p>
							</div>

							<div className="footer-blocks__socials">
								<ul className="footer-socials">
									{team.socialResearchers.map((e) => (
										<li className="footer-socials__item anim-uni-in-up" key={e}>
											{e}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
