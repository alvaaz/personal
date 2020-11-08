 export default {
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Role in the project'
    },
    {
      name: 'contributors',
      title: 'Contributors',
      type: 'string',
      description: 'Contributors in the project'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the project'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year'
    }
  ]
}
