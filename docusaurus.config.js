// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Clickonrefreshusaurus",
  tagline: "Dinosaurs are cool, especially for documentation",
  url: "https://web-dev-course-docusaurus.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "clickonrefresh", // Usually your GitHub org/user name.
  projectName: "clickonrefreshusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/clickonrefresh/clickonrefreshusaurus"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/clickonrefresh/clickonrefreshusaurus"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Clickonrefreshusaurus",
        logo: {
          alt: "clickonrefresh",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          { to: "/blog", label: "Vlob", position: "left" },
          {
            to: "/webdev/webdev-course",
            label: "Web Course",
            position: "left"
          },
          {
            href: "https://github.com/clickonrefresh/clickonrefreshusaurus",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/clickonrefresh"
              },
              {
                label: "Visit Me",
                href: "https://cliqonrefraich.clickonrefresh.xyz"
              },
              {
                label: "Portfolio",
                href: "https://clickonrefresh-dashboard.netlify.app"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/clickonrefresh"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} clickonrefresh & cliqonrefraich, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
