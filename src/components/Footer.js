import { Link } from 'gatsby'

import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
	<>
		<div className="container mx-auto py-6 px-4 sm:px-0">
			<h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 w-9/12 sm:w-6/12">
				Let’s work together on your next project.
			</h1>
			<div className="text-3xl leading-none mb-64">
				<p className="font-bold">Email address</p>
				<a
					href="aaa@aaaa.com"
					className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
				>
					aaa@aaaa.com
				</a>
			</div>
			<div className="container pb-8 text-3xl mx-auto font-semibold">
				<Link
					to="/about/"
					className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
				>
					Dribble
				</Link>
				<Link
					to="#"
					className="no-underline pb-1 mt-4 border-b-2 border-solid border-transparent hover:border-black mr-4"
				>
					Behance
				</Link>
				<Link
					to="#"
					className="no-underline pb-1 mt-4 border-b-2 border-solid border-transparent hover:border-black"
				>
					Instagram
				</Link>
			</div>
		</div>
	</>
)

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
