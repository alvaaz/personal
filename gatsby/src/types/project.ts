export type ProjectProps = {
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

export type VideoProps = {
  snippet: {
    title: string
    resourceId: {
      videoId: string
    }
    thumbnails: {
      high: {
        url: string
      }
    }
  }
  image: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}[]

export type ProjectsProps = {
  projects: {
    nodes: ProjectProps
  }
  videos: {
    nodes: VideoProps
  }
}
