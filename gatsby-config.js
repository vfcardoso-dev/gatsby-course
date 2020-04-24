module.exports = {
  siteMetadata: {
    title: `Vinícius Cardoso`,
    position: `Software Developer`,
    description: `Sou desenvolvedor de software, músico e nerd. Este é um espaço que mantenho para falar das coisas que gosto.`,
    author: `@vfcardoso_`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oxygen`,
            variants: [`300`, `400`, `700`]
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


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ]
}
