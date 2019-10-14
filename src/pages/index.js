import React from 'react'

import Header from '../components/Header'
import SEO from '../components/seo'
import Footer from '../components/Footer'

const IndexPage = () => (
	<>
		<Header>
			<SEO title="👋Hi" />
			<div className="container px-4 sm:px-0 w-full lg:w-auto mx-auto">
				<h1 className="text-4xl sm:text-6xl font-bold leading-none mb-16 w-full md:w-2/3 lg:w-2/4">
					Welcome! I'm Álvaro Göede Rivera, a graphic designer,
					amateur computer programmer and musician.
				</h1>
				<p className="text-xl sm:text-2xl font-regular leading-tight mb-16 w-full md:w-2/3 lg:w-2/4">
					Currently, I've specialized myself in the area of interface
					designing, and in my free time I continue learning
					Javascript and React.
				</p>
				<a
					href='https://media.graphcms.com/Iumra2hpR5KQwOqAMwv4'
					className="bg-red hover:bg-red-dark text-md text-white font-bold py-4 px-4 tracking-widest uppercase"
				>
					Download My letter presentation
				</a>
			</div>
		</Header>
		<Footer />
	</>
)

export default IndexPage
