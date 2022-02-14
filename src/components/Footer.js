import React, { useState, useEffect } from 'react'

const Footer = ({ data }) => {
	const [networks, setNetworks] = useState([])

	useEffect(() => {
		if (data) {
			setNetworks(data['main']['social'])
		}
	}, [data])

	return (
		<footer>
			<div className='row'>
				<div className='twelve columns'>
					<ul className='social-links'>
						{networks.map((n) => (
							<li key={n.name}>
								<a href={n.url} target='_blank'>
									<i className={n.className}></i>
								</a>
							</li>
						))}
					</ul>

					<ul className='copyright'>
						<li style={{ color: 'white' }}>
							&copy; Copyright 2021 Battosai The Slasher
						</li>
					</ul>
				</div>
				<div id='go-top'>
					<a className='smoothscroll' title='Back to Top' href='#home'>
						<i className='icon-up-open'></i>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
