import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { ProjectProps } from '../types'

export function ProjectsList({ projects }: { projects: ProjectProps }) {
  return (
    <div className="articles col-start-1 col-end-13">
      {projects.map((project, index) => (
        <div className="article" key={index}>
          <Img className="article__poster" fluid={project.poster.asset.fluid} alt={project.title} />

          <p className="font-extrabold text-lg sm:text-xl uppercase text-red tracking-wider">
            {project.categories.map((category) => category.name).join(' / ')}
          </p>
          <Link to={`/project/${project.slug.current}`}>
            <h2 className="article__title sm:text-5xl">{project.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}
