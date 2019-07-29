module.exports = {
  siteMetadata: {
    title: `Álvaro — Designer and lifelong student.`,
    titleAlt: `Álvaro.`,
    description: `Welcome! Thanks for your interest in my work. I am Álvaro Göede Rivera, a DUOC UC graphic designer, amateur computer programmer and musician`,
    author: `@alvaaz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
        options: {
            // The top level query type, can be anything you want!
            typeName: "GCMS",
            // The field you'll query against, can also be anything you want.
            fieldName: "gcms",
            // Your API endpoint, available from the dashboard and settings window.
            url: "https://api-euwest.graphcms.com/v1/cjykctmum0y4d01e3fmnv7c1h/master",
        },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
