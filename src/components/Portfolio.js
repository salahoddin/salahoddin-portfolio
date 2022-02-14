import React, { useState, useEffect } from 'react'

const Portfolio = ({ data }) => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		if (data) {
			const { projects } = data['portfolio']
			setProjects(projects)
		}
	}, [data])

	return (
		<section id='portfolio'>
			<div className='row'>
				<div className='twelve columns collapsed'>
					<h1>Check Out Some of My Works.</h1>

					<div
						id='portfolio-wrapper'
						className='bgrid-quarters s-bgrid-thirds cf'
					>
						{projects.map((p) => (
							<div key={p.title} className='columns portfolio-item'>
								<div className='item-wrap'>
									<a href={p.url} title={p.title} target='_blank'>
										<img alt={p.title} src={`images/portfolio/${p.image}`} />
										<div className='overlay'>
											<div className='portfolio-item-meta'>
												<h5>{p.title}</h5>
												<p>{p.category}</p>
											</div>
										</div>
										<div className='link-icon'>
											<i className='fa fa-link'></i>
										</div>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
