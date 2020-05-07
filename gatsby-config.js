require("dotenv").config()

const queries = require('./src/utils/algolia-queries')

module.exports = {
  siteMetadata: {
    title: `Vinícius Cardoso`,
    position: `Fullstack Web Developer`,
    description: `Sou desenvolvedor de software, músico e nerd. Este é um espaço que mantenho para falar das coisas que gosto.`,
    author: `@vfcardoso_`,
    siteUrl: `https://vfcardoso-gatsby-blog.netlify.app`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    //uploads needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vfcardoso-blog`,
        short_name: `vfcardoso-blog`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/avatar-masked.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
          }
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            }
          },
          `gatsby-remark-lazy-load`,

          //prismjs needs to be the last plugin
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
}
