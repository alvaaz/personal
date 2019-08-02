import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Main from '../components/Main'
import SEO from '../components/seo'
import Image from '../components/Image'

const About = () => (
	<>
		<Header>
			<SEO title="🙋About" />
			<div className="container px-4 sm:px-0 w-full lg:w-auto mx-auto">
				<div className="w-full md:w-2/3 lg:w-2/4">
					<Image />
					<div className="h-6 w-64 bg-red mb-10"></div>
				</div>
				<h1 className="text-6xl font-bold leading-none mb-16 w-full lg:w-3/4">
					I consider myself a professional who characterizes for his
					perseverance, creativity and versatility.
				</h1>
			</div>
		</Header>
		<Main type={false}>
			<p className="pt-10 text-4xl font-semibold leading-tight mb-32 w-full lg:w-3/4">
				In every project I have been part of along my career, I have
				faced new areas. However, I have seen every challenge as an
				opportunity to learn and improve. I have also lead projects that
				have required good communication with the clients and an
				effective organization. In addition, I think that I have soft
				skills such as patience, honesty, and commitment, which are
				essential to finish any project successfully.
			</p>
			<div class="flex flex-wrap mb-32 w-full lg:w-3/4">
				<div class="w-full sm:w-2/5 mb-4 mr-16">
					<h1 class="text-5xl font-bold">Main skills.</h1>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">
							User experience design (ux)
						</p>
						<p class="text-3xl font-semibold text-gray-500">
							Delight the user and make it work.
						</p>
					</div>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">
							Web and user interface design
						</p>
						<p class="text-3xl font-semibold text-gray-500">
							Websites, web experiences, ...
						</p>
					</div>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">Interaction design</p>
						<p class="text-3xl font-semibold text-gray-500">
							I like to move it move it.
						</p>
					</div>
				</div>
				<div class="w-full sm:w-2/5 mb-4">
					<h1 class="text-5xl font-bold">Values.</h1>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">
							Good design is good business
						</p>
						<p class="text-3xl font-semibold text-gray-500">
							It’s not only about beauty, it has to work.
						</p>
					</div>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">Never not learning</p>
						<p class="text-3xl font-semibold text-gray-500">
							There’s always something new to learn.
						</p>
					</div>
					<div className="pb-5 pt-4">
						<p class="text-3xl font-semibold">
							Get to the root of the problem
						</p>
						<p class="text-3xl font-semibold text-gray-500">
							To come up with the best solution.
						</p>
					</div>
				</div>
			</div>
			<div class="mb-32">
				<h1 class="text-5xl font-bold leading-tight w-full lg:w-2/5 mb-10">
					Features, interviews, mentions & recognition.
				</h1>
				<div className="pb-5 pt-4">
					<p class="text-3xl font-semibold">Features</p>
					<ul>
						<li class="text-3xl font-semibold text-gray-500">
							Muzli by Invision — UI interactions of the week
							(x10)
						</li>
						<li class="text-3xl font-semibold text-gray-500">
							Muzli by Invision — UI interactions of the week
							(x10)
						</li>
						<li class="text-3xl font-semibold text-gray-500">
							Muzli by Invision — UI interactions of the week
							(x10)
						</li>
					</ul>
				</div>
				<div className="pb-5 pt-4">
					<p class="text-3xl font-semibold">Study</p>
					<ul>
						<li class="text-3xl font-semibold text-gray-500">
							Best student generation Graphic Designer in DUOC UC,
							2018
						</li>
					</ul>
				</div>
				<div className="pb-5 pt-4">
					<p class="text-3xl font-semibold">Experience</p>
					<ul>
						<li class="text-3xl font-semibold text-gray-500">
							Practical intermediate ILOGICA 2015
						</li>
						<li class="text-3xl font-semibold text-gray-500">
							Product Designer at JumpittLabs actually
						</li>
					</ul>
				</div>
			</div>
		</Main>
		<Footer />
	</>
)

export default About
