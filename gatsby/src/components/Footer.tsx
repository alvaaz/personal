import * as React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="px-12 sm:px-16 md:px-24 lg:px-32 xl:px-64">
        <h1 className="text-4xl sm:text-6xl font-bold leading-none mb-32 w-9/12 sm:w-6/12">
          Let’s work together on your next project.
        </h1>
        <div className="text-3xl leading-none mb-64">
          <p className="font-bold">Email address</p>
          <a
            href="mailto:alvaro@goede.cl"
            className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 hover:border-transparent"
          >
            alvaro@goede.cl
          </a>
        </div>
        <div className="pb-8 text-xl font-semibold">
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
