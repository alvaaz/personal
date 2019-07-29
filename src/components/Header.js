/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Nav from './Nav'

const Header = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					titleAlt
				}
			}
		}
	`)

	return (
		<>
			<header className="bg-red-lighter h-screen">
				<Nav siteTitle={data.site.siteMetadata.titleAlt}></Nav>
				<div className="mx-auto my-0 max-w-6xl px-6 py-4">
					{children}
				</div>
			</header>
		</>
	)
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Header
