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

export type ProjectsProps = {
  projects: {
    nodes: ProjectProps
  }
}
