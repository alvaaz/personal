import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

import Main from '../components/Main'
import SEO from '../components/seo'
import Image from '../components/Image'

const About = () => (
  <>
	<Header>
		<SEO title="🙋About" />
		<div className="max-w-3xl">
			<Image/>
			<div className="h-6 w-64 bg-red mb-10"></div>
			<h1 className="text-6xl font-bold leading-none mb-16">
				I consider myself a professional who characterizes for his perseverance, creativity and versatility.
			</h1>
		</div>
	</Header>
	<Main type={false}>
		<p className="pt-40 px-6 text-2xl font-regular leading-tight mb-10">
			In every project I have been part of along my career, I have faced new areas. However, I have seen every challenge as an opportunity to learn and improve. I have also lead projects that have required good communication with the clients and an effective organization. In addition, I think that I have soft skills such as patience, honesty, and commitment, which are essential to finish any project successfully.
		</p>
	</Main>
  </>
)

export default About
