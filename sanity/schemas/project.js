export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Title of the project'
    },
    {
      name: 'excerpt',
      title: 'Project Excerpt',
      type: 'string',
      description: 'Excerpt of the project'
    },
    {
      name: 'categories',
      title: 'Project Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
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
    },
     {
      name: 'image',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    },
  ]
}
