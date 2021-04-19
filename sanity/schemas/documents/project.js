export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'categories',
      title: 'Project Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'portfolioCategory' }] }]
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Title of the project'
    },
    {
      name: 'excerpt',
      title: 'Project Excerpt',
      type: 'text',
      description: 'Excerpt of the project'
    },
    {
      name: 'table',
      title: 'Table',
      type: 'table',
    },
    {
      name: 'section1',
      title: 'Section 1',
      type: 'section1'
    },
    {
      name: 'section2',
      title: 'Section 2',
      type: 'section2'
    },
    {
      name: 'section3',
      title: 'Section 3',
      type: 'section3'
    },
    {
      title: 'Featured project',
      name: 'featured',
      type: 'boolean'
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    }
  ]
}
