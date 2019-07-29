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
			<div className="max-w-6xl mx-auto my-0">
				<main className={type ? 'relative': ''}>{children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

Main.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Main
