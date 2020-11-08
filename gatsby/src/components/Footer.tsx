import * as React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid gap-4 sm:gap-8 grid-cols-8 sm:grid-cols-12 mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 col-span-8">
          Trabajemos juntos en tu próximo proyecto.
        </h1>
        <div className="text-3xl leading-none mb-64 col-start-2 col-end-8">
          <p className="font-bold">Correo electrónico</p>
          <a
            href="mailto:alvaro@goede.cl"
            className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
          >
            alvaro@goede.cl
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
            <a
              href="https://www.behance.com/alvaaz"
              className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
            >
              behance
            </a>
            <a
              href="https://www.dribbble.com/alvaaz"
              className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
            >
              dribbble
            </a>
            <a
              href="https://www.instagram.com/alvaaz"
              className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
            >
              instagram
            </a>
            <a
              href="https://www.github.com/alvaaz"
              className="pb-1 mt-4 no-underline border-b-2 border-solid border-transparent hover:border-black mr-4"
            >
              github
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
