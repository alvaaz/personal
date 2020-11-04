import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { ProjectsProps } from '../types'
import { ProjectsList } from '../components/ProjectsList'

export default function HomePage({ data }: { data: ProjectsProps }) {
  const projects = data.projects.nodes
  return (
    <>
      <header className="bg-red-lighter mb-24 pb-32">
        <div className="px-12 sm:px-24 md:32 lg:48 xl:px-64  grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto">
          <h1 className="text-4xl sm:text-6xl sm:leading-none leading-tight mb-24 col-span-9 sm:col-span-12 md:col-span-8">
            <span className="font-semibold block">Digital Product Designer</span> based in Viña del
            Mar, Chile. Professional in <span className="font-semibold">Design Systems</span>.
            Specializing in <span className="font-semibold">front-end development</span>.
          </h1>
          <p className="font-extrabold text-lg sm:text-xl uppercase tracking-wider col-start-1 sm:col-start-2 col-end-10">
            Background
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-4">
            Hi! I am Álvaro Goede. I am a remote designer with a can-do attitude. I am focused on
            the intersection of design, code, and strategy to help companies to launch striking
            products. I enjoy sharing my knowledge and skills with my team, so everyone has the
            opportunity to grow together.
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-4">
            For 4 years, I have worked in interface experiences, design systems, user research, and
            product strategy for big tech companies and start-ups. In the last two years, I have
            specialized in React, Styled-Components, and NextJS with TypeScript to write better
            JavaScript. Also, I have had the opportunity to build backend environments, with Node
            JS, GraphQL, and MongoDB.
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-16">
            Currently, I am designing a platform for Property and Casualty (P&C) Insurance Carriers
            in LATAM. My primary responsibility is to oversee product design and design system
            development. I lead the pre-launch effort along with the development team. Additionally,
            I have supported digital product designs for companies like Ripley, Montt Group, I-Med,
            GapJumpers, and Autentia.
          </p>
          <a href="https://media.graphcms.com/Iumra2hpR5KQwOqAMwv4" className="button-primary">
            Download My letter presentation
          </a>
        </div>
      </header>
      <main className="px-12 sm:px-64 mx-auto mb-56">
        <h2 className="font-extrabold text-3xl sm:text-5xl leading-none col-span-8 text-red mb-8">
          Selected projects
        </h2>
        <p className="col-start-2 col-end-7 font-medium leading-tight text-xl sm:text-2xl sm:text-3xl mb-20">
          Some important values I try to consider when I work on various products.
        </p>
        <ProjectsList projects={projects} />
        <Link className="button-primary" to="/work">
          View all works
        </Link>
      </main>
    </>
  )
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject(filter: { featured: { eq: true } }) {
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
