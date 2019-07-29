import PropTypes from 'prop-types'
import React from 'react'

const Hero = () => (
	<>
		<div className="max-w-3xl">
			<h1 className="text-6xl font-bold leading-none mb-16">
				Welcome! I'm Álvaro Göede Rivera, a graphic designer, amateur
				computer programmer and musician.
			</h1>
			<p className="text-2xl font-regular leading-tight mb-10">
				Currently, I've specialized myself in the area of interface
				designing, and in my free time I continue learning Javascript
				and React - a JS library that facilitates the development of
				interfaces. Through my hard work and perseverance, I seek to
				create a unique hallmark to improve the life of the users.
			</p>
			<a
				href="#"
				className="no-underline text-2xl font-semibold pb-1 border-b-2 border-solid border-transparent hover:border-red"
			>
				hi@agoede.cl
			</a>
		</div>
	</>
)

Hero.propTypes = {
	siteTitle: PropTypes.string,
}

Hero.defaultProps = {
	siteTitle: ``,
}

export default Hero
