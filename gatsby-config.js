module.exports = {
  siteMetadata: {
    title: `Liz Barraza`,
    description: `UX design portfolio for Liz Barraza`,
    author: `Liz Barraza`,
    footerText: `2019 Design by Liz Barraza`,
    lastUpdate: `Last update November 2019`,
  },
  plugins: [
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
        name: `case-studies`,
        path: `${__dirname}/src/case-studies`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    "gatsby-remark-custom-image-component",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require("remark-unwrap-images")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 80,
            },
          },
          {
            resolve: "gatsby-remark-custom-image-component",
            options: {
              // plugin options
              componentName: "ScrollableImage",
              imagePropName: "src",
              sharpMethod: "fluid",
              // fluid's arguments
              quality: 80,
              maxWidth: 500,
            },
          },
          {
            resolve: "gatsby-remark-custom-image-component",
            options: {
              // plugin options
              componentName: "TwoColumnsImage",
              imagePropName: "src",
              sharpMethod: "fluid",
              // fluid's arguments
              quality: 80,
              maxWidth: 800,
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`700`],
          },
          {
            family: `Noto Serif`,
            variants: [`400`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
