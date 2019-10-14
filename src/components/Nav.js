import { Link } from 'gatsby'

import PropTypes from 'prop-types'
import React from 'react'

const Nav = ({ siteTitle }) => (
	<>
		<nav className="container mx-auto flex items-baseline justify-between flex-wrap py-6 mb-20 sm:mb-32 relative z-10 px-4 sm:px-0">
			<div className="flex items-center flex-shrink-0 text-white lg:flex-grow">
				<Link to="/" className="text-3xl font-bold text-black">
					{siteTitle}
				</Link>
			</div>
			<div className="lg:flex lg:items-center lg:w-auto">
			</div>
		</nav>
	</>
)

Nav.propTypes = {
	siteTitle: PropTypes.string,
}

Nav.defaultProps = {
	siteTitle: ``,
}

export default Nav
