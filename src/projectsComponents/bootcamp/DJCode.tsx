import { staticPath } from "../../utils/staticPath";

export default function DJCode() {
	return (
		<div className="mxd-section overflow-hidden">
			<div className="mxd-container">
				<div className="mxd-block">
					<div className="mxd-promo">
						<div className="mxd-promo__inner anim-zoom-out-container bg-purple-950!">
							<img
								src={staticPath("projects/img/bootcamp/sF1gH7xZ.avif")}
								alt="Ilustración DJ Code"
								className="parallax-img-small w-350! h-full! absolute right-0 object-cover mask-l-from-60% -mask-l-to-50% "
							/>

							<div className="mxd-promo__content gap-10! lg:w-1/2! lg:my-61!">
								<h3 className="anim-uni-in-up reveal-type text-8xl! text-white">
									DJ Code
								</h3>

								<div className="space-y-7! [&>*]:text-white! [&>*]:text-3xl!">
									<p className="anim-uni-in-up text-6xl! leading-relaxed">
										En el entorno actual, aprender lenguajes ya no es
										suficiente: el verdadero reto es aplicar ese conocimiento
										para alcanzar objetivos reales. En DJ CODE no solo
										enseñamos código; construimos las capacidades estratégicas
										que tu organización necesita. Vos definís el objetivo,
										nosotros diseñamos la currícula exacta, y con el
										acompañamiento de nuestros mentores garantizamos que el
										aprendizaje se traduzca en práctica efectiva y resultados
										tangibles.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
