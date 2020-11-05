import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { ProjectsProps } from '../types'
import { ProjectsList } from '../components/ProjectsList'

export default function HomePage({ data }: { data: ProjectsProps }) {
  const projects = data.projects.nodes
  return (
    <>
      <header className="bg-red-lighter mb-24 pb-32">
        <div className="px-12 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid gap-8 grid-cols-8 sm:grid-cols-12 mx-auto">
          <h1 className="text-4xl sm:text-6xl sm:leading-none leading-tight mb-24 col-span-9 sm:col-span-12 md:col-span-8">
            <span className="font-semibold block">Diseñador de productos digitales </span> viviendo
            en Viña del Mar, Chile. Con experiencia en el desarrollo de{' '}
            <span className="font-semibold">Sistemas de Diseño</span>. Especializándome
            <span className="font-semibold"> en desarrollo front-end</span>.
          </h1>
          <p className="font-extrabold text-lg sm:text-xl uppercase tracking-wider col-start-1 sm:col-start-2 col-end-10">
            Background
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-4">
            👋 Soy Álvaro Goede. Actualmente estoy enfocado en la intersección del diseño, código y
            la estrategia para ayudar a las empresas a lanzar productos asombrosos. Disfruto
            compartir mi conocimiento y habilidades con mi equipo para que todos tengamos la
            oportunidad de crecer juntos.
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-4">
            Durante 4 años he trabajado en la creación de interfaces gráficas, sistemas de diseño,
            estudios de usuario y estrategias de producto para grandes compañías del área
            tecnológica y start-ups. En los últimos dos años, me he especializado en React,
            Styled-Components, y NextJs con Typescript con la finalidad de ampliar mis conocimientos
            y desenvolverme con mayor naturalidad en equipos de desarrollo ágiles. También, he
            tenido la oportunidad de levantar entornos de desarrollo con NodeJS, GraphQL y MongoDB.
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-4">
            Actualmente, me desempeño como diseñador de productos en una plataforma de seguros
            generales para LATAM. Mi principal responsabilidad es supervisar el diseño del producto
            y el desarrollo del sistema de diseño. Dirijo junto al equipo de desarrollo la mejor
            manera de abordar los requerimientos.
          </p>
          <p className="text-2xl sm:text-3xl font-regular leading-tight col-start-2 col-end-9 sm:col-end-10 mb-16">
            Finalmente, he apoyado diversos proyectos de diseño para empresas como Ripley, Montt
            Group, I-Med, GapJumpers y Autentia.
          </p>
          <a href="https://media.graphcms.com/Iumra2hpR5KQwOqAMwv4" className="button-primary">
            Download My letter presentation
          </a>
        </div>
      </header>
      <main className="px-12 sm:px-16 md:px-24 lg:px-32 xl:px-64 mx-auto mb-56">
        <h2 className="font-extrabold text-3xl sm:text-5xl leading-none col-span-8 text-red mb-8">
          Productos destacados
        </h2>
        <p className="col-start-2 col-end-7 font-medium leading-tight text-xl sm:text-2xl sm:text-3xl mb-20">
          Algunos proyectos que he seleccionado por su relevancia y
        </p>
        <ProjectsList projects={projects} />
        <Link className="button-primary" to="/work">
          Ver todos los trabajos
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
