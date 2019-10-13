import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					email
					social {
						behance
						dribbble
						instagram
						github
					}
				}
			}
		}
	`)
	const { social, email } = data.site.siteMetadata
	return (
		<>
			<div className="container mx-auto py-6 px-4 sm:px-0">
				<h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 w-9/12 sm:w-6/12">
					Let’s work together on your next project.
				</h1>
				<div className="text-3xl leading-none mb-64">
					<p className="font-bold">Email address</p>
					<a
						href={`mailto:${email}`}
						className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
					>
						{email}
					</a>
				</div>
				<div className="container pb-8 text-xl mx-auto font-semibold">
					{
						Object.keys(social).map((key, i) => (
								<a key={i} href={`https://www.${key}.com/${social[key]}`}
									className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
									>
										{key}
									</a>
							)
						)
					}
				</div>
			</div>
		</>
	)
}

export default Footer
