module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "doggy-project",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvmyn62y1nnx01xnhvub13s2/master",
      },
    },
  ],
};
