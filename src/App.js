import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
	const [resumeData, setResumeData] = useState(null)
	const [success, setSuccess] = useState(false)

	const getResumeData = async () => {
		const response = await fetch('/resumeData.json')
		const resume = await response.json()
		setResumeData(resume)
		setSuccess(true)
	}

	useEffect(() => {
		getResumeData()
	}, [success])

	return (
		<div className='App'>
			<Header data={resumeData} />
			<About data={resumeData} />
			<Resume data={resumeData}></Resume>
			<Portfolio data={resumeData}></Portfolio>
			<Testimonials data={resumeData}></Testimonials>
			<Contact data={resumeData}></Contact>
			<Footer data={resumeData}></Footer>
		</div>
	)
}

export default App
