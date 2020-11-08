import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { ThemeContext } from '../components/ThemeProvider'
import SEO from '../components/SEO'

type ProjectProps = {
  project: {
    title: string
    excerpt: string
    categories: {
      name: string
    }[]
    table: {
      contributors: string
      duration: string
      role: string
      year: number
    }
    section1: {
      content: string
      title: string
      image1: {
        asset: {
          fluid: {
            src: string
          }
        }
      }
      image2: {
        asset: {
          fluid: {
            src: string
          }
        }
      }
    }
    section2: {
      content: string
      title: string
      quote: string
    }
    section3: {
      content: string
      title: string
      image1: {
        asset: {
          fluid: {
            src: string
          }
        }
      }
    }
    slug: {
      current: string
    }
    poster: {
      asset: {
        fluid: {
          src: string
        }
      }
    }
  }
}

export default function SingleProjectPage({ data }: { data: ProjectProps }) {
  const { project } = data
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext)
  if (darkMode) {
    React.useEffect(() => {
      toggleDarkMode()
    }, [])
  }
  return (
    <>
      <SEO title={project.title} />
      <div className="grid gap-x-8 pb-24 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider text-red col-start-1 col-end-9 sm:col-end-8">
          {project.categories.map((category) => category.name).join(' / ')}
        </p>
        <h2 className="article__title col-start-1 col-end-7 mb-8">{project.title}</h2>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-16">
          {project.excerpt}
        </p>

        <div className="col-start-2 col-end-9 flex table-custom flex-wrap text-red">
          <div className="table-custom__section">
            <div className="table-custom__title">Rol</div>
            <div className="table-custom__content">{project.table.role}</div>
          </div>
          <div className="table-custom__section">
            <div className="table-custom__title">Colaboradores</div>
            <div className="table-custom__content">{project.table.contributors}</div>
          </div>
          <div className="table-custom__section">
            <div className="table-custom__title">Año</div>
            <div className="table-custom__content">{project.table.year}</div>
          </div>
          <div className="table-custom__section">
            <div className="table-custom__title">Duración</div>
            <div className="table-custom__content">{project.table.duration}</div>
          </div>
        </div>
      </div>
      <div
        className="bg-red-lighter grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto  px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 pt-20"
        style={{ maxHeight: '500px', marginBottom: '500px' }}
      >
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          {project.section1.title}
        </p>
        <p className="col-start-2 col-end-9 leading-tight text-2xl mb-8">
          {project.section1.content}
        </p>
        <Img
          className="col-start-1 col-end-9 sm:col-start-2 sm:col-end-6"
          style={{ height: 'min-content' }}
          fluid={project.section1.image1.asset.fluid as FluidObject}
          alt={project.section1.title}
        />
        <Img
          className="col-start-1 col-end-9 sm:col-start-6 sm:col-end-13"
          fluid={project.section1.image2.asset.fluid as FluidObject}
          alt={project.section1.title}
        />
      </div>
      <div className="grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 master mb-32">
        <p className="col-start-2 col-end-9 sm:col-end-6 relative quote"></p>

        <div className="col-span-8 sm:col-start-7 sm:col-end-13 mb-8 subgrid gap-8">
          <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
            {project.section2.title}
          </p>
          <p className="leading-tight text-2xl col-start-2 col-end-9 sm:col-start-2 sm:col-end-7">
            {project.section2.content}
          </p>
        </div>
      </div>
      <div className="grid gap-8 pb-24 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          {project.section3.title}
        </p>
        <p className="col-start-2 col-end-9 sm:col-end-7 leading-tight text-2xl mb-8">
          {project.section3.content}
        </p>
        <Img
          className="col-start-2 col-end-9 sm:col-start-7 sm:col-end-13"
          fluid={project.section3.image1.asset.fluid as FluidObject}
          alt={project.section3.title}
        />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      excerpt
      categories {
        name
      }
      table {
        contributors
        duration
        role
        year
      }
      section1 {
        content
        title
        image1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image2 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      section2 {
        title
        content
      }
      section3 {
        title
        content
        image1 {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
