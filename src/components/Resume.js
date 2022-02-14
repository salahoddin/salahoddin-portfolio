import React, { useEffect, useState } from 'react'

const Resume = ({ data }) => {
	const [skillmessage, setSkillMessage] = useState('')
	const [education, setEducation] = useState([])
	const [work, setWork] = useState([])
	const [skills, setSkills] = useState([])

	useEffect(() => {
		if (data) {
			const { skillmessage, education, work, skills } = data['resume']
			setSkillMessage(skillmessage)
			setEducation(education)
			setWork(work)
			setSkills(skills)
		}
	}, [data])

	return (
		<section id='resume'>
			<div className='row education'>
				<div className='three columns header-col'>
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<div className='row item'>
						<div className='twelve columns'>
							{education.map((e) => (
								<div key={e.school}>
									<h3>{e.school}</h3>
									<p className='info'>
										{e.degree} <span>&bull;</span>
										<em className='date'>{e.graduated}</em>
									</p>
									<p>{e.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='row work'>
				<div className='three columns header-col'>
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					{work.map((w) => (
						<div key={w.company}>
							<h3>{w.company}</h3>
							<p className='info'>
								{w.title}
								<span>&bull;</span> <em className='date'>{w.years}</em>
							</p>
							<p>{w.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className='row skill'>
				<div className='three columns header-col'>
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<p>{skillmessage}</p>

					<div className='bars'>
						<ul className='skills'>
							{skills.map((s) => (
								<li key={s.name}>
									<span
										style={{ width: s.level }}
										className={`bar-expand ${s.name}`}
									></span>
									<em>{s.name}</em>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Resume
