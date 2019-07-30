/**
 * Main component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ type, children }) => {
	return (
		<>
			<div className="container mx-auto py-6 my-0 px-4 sm:px-0">
				<main className={type ? 'relative' : ''}>{children}</main>
			</div>
		</>
	)
}

Main.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Main
