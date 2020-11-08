import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          social {
            behance
            dribbble
            instagram
            github
          }
        }
      }
    }
  `)
  const { social, email } = data.site.siteMetadata
  return (
    <footer>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid gap-4 sm:gap-8 grid-cols-8 sm:grid-cols-12 mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 col-span-8">
          Trabajemos juntos en tu próximo proyecto.
        </h1>
        <div className="text-3xl leading-none mb-64 col-start-2 col-end-8">
          <p className="font-bold">Correo electrónico</p>
          <a
            href={`mailto:${email}`}
            className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
          >
            {email}
          </a>
        </div>
        <div className="pb-8 text-xl font-semibold flex items-center justify-between flex-grow flex-wrap col-span-8 sm:col-span-12">
          <p className="order-2 sm:order-1">
            Hecho con{' '}
            <a
              className="no-underline border-b-2 border-solid border-black hover:border-transparent"
              href="https://www.gatsbyjs.com/"
            >
              GatsbyJS
            </a>
            ,{' '}
            <a
              className="no-underline border-b-2 border-solid border-black hover:border-transparent"
              href="https://tailwindcss.com/"
            >
              TailwindCSS
            </a>{' '}
            y{' '}
            <a
              className="no-underline border-b-2 border-solid border-black hover:border-transparent"
              href="https://www.sanity.io/"
            >
              Sanity.io
            </a>
            . El código fuente lo puedes encontrar en{' '}
            <a
              className="no-underline border-b-2 border-solid border-black hover:border-transparent"
              href="https://github.com/alvaaz/personal"
            >
              GitHub
            </a>
            .
          </p>
          <p className="order-1 sm:order-2">
            {Object.keys(social).map((key, i) => (
              <a
                key={i}
                href={`https://www.${key}.com/${social[key]}`}
                className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
              >
                {key}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
