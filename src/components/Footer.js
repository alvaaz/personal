import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					social {
						behance
						dribbble
						instagram
						email
					}
				}
			}
		}
	`)
	const { social } = data.site.siteMetadata
	return (
		<>
			<div className="container mx-auto py-6 px-4 sm:px-0">
				<h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 w-9/12 sm:w-6/12">
					Let’s work together on your next project.
				</h1>
				<div className="text-3xl leading-none mb-64">
					<p className="font-bold">Email address</p>
					<a
						href={`mailto:${social.email}`}
						className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
					>
						{social.email}
					</a>
				</div>
				<div className="container pb-8 text-xl mx-auto font-semibold">
					<a
						href={`https://www.dribbble.com/${social.dribbble}`}
						className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
					>
						Dribbble
					</a>
					<a
						href={`https://www.behance.com/${social.behance}`}
						className="no-underline pb-1 mt-4 border-b-2 border-solid border-transparent hover:border-black mr-4"
					>
						Behance
					</a>
					<a
						href={`https://www.instagram.com/${social.instagram}`}
						className="no-underline pb-1 mt-4 border-b-2 border-solid border-transparent hover:border-black"
					>
						Instagram
					</a>
				</div>
			</div>
		</>
	)
}

export default Footer
