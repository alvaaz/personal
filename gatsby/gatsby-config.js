import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: `Álvaro — Digital Product Designer based in Viña del Mar.`,
    description: `Hi! I am Álvaro Goede. I am a remote designer with a can-do attitude.`,
    twitter: `@alvaaz`,
    email: `alvaro@goede.cl`,
    social: {
      dribbble: `alvaaz`,
      behance: `alvaaz`,
      instagram: `alvaaz`,
      github: `alvaaz`
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Darker Grotesque:400,500,600,700']
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
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
