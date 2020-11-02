import React from 'react'
import { graphql } from 'gatsby'
// import { ProjectProps } from '../types'

type ProjectProps = {
  project: {
    title: string
    categories: {
      name: string
    }[]
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
      <div className="grid gap-x-8 pb-24 px-12 sm:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider text-red col-start-1 col-end-9 sm:col-end-8">
          {project.categories.map((category) => category.name).join(' / ')}
        </p>
        <h2 className="article__title col-start-1 col-end-7 mb-8">{project.title}</h2>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-8">
          I started Jellypepper in late 2017. Since then, we’ve had the privilege of working with
          massive companies and disruptive early-stage startups in industries like self-driving
          cars, sustainable energy financing, biotechnology, artificial intelligence and drones.
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
                Role
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                Contributors
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                Year
              </td>
              <td className="border-solid border border-red px-4 py-2 tracking-wider text-xl">
                Duration
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="bg-red-lighter grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto px-12 sm:px-64 pt-20"
        style={{ maxHeight: '500px', marginBottom: '500px', gridTemplateRows: 'auto auto 300px' }}
      >
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          Discovering a problem
        </p>
        <p className="col-start-2 col-end-9 leading-tight text-2xl mb-8">
          I started Jellypepper in late 2017. Since then, we’ve had the privilege of working with
          massive companies and disruptive early-stage startups in industries like self-driving
          cars, sustainable energy financing, biotechnology, artificial intelligence and drones.
        </p>
        <img
          className="col-start-2 col-end-9 sm:col-end-6"
          src="https://cdn.stocksnap.io/img-thumbs/960w/autumn-trees_WV0YTVMU7P.jpg"
        />
        <img
          className="col-start-2 col-end-9 sm:col-start-6 sm:col-end-13"
          src="https://cdn.stocksnap.io/img-thumbs/960w/autumn-trees_WV0YTVMU7P.jpg"
        />
      </div>
      <div
        className="grid gap-8 grid-cols-12 mx-auto px-64 master"
        style={{ marginBottom: '300px' }}
      >
        <p className="font-medium text-4xl col-start-2 col-end-6 relative text-white quote">
          “Florian helped us launch our new landingpage with a beautiful design and clear branding
          guidance. We couldn't be happier with his work and dedication.”
        </p>

        <div className="col-start-7 col-end-12 mb-8 subgrid">
          <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-5">
            Challenge
          </p>
          <p className="leading-tight text-2xl col-start-2 col-end-5">
            I started Jellypepper in late 2017. Since then, we’ve had the privilege of working with
            massive companies and disruptive early-stage startups in industries like self-driving
            cars, sustainable energy financing, biotechnology, artificial intelligence and drones.
          </p>
        </div>
      </div>
      <div className="grid gap-8 pb-24 px-12 sm:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider col-start-1 col-end-9 sm:col-end-5">
          Conclusion
        </p>
        <p className="col-start-2 col-end-9 sm:col-end-8 leading-tight text-2xl mb-8">
          I started Jellypepper in late 2017. Since then, we’ve had the privilege of working with
          massive companies and disruptive early-stage startups in industries like self-driving
          cars, sustainable energy financing, biotechnology, artificial intelligence and drones.
        </p>
        <img
          className="col-start-2 col-end-9 sm:col-start-8 sm:col-end-12"
          src="https://cdn.stocksnap.io/img-thumbs/960w/autumn-trees_WV0YTVMU7P.jpg"
        />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      categories {
        name
      }
    }
  }
`
