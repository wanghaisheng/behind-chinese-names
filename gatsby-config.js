/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/e-commerce-template",  
  siteMetadata: {
    title: "behind chinese names: chinese name generator and checker",
    description: "A tool for those who want to learn more chinese",
    author: "Heisenberg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            // Disable the X-Frame-Options by not setting any value
            'X-Frame-Options: ""',
            // Optionally, allow framing from anywhere using Content-Security-Policy
            "Content-Security-Policy: frame-ancestors *",
          ],
        },
      },
    },
  ],
};
