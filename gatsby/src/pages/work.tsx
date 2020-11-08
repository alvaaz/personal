import * as React from 'react'
import { graphql } from 'gatsby'
import { ProjectsProps } from '../types'
import { ProjectsList } from '../components/ProjectsList'
import { ThemeContext } from '../components/ThemeProvider'

export default function PortfolioPage({ data }: { data: ProjectsProps }) {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext)
  if (!darkMode) {
    React.useEffect(() => {
      toggleDarkMode()
    }, [])
  }
  const projects = data.projects.nodes
  return (
    <>
      <div className="grid gap-x-8 pb-24 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid-cols-8 sm:grid-cols-12 bg-red-lighter mb-24">
        <p className="text-5xl font-bold col-start-1 col-end-7 mb-8">Portafolio</p>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-8">
          Algunos proyectos en los que he participado.
        </p>
      </div>
      <main className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 mx-auto mb-56">
        <ProjectsList projects={projects} />
      </main>
    </>
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
