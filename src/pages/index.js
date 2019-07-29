import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Main from '../components/Main'

const IndexPage = () => (
	<>
		<Header>
			<SEO title="👋Hi" />
			<Hero />
		</Header>
		<Main type={true}>
			<StaticQuery
				query={graphql`
					query {
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
					return data.gcms.projects.map(d => (
						<Card
							title={d.title}
							elevation={d.date}
							src={d.image ? d.image.url : undefined}
						/>
					))
				}}
			/>
		</Main>
	</>
)

export default IndexPage
