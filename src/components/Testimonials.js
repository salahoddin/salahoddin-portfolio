import React, { useState, useEffect } from 'react'

const Testimonials = ({ data }) => {
	const [testimonials, setTestimonials] = useState([])

	useEffect(() => {
		if (data) {
			const { testimonials } = data['testimonials']
			setTestimonials(testimonials)
			console.log(testimonials[0].text)
		}
	}, [data])

	return (
		<section id='testimonials'>
			<div className='text-container'>
				<div className='row'>
					<div className='two columns header-col'>
						<h1>
							<span>Client Testimonials</span>
						</h1>
					</div>

					<div className='ten columns flex-container'>
						<ul className='slides'>
							{testimonials.map((t) => (
								<li key={t.user}>
									<blockquote>
										<p>{t.text}</p>
										<cite>{t.user}</cite>
									</blockquote>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
