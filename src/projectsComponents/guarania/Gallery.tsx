import { staticPath } from "../../utils/staticPath";
import HTMLReactParser from "html-react-parser/lib/index";

export interface GalleryItem {
	title: string;
	name: string;
	cover_src: string;
}

export interface GalleryGroup {
	headline: string;
	items: GalleryItem[];
}

export default function Gallery({ gallery }: { gallery: GalleryGroup[] }) {
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
									<div className="col-12 col-xl-6 mxd-grid-item no-margin">
										<div className="mxd-section-title__hrdescr">
											<p className="anim-uni-in-up text-5xl!">
												Diagnostico por sectores priorizados y Socialización de
												resultados por territorios
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
											<div
												className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
												key={idx}
											>
												<a
													className="mxd-blog-preview__media cursor-pointer"
													href={staticPath(
														`/proyectos/guarania/galeria/${e.name}`
													)}
												>
													<div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small">
														{e.cover_src.length && (
															<img
																className="parallax-img-small"
																src={staticPath(
																	`projects/gallery/guarania/${e.name}/${e.cover_src}`
																)}
																alt="Blog Preview Image"
															/>
														)}
													</div>

													<div className="mxd-preview-hover">
														<i className="mxd-preview-hover__icon">
															<img
																src={staticPath(
																	"projects/img/icons/icon-eye.svg"
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
															`/proyectos/guarania/galeria/${e.name}`
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
