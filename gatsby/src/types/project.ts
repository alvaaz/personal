import {IGatsbyImageData} from 'gatsby-plugin-image'

export type ProjectProps = {
  title: string
  categories: {
    name: string
  }[]
  slug: {
    current: string
  }
  poster: {
    asset: any;
    hotspot: any;
    crop: any;
    width: any;
    height: any;
    options?: {};
    config?: {};
    __typename: any;
    _type: any;
    _key: any;
    sources: any;
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
  image: IGatsbyImageData
}[]

export type ProjectsProps = {
  projects: {
    nodes: ProjectProps
  }
  videos: {
    nodes: VideoProps
  }
}

export type ProjectProps2 = {
  project: {
    title: string
    excerpt: string
    categories: {
      name: string
    }[]
    table: {
      contributors: string
      duration: string
      role: string
      year: number
    }
    section1: {
      content: string
      title: string
      image1: {
        asset: any
        hotspot: any
        crop: any
        width: any
        height: any
        options?: {}
        config?: {}
        __typename: any
        _type: any
        _key: any
        sources: any
      }
      image2: {
        asset: any
        hotspot: any
        crop: any
        width: any
        height: any
        options?: {}
        config?: {}
        __typename: any
        _type: any
        _key: any
        sources: any
      }
    }
    section2: {
      content: string
      title: string
      quote: string
    }
    section3: {
      content: string
      title: string
      image1: {
        asset: {
          fluid: {
            src: string
          }
        }
      }
    }
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
  }
}

export type ArticlesProps = {
  articles: {
    nodes: {
      publishedAt: string
      title: string
      slug: {
        current: string
      }
      categories: {
        title: string
        image: any
      }[]
    }[]
  }
}
