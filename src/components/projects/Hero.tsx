import { staticPath } from "../../utils/staticPath";

export default function Hero() {
	return (
		<div
			className="hr-hero-bg include-bg z-index-1 hero-section"
			data-background={staticPath("assets/img/projects/hero-bg.avif")}
		>
			<div className="hr-hero-main d-flex flex-column justify-content-between h-100">
				<div className="hr-hero-content pl-160">
					<div className="row gx-0">
						<div className="col-xl-10">
							<div className="row align-items-end">
								<div className="col-lg-9">
									<div className="hr-hero-title-box">
										<h4 className="hr-hero-title tp-split-title leading-tight!">
											Proyectos <br />
											de Investigación
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row gx-0">
					<div className="col-xl-10">
						<div className="hr-feature-wrap pl-100">
							<div className="row gx-0">
								<div className="col-xl-4 col-lg-4 col-md-6">
									<div className="hr-feature-item d-flex align-items-start">
										<span className="hr-feature-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="white"
												className="size-12"
											>
												<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path>
											</svg>
										</span>
										<div className="hr-feature-content">
											<p>Proyectos de investigación basados en</p>
											<h4 className="hr-feature-title">Innovación Social</h4>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6">
									<div className="hr-feature-item d-flex align-items-start">
										<span className="hr-feature-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="white"
												className="size-12"
											>
												<path d="M18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15C13.6941 9 12.5831 8.16562 12.171 7.0009L11 7C9.9 7 9 7.9 9 9L9.0009 9.17102C10.1656 9.58312 11 10.6941 11 12C11 13.3059 10.1656 14.4169 9.0009 14.829L9 15C9 16.1 9.9 17 11 17L12.1707 17.0001C12.5825 15.8349 13.6937 15 15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21H15C13.6941 21 12.5831 20.1656 12.171 19.0009L11 19C8.79 19 7 17.21 7 15H5C3.34315 15 2 13.6569 2 12C2 10.3431 3.34315 9 5 9H7C7 6.79086 8.79086 5 11 5L12.1707 5.00009C12.5825 3.83485 13.6937 3 15 3H18ZM18 17H15C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19H18C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17ZM8 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM18 5H15C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7H18C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
											</svg>
										</span>
										<div className="hr-feature-content">
											<p>Proyectos basados en</p>
											<h4 className="hr-feature-title">
												Inteligencia Artificial
											</h4>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6">
									<div className="hr-feature-item d-flex align-items-start">
										<span className="hr-feature-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="white"
												className="size-12"
											>
												<path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14C14 15.8954 13.1046 15 12 15ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11ZM0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12ZM20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12ZM21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9Z"></path>
											</svg>
										</span>
										<div className="hr-feature-content">
											<p>Proyectos basados en la</p>
											<h4 className="hr-feature-title">Inclusión Social</h4>
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
