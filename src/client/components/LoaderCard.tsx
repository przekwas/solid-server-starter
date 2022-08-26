import React from 'react';

interface LoaderCardProps {
	number: number;
}

const LoaderCard = ({ number }: LoaderCardProps) => {
	return (
		<main className="container my-5">
			<section className="row justify-content-center">
				{[...Array(number)].map((_, idx) => (
					<div key={`loader-card-${idx}`} className="col-12 col-md-7">
						<div className="mb-3 shadow-sm card">
							<div className="card-body">
								<div className="mb-3 progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-label="Basic example"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
								<div className="mb-3 progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-label="Basic example"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
								<div className="mb-3 progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-label="Basic example"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
								<div className="mb-3 progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-label="Basic example"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										aria-label="Basic example"
										aria-valuenow={0}
										aria-valuemin={0}
										aria-valuemax={100}></div>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default LoaderCard;
