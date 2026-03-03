import { staticPath } from "../../utils/staticPath";

export default function ArtificialIntelligence() {
	return (
		<div className="ds-team-ptb pt-145 tp-fixed-title-wrap-3 pb-100 bg-primary-600">
			<div className="container container-1510">
				<div className="row">
					<div className="col-lg-5">
						<div className="ds-team-heading tp-fixed-title-3 pb-30">
							<div className="tp_fade_anim" data-delay=".3">
								<p className="text-2xl! text-white!">
									Nuestros proyectos basados en
								</p>
							</div>
							<h3 className="tp-section-title tl-unbounded mb-20 tp-split-title text-white!">
								Inteligencia <br />
								Artificial
							</h3>
						</div>
					</div>

					<div className="col-lg-7">
						<div className="ds-team-wrapper">
							<Card
								{...{
									image_src: "assets/img/projects/covida.avif",
									url: "proyectos/covida",
								}}
							/>

							<Card
								{...{
									image_src: "assets/img/projects/cofar.avif",
									url: "proyectos/cofar",
								}}
							/>

							<Card
								{...{
									image_src: "assets/img/projects/proteia.avif",
									url: "proyectos/proteia",
								}}
							/>

							<Card
								{...{
									image_src: "assets/img/projects/guarania.avif",
									url: "proyectos/guarania",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type CardProps = {
	image_src: string;
	url: string;
};

const Card = ({ image_src, url }: CardProps) => {
	return (
		<div
			className="ds-team-item mb-50 tp_fade_anim not-hide-cursor"
			data-delay=".3"
			data-cursor="Ver<br>Proyecto"
		>
			<div className="ds-team-item-thumb p-relative">
				<a href={staticPath(url)} className="d-block cursor-hide">
					<img src={staticPath(image_src)} alt="Portada de proyecto" />
				</a>
			</div>
		</div>
	);
};
