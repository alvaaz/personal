import React from 'react'
import { graphql } from 'gatsby'
// import { ProjectProps } from '../types'
import Img, { FluidObject } from 'gatsby-image'

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
  return (
    <>
      <div className="grid gap-x-8 pb-24 px-12 sm:px-24 md:32 lg:48 xl:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider text-red col-start-1 col-end-9 sm:col-end-8">
          {project.categories.map((category) => category.name).join(' / ')}
        </p>
        <h2 className="article__title col-start-1 col-end-7 mb-8">{project.title}</h2>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-8">
          {project.excerpt}
        </p>
        <table className="table-auto col-start-2 col-end-9 text-red text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-solid border border-red uppercase font-extrabold text-xl tracking-wider">
                Role
              </th>
              <th className="px-4 py-2 border-solid border border-red uppercase font-extrabold text-xl tracking-wider">
                Contributors
              </th>
              <th className="px-4 py-2 border-solid border border-red uppercase font-extrabold text-xl tracking-wider">
                Year
              </th>
              <th className="px-4 py-2 border-solid border border-red uppercase font-extrabold text-xl tracking-wider">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                {project.table.role}
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                {project.table.contributors}
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                {project.table.year}
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                {project.table.duration}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="bg-red-lighter grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto px-12 sm:px-24 md:32 lg:48 xl:px-64 pt-20"
        style={{ maxHeight: '500px', marginBottom: '500px' }}
      >
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          {project.section1.title}
        </p>
        <p className="col-start-2 col-end-9 leading-tight text-2xl mb-8">
          {project.section1.content}
        </p>
        <Img
          className="col-start-2 col-end-9 sm:col-end-6"
          fluid={project.section1.image1.asset.fluid as FluidObject}
          alt={project.section1.title}
        />
        <Img
          className="col-start-2 col-end-9 sm:col-start-6 sm:col-end-13"
          fluid={project.section1.image2.asset.fluid as FluidObject}
          alt={project.section1.title}
        />
      </div>
      <div
        className="grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto px-12 sm:px-24 md:32 lg:48 xl:px-64 master"
        style={{ marginBottom: '300px' }}
      >
        <p className="font-medium text-2xl sm:text-4xl col-start-2 col-end-9 sm:col-end-6 relative text-white quote">
          {project.section2.quote}
        </p>

        <div className="col-start-7 col-end-12 mb-8 subgrid">
          <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-5">
            {project.section2.title}
          </p>
          <p className="leading-tight text-2xl col-start-2 col-end-5">{project.section2.content}</p>
        </div>
      </div>
      <div className="grid gap-8 pb-24 px-12 sm:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          {project.section3.title}
        </p>
        <p className="col-start-2 col-end-9 sm:col-end-8 leading-tight text-2xl mb-8">
          {project.section3.content}
        </p>
        <Img
          className="col-start-2 col-end-9 sm:col-start-6 sm:col-end-13"
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image2 {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      section2 {
        quote
        title
        content
      }
      section3 {
        title
        content
        image1 {
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
