import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Card from '../components/Card'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Class from '../components/Class'

const IndexPage = () => (
	<>
		<Header>
			<SEO title="👋Hi" />
			<div className="container px-4 sm:px-0 w-full lg:w-auto mx-auto">
				<h1 className="text-4xl sm:text-6xl font-bold leading-none mb-16 w-full lg:w-2/4">
					Welcome! I'm Álvaro Göede Rivera, a graphic designer,
					amateur computer programmer and musician.
				</h1>
				<p className="text-xl sm:text-2xl font-regular leading-tight mb-10 w-full lg:w-2/4">
					Currently, I've specialized myself in the area of interface
					designing, and in my free time I continue learning
					Javascript and React.
				</p>
				<a
					href="#"
					className="text-xl sm:text-2xl no-underline font-semibold pb-1 border-b-2 border-solid border-transparent hover:border-red"
				>
					hi@agoede.cl
				</a>
			</div>
		</Header>
		<Main type={true}>
			<StaticQuery
				query={graphql`
					query ProjectsQuery {
						gcms {
							projects {
								title
								date
								image {
									url
								}
							}
						}
					}
				`}
				render={data => {
					if (!data.gcms) {
						return <p>Loading…</p>
					}
					return data.gcms.projects.map((d, i) => (
						<Card
							title={d.title}
							elevation={d.date}
							src={d.image ? d.image.url : undefined}
							key={i}
						/>
					))
				}}
			/>
			<h1 className="text-4xl sm:text-6xl font-bold mb-10">My classes.</h1>
			<Class />
		</Main>
		<Footer />
	</>
)

export default IndexPage
