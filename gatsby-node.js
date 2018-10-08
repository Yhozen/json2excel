/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        node: {
            fs: 'empty',
            dns: 'mock',
            path: true,
            url: false
          },
    })
  }