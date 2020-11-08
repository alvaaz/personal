import * as React from 'react'
import SEO from '../components/seo'

const Error404Page: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <h1 className="text-4xl leading-tight sm:text-6xl sm:leading-none px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 mb-32">
      Oh! Creo que buscas algo que no tengo 😔
    </h1>
  </>
)

export default Error404Page
