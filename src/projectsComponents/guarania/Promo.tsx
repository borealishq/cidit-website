import { staticPath } from "../../utils/staticPath";

export default function Promo() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden mt-30! pb-22!">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="grid grid-cols-2 gap-15">
								<div className="mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-300!">
									<div className="mxd-stats-cards__inner align-end radius-m padding-0! bg-gn-primary-400!">
										<a
											href={staticPath(
												"projects/img/guarania/explicacion-del-mboe-hara-digital.pdf"
											)}
											target="_blank"
										>
											<img
												src={staticPath(
													"projects/img/guarania/mboe-hara-digital.avif"
												)}
												alt="Illustration"
												className="size-full! object-cover"
											/>
										</a>
									</div>
								</div>

								<div className="mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-300!">
									<div className="mxd-stats-cards__inner align-end radius-m padding-0! bg-gn-primary-400!">
										<a
											href={staticPath(
												"projects/img/guarania/explicacion-del-mboe-hara-digital.pdf"
											)}
											target="_blank"
										>
											<img
												src={staticPath(
													"projects/img/guarania/mboe-hara-digital.avif"
												)}
												alt="Illustration"
												className="size-full! object-cover"
											/>
										</a>
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
