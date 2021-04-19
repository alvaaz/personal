import React from 'react'
import { Link } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import { ProjectProps } from '../types'

export function ProjectsList({ projects }: { projects: ProjectProps }) {
  console.log(projects)
  return (
    <div className="articles col-start-1 col-end-9 sm:col-end-13">
      {projects.map((project, index) => (
        <Link className="article" key={index} to={`/project/${project.slug.current}`}>
          <SanityImage
            {...project.poster}
            className="article__poster"
            alt={project.title}
            width={300}
            style={{
              width: '100%',
              height: '284px',
              objectFit: 'cover'
            }}
          />

          <p className="font-extrabold text-lg sm:text-xl uppercase text-red tracking-wider">
            {/* {project.categories.map((category) => category.name).join(' / ')} */}
          </p>

          <h2 className="article__title sm:text-5xl">{project.title}</h2>
        </Link>
      ))}
    </div>
  )
}
