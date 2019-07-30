import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Class = () => (
	<StaticQuery
		query={graphql`
			query ClassesQuery {
				gcms {
					classes {
						title
						description
						url
					}
				}
			}
		`}
		render={data => {
			if (!data.gcms) {
				return <p>Cargando...</p>
			}
			return data.gcms.classes.map((d, i) => (
				<div key={i} className="text-3xl pb-5 pt-4">
					<a
						className="font-bold underline hover:no-underline "
						href={d.url}
					>
						{d.title}
					</a>
					<p className="font-semibold text-gray-500">
						{d.description}
					</p>
				</div>
			))
		}}
	/>
)

export default Class
