import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: `Álvaro Goede's Portfolio`,
    siteUrl: 'https://goede.cl',
    description: 'My portfolio',
    author: '@alvaaz',
    twitter: '@alvaaz'
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Darker Grotesque',
            variants: ['400', '500', '600', '700']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9rsnrqrb',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ]
}
