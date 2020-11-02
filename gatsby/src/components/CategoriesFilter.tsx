import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

type Acumulator = {
  id: string
  name: string
  count: number
}

type Category = {
  id: string
  name: string
}

type Projects = {
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
}[]

function countProjectsInCategories(projects: Projects) {
  // Return the projects with counts
  const counts = projects
    .map((project) => project.categories)
    // @ts-ignore
    .flat()
    .reduce((acc: Acumulator, category: Category) => {
      // check if this is an existing topping
      // @ts-ignore
      const existingCategory = acc[category.id]
      if (existingCategory) {
        //  if it is, increment by 1
        existingCategory.count += 1
      } else {
        // otherwise create a new entry in our acc and set it to one
        // @ts-ignore
        acc[category.id] = {
          id: category.id,
          name: category.name,
          count: 1
        }
      }

      return acc
    }, {})
  // Sort them based on their count
  // @ts-ignore
  const sortedCategories = Object.values(counts).sort((a, b) => b.count - a.count)
  return sortedCategories
}

export default function CategoriesFilter() {
  const { categories, projects } = useStaticQuery(graphql`
    query {
      categories: allSanityCategory {
        nodes {
          name
          id
        }
      }
      projects: allSanityProject {
        nodes {
          categories {
            name
            id
          }
        }
      }
    }
  `)
  const categoriesWithCounts = countProjectsInCategories(projects.nodes)
  return (
    <div>
      {categoriesWithCounts.map((category) =>
        // @ts-ignore
        // prettier-ignore
        <>
          <Link key={category.id} to={`/category/${category.name}`}>{category.name}</Link>
          <span>{category.count}</span>
        </>
      )}
    </div>
  )
}
