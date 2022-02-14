import React, { useState, useEffect } from 'react'

const Header = ({ data }) => {
	const [name, setName] = useState('')
	const [occupation, setOccupation] = useState('')
	const [description, setDescription] = useState('')
	const [city, setCity] = useState('')
	const [social, setSocial] = useState([])

	useEffect(() => {
		if (data) {
			// console.log(data['main']['name'])
			const {
				name,
				occupation,
				description,
				address: { city },
				social,
			} = data['main']
			setName(name)
			setOccupation(occupation)
			setDescription(description)
			setCity(city)
			setSocial(social)
		}
	}, [data])

	return (
		<header id='home'>
			<nav id='nav-wrap'>
				<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
					Show navigation
				</a>
				<a className='mobile-btn' href='#home' title='Hide navigation'>
					Hide navigation
				</a>

				<ul id='nav' className='nav'>
					<li className='current'>
						<a className='smoothscroll' href='#home'>
							Home
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#about'>
							About
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#resume'>
							Resume
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#portfolio'>
							Works
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#testimonials'>
							Testimonials
						</a>
					</li>
					<li>
						<a className='smoothscroll' href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className='row banner'>
				<div className='banner-text'>
					<h1 className='responsive-headline'>I'm {name}.</h1>
					<h3>
						I'm a {city} based <span>{occupation}</span>. {description}.
					</h3>
					<hr />
					<ul className='social'>
						{social.map((s) => (
							<li key={s.name}>
								<a href={s.url} target='_blank'>
									<i className={s.className}></i>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<p className='scrolldown'>
				<a className='smoothscroll' href='#about'>
					<i className='icon-down-circle'></i>
				</a>
			</p>
		</header>
	)
}

export default Header
