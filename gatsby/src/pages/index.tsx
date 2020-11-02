import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/Header'
import { ProjectsProps } from '../types'
import { ProjectsList } from '../components/ProjectsList'

export default function HomePage({ data }: { data: ProjectsProps }) {
  const projects = data.projects.nodes
  return (
    <>
      <Header>
        <div className="container grid gap-8 grid-cols-12 mx-auto">
          <h1 className="text-6xl leading-none mb-16 col-span-8">
            <span className="font-semibold block">Digital Product Designer</span> based in Viña del
            Mar, Chile. Professional in <span className="font-semibold">Design Systems</span>.
            Specializing in <span className="font-semibold">front-end development</span>.
          </h1>
          <p className="font-extrabold text-xl uppercase tracking-wider col-start-2 col-end-10 ">
            Background
          </p>
          <p className="text-3xl font-regular leading-tight col-start-2 col-end-10 mb-4">
            Hi! I am Álvaro Goede. I am a remote designer with a can-do attitude. I am focused on
            the intersection of design, code, and strategy to help companies to launch striking
            products. I enjoy sharing my knowledge and skills with my team, so everyone has the
            opportunity to grow together.
          </p>
          <p className="text-3xl font-regular leading-tight col-start-2 col-end-10 mb-4">
            For 4 years, I have worked in interface experiences, design systems, user research, and
            product strategy for big tech companies and start-ups. In the last two years, I have
            specialized in React, Styled-Components, and NextJS with TypeScript to write better
            JavaScript. Also, I have had the opportunity to build backend environments, with Node
            JS, GraphQL, and MongoDB.
          </p>
          <p className="text-3xl font-regular leading-tight col-start-2 col-end-10 mb-4">
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
      </Header>
      <main className="container mx-auto">
        <h2 className="font-extrabold text-5xl leading-none col-span-8 text-red">
          Selected projects
        </h2>
        <p className="col-start-2 col-end-7 font-medium leading-tight text-3xl mb-8">
          Some important values I try to consider when I work on various products.
        </p>
        <ProjectsList projects={projects} />
        <a href="#" className="button-primary">
          View all works
        </a>
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
