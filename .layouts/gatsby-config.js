const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "海印舍 藏經板殿",
  shortName: "장경판전",
  description:
    "海印舍 藏經板殿(Haeinsa Janggyeong Panjeon)",
  twitterName: "DH_haein",
  imageUrl: "/tablet.jpg",
  siteUrl: "https://wiki.haein.info",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["latest", "tag"],
        defaultIndexLatestPostCount: 15,
        searchBody: true,
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Home",
            url: "https://haein.info/",
          },
          {
            title: "Links",
            items: [
              {
                title: "Twitter",
                url: "https://twitter.com/DH_haein",
              },
              {
                title: "Github",
                url: "https://github.com/Esantomi",
              },
              {
                title: "Source Code",
                url: "https://github.com/Esantomi/wiki",
              },
            ],
          },
        ],
        editUrl: "https://github.com/Esantomi/wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: ["G-76F1LR70FY"],
    //   },
    // },
  ],
};
