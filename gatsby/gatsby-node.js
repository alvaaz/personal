import path from 'path'
import fetch from 'isomorphic-fetch'
import { createRemoteFileNode } from 'gatsby-source-filesystem'

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

async function fetchVideosAndTurnIntoNodes({ actions, createContentDigest }) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUweiC3IeIEoaer4XlQAl8alwcGCqdHce&maxResults=4&key=${process.env.YOUTUBE_KEY}`
  )
  const { items } = await res.json()

  for (const item of items) {
    const nodeMeta = {
      id: item.id,
      parent: null,
      children: [],
      internal: {
        type: 'Video',
        mediaType: 'application/json',
        contentDigest: createContentDigest(item)
      }
    }
    actions.createNode({
      ...item,
      ...nodeMeta
    })
  }
}

export async function onCreateNode({ node, actions: { createNode }, getCache, createNodeId }) {
  if (node.internal.type === 'Video') {
    const fileNode = await createRemoteFileNode({
      url: node.snippet.thumbnails.high.url,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id
    })

    if (fileNode) {
      // link the File node to Image node at field image
      // eslint-disable-next-line
      node.image___NODE = fileNode.id
    }
  }
}

export async function sourceNodes(params) {
  await Promise.all([fetchVideosAndTurnIntoNodes(params)])
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnProjectsIntoPages(params)])
  // 1. Projecs
  // 2. Categories
}
