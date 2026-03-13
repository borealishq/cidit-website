import { staticPath } from "../../utils/staticPath";

export default function Promo() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden mt-30! pb-22!">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="grid grid-cols-2 gap-15 lg:gap-0">
								<div className="mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right lg:h-360!">
									<div className="padding-0!">
										<a
											href={staticPath(
												"documents/brochure-mboe-hara-info-voluntarios-guarania.pdf"
											)}
											target="_blank"
										>
											<img
												src={staticPath(
													"projects/img/guarania/mboe-hara-digital.avif"
												)}
												alt="Illustration"
												className="size-full! object-cover aspect-square! radius-m"
											/>

											<p className="text-gray-800! text-center pt-2">
												Conoce más acerca de esta iniciativa
											</p>
										</a>

										<div className="flex justify-center mt-5">
											<a
												className="btn btn-anim btn-default btn-mobile-icon btn-outline"
												href="https://ciditpy.org/proyectos-cidit/guarania/postulacion/"
												target="_blank"
												aria-label="Aplica aquí"
											>
												<span className="btn-caption">Aplica aquí</span>
												<i className="ph ph-arrow-up-right"></i>
											</a>
										</div>
									</div>
								</div>

								<div className="mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right lg:h-360!">
									<div className="padding-0!">
										<a
											href={staticPath(
												"documents/brochure-mboe-hara-info-voluntarios-guarania.pdf"
											)}
											target="_blank"
										>
											<img
												src={staticPath(
													"projects/img/guarania/rastro-guarani.avif"
												)}
												alt="Illustration"
												className="size-full! object-cover aspect-square! radius-m"
											/>

											<p className="text-gray-800! text-center pt-2">
												Más información sobre qué materiales donar
											</p>
										</a>

										<div className="flex justify-center mt-5">
											<a
												className="btn btn-anim btn-default btn-mobile-icon btn-outline"
												href="https://ciditpy.org/proyectos-cidit/guarania/ficha-del-donante/"
												target="_blank"
												aria-label="Registra tu donación aquí"
											>
												<span className="btn-caption">
													Registra tu donación aquí
												</span>
												<i className="ph ph-arrow-up-right"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
