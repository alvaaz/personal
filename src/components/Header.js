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
			<header className="bg-red-lighter h-screen pb-20 lg:h-screen lg:pb-0">
				<div className="absolute right-0 top-0 bg-red rounded-full circle"></div>
				<Nav siteTitle={data.site.siteMetadata.titleAlt}></Nav>
				{children}
			</header>
		</>
	)
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Header
