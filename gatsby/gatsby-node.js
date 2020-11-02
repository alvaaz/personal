import path from 'path'

async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve('./src/templates/project.tsx')
  // 2. Query all projects
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)
  // 3. Loop over each project and create a page for that project
  console.log(data)
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current
      }
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnProjectsIntoPages(params)])
  // 1. Projecs
  // 2. Categories
}
