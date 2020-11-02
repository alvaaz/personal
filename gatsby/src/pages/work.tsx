import * as React from 'react'
import { graphql } from 'gatsby'
import { ProjectsProps } from '../types'
import { ProjectsList } from '../components/ProjectsList'
import CategoriesFilter from '../components/CategoriesFilter'

export default function PortfolioPage({ data }: { data: ProjectsProps }) {
  const projects = data.projects.nodes
  return (
    <div className="px-12 sm:px-64">
      <p>Portfolio</p>
      <CategoriesFilter />
      <ProjectsList projects={projects} />
    </div>
  )
}

export const query = graphql`
  query ProjectsQuery {
    projects: allSanityProject {
      nodes {
        title
        categories {
          name
        }
        slug {
          current
        }
        poster {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
