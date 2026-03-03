import { staticPath } from "../../utils/staticPath";
import HTMLReactParser from "html-react-parser/lib/index";

// JSON DATA
import galleryCEI001 from "./static/gallery-CEI001.json";

const gallery = [
	// COMUNIDAD E INDIGENA
	{
		headline: "Comunidad e Indígena",
		items: [
			{
				title: "CDE - <span>Atracadero</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "<span>Cruz Roja Paraguaya</span> - Filial Alto Paraná",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Juan E. Oleary - <span>San Isidro Norte</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
		],
	},
	// SERVICIOS SOCIALES
	{
		headline: "Servicios Sociales Prioritarios",
		items: [
			{
				title: "Municipalidad de <span>Caaguazú</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Caazapá</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Coronel Oviedo</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Hernandarias</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Independencia</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Presidente Franco</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>San Juan Nepomuceno</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Villarrica</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Municipalidad de <span>Oleary</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
		],
	},
	// EDUCACIÓN
	{
		headline: "Educación",
		items: [
			{
				title: "Alto Paraná - <span>Colegio Hernandarias</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Alto Paraná - <span>Colegio JPII</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Alto Paraná - <span>Colegio O'Leary</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Alto Paraná - <span>Colegio Presidente Franco</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title:
					"Alto Paraná - <span>Dirección Departamental de Educación AP</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},

			{
				title: "Caaguazú - <span>San Lorenzo</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Caaguazú - <span>Colegio Inmaculada</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Caaguazú - <span>Colegio Sabino Rolón</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},

			{
				title: "Caazapá - <span>Colegio Defensores del Chaco</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
			{
				title: "Guairá - <span>Colegio Natalicio Talavera</span>",
				slug: "CEI001",
				cover_src: "projects/img/blog/preview/1000x1250_prv-01.webp",
			},
		],
	},
] as {
	headline: string;
	items: {
		title: string;
		slug: string;
		cover_src: string;
	}[];
}[];

export default function Gallery() {
	return (
		<>
			<div className="mxd-section padding-blog pt-36! pb-10!">
				<div className="mxd-container grid-container">
					<div className="mxd-block">
						<div className="mxd-section-title pre-grid">
							<div className="container-fluid p-0">
								<div className="row g-0">
									<div className="col-12 col-xl-3 mxd-grid-item no-margin">
										<div className="mxd-section-title__hrtitle">
											<h2 className="reveal-type anim-uni-in-up">Galería</h2>
										</div>
									</div>
									<div className="col-12 col-xl-4 mxd-grid-item no-margin">
										<div className="mxd-section-title__hrdescr">
											<p className="anim-uni-in-up">
												Implementación del uso de las herramientas de IA a
												través de pruebas piloto en las comunidades.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mxd-block">
						<div className="mxd-blog-preview">
							<div className="container-fluid p-0">
								{gallery.map((group, index) => (
									<div className="row g-0 pb-20!" key={index}>
										<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
											<h3>{group.headline}</h3>
										</div>

										{group.items.map((e, idx) => (
											<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
												<a
													className="mxd-blog-preview__media cursor-pointer"
													href={staticPath(
														`/proyectos/guarania/galeria/${e.slug}`
													)}
												>
													<div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small">
														<img
															className="parallax-img-small"
															src={staticPath(e.cover_src)}
															alt="Blog Preview Image"
														/>
													</div>

													<div className="mxd-preview-hover">
														<i className="mxd-preview-hover__icon">
															<img
																src={staticPath(
																	"/projects/img/icons/icon-eye.svg"
																)}
																alt="Eye Icon"
															/>
														</i>
													</div>
												</a>

												<div className="mxd-blog-preview__data">
													<a
														className="anim-uni-in-up text-4xl! cursor-pointer"
														href={staticPath(
															`/proyectos/guarania/galeria/${e.slug}`
														)}
													>
														{HTMLReactParser(e.title)}
													</a>
												</div>
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
