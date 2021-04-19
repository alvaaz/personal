import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { ThemeContext } from '../components/ThemeProvider'
import SEO from '../components/SEO'
import SanityImage from 'gatsby-plugin-sanity-image'
import { ArticlesProps } from '../types'

export default function BlogPage({ data }: { data: ArticlesProps }) {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext)
  if (!darkMode) {
    React.useEffect(() => {
      toggleDarkMode()
    }, [])
  }
  return (
    <>
      <SEO title="Blog" />
      <div className="grid gap-x-8 pb-24 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid-cols-8 sm:grid-cols-12 bg-red-lighter mb-24">
        <p className="text-5xl font-bold col-start-1 col-end-7 mb-8">Blog</p>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-8">
          Algunos artículos que podrían interesarte.
        </p>
      </div>
      <main className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 mx-auto mb-56">
        <div className="col-start-1 col-end-9 sm:col-end-13">
          {data.articles.nodes.map((article, index) => (
            <Link
              className="flex mb-8 items-center"
              key={index}
              to={`/blog/${article.slug.current}`}
            >
              {article.categories.map((category) => (
                <SanityImage
                  {...category.image}
                  alt={category.title}
                  width={30}
                  height={30}
                  style={{ height: '30px', width: '30px' }}
                />
              ))}

              <p className="text-2xl ml-2">{article.title}</p>
              <p>{article.publishedAt}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query ArticlesQuery {
    articles: allSanityPost {
      nodes {
        publishedAt(fromNow: true)
        title
        slug {
          current
        }
        categories {
          title
          image {
            ...ImageWithPreview
          }
        }
      }
    }
  }
`
