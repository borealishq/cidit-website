import { staticPath } from "../../utils/staticPath";

const doc = (path: string) => staticPath(`documents/publicaciones/${path}`);

const listOfDocuments = [
	{
		year: "2025",
		list: [
			{
				headline: "Diagnóstico de GuaranIA",
				subheadline: "",
				link: doc("guarania-diagnostico-2025.pdf"),
			},
		],
	},
	{
		year: "2024",
		list: [
			{
				headline: "Estudio y mapeo de empresas",
				subheadline: "Desarrollo Jóven",
				link: "#",
			},
			{
				headline: "Tecnología digital como herramienta de inclusión",
				subheadline: "",
				link: "#",
			},
		],
	},
	{
		year: "2018",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Marzo",
				link: doc("cidit-boletin-marzo-2018.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Febrero",
				link: doc("cidit-boletin-febrero-2018.pdf"),
			},
			{
				headline:
					"Sistematización de la jornada internacional de innovación en la gestión de emprendedores involucrados a la economía creativa en un mercado competitivo",
				subheadline: "",
				link: doc("sistematizacion-jornada-innovacion-2018.pdf"),
			},
		],
	},
	{
		year: "2017",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Diciembre",
				link: doc("cidit-boletin-diciembre-2017.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Julio",
				link: doc("cidit-boletin-julio-2017.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Junio",
				link: doc("cidit-boletin-junio-2017.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Abril",
				link: doc("cidit-boletin-abril-2017.pdf"),
			},
		],
	},
	{
		year: "2016",
		list: [
			{
				headline: "Boletín tecnológico",
				subheadline: "Diciembre",
				link: doc("cidit-boletin-diciembre-2016.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Noviembre",
				link: doc("cidit-boletin-noviembre-2016.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Octubre",
				link: doc("cidit-boletin-octubre-2016.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Septiembre",
				link: doc("cidit-boletin-septiembre-2016.pdf"),
			},
			{
				headline: "Boletín tecnológico",
				subheadline: "Julio",
				link: doc("cidit-boletin-julio-2016.pdf"),
			},
		],
	},
];

export default function List() {
	return (
		<div className="tp-career-inner-award-ptb pt-10 lg:pt-150 pb-10 lg:pb-150">
			<div className="container">
				<section className="space-y-10 lg:space-y-22!">
					{listOfDocuments.map((e, idx) => (
						<div className="grid lg:grid-cols-12 lg:gap-x-10" key={idx}>
							<div className="lg:col-span-2">
								<h4 className="tp-section-title text-4xl lg:text-[42px]! tl-unbounded fw-600 tt-capitalize pt-0 lg:pt-7!">
									{e.year}
								</h4>
							</div>

							<div className="lg:col-span-10">
								{e.list.map((item, idx) => (
									<div className="row" key={idx}>
										<div className="ca-award-item-wrap">
											<div className="ca-award-item hover-reveal-item p-relative mb-5 bg-gray-100">
												<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 p-15 lg:p-0">
													<div className="flex-1 overflow-hidden">
														<div className="ca-award-box-left z-index-3">
															<p className="ca-award-text lg:whitespace-nowrap lg:truncate text-xl lg:text-base!">
																{item.headline}
															</p>
														</div>
													</div>
 
													<div className="flex flex-row space-x-0 lg:space-x-8 items-center justify-between lg:justify-end gap-x-2">
														<div className="ca-award-box-right z-index-3 flex justify-between align-items-center gap-8">
															<span className="ca-award-position">
																{item.subheadline}
															</span>
															<div className="ca-award-btn">
																{item.link === "#" ? (
																	<span className="text-gray-500! italic text-base!">
																		Próximamente
																	</span>
																) : (
																	<a
																		className="tp-btn-green tp-btn-anim"
																		href={item.link}
																		target="_blank"
																	>
																		<div className="tp-btn-text">
																			Descargar
																		</div>{" "}
																	</a>
																)}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
