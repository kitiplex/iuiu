import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';

const config: Config = {
  title: 'IUIU',
  tagline: 'Knowledge Base for awesome people by awesome people.',
  favicon: 'icons/favicon.ico',
  url: 'https://kitiplex.github.io',
  baseUrl: '/iuiu/',
  titleDelimiter: '·',
  organizationName: 'kitiplex', // Usually your GitHub org/user name.
  projectName: 'iuiu', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarPath: 'sidebars.ts',
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          remarkPlugins: [[npm2yarn, {sync: true}],remarkMath],
          rehypePlugins: [rehypeKatex,],
        },
        
        blog: {
          path: "blog",
          blogTitle: 'Updates',
          showReadingTime: true,
          blogSidebarTitle: 'Updates',
          blogDescription: 'Updates',
          remarkPlugins: [[npm2yarn, {sync: true}], remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} IUIU`,
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
      "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",crossorigin: "anonymous"
    },
  ],

  themeConfig: {
    
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/iuiu-social.png',
    navbar: {
      title: 'IUIU',
      hideOnScroll: true,
      logo: {
        alt: '',
        src: 'img/logo.png',
        target: '_self',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'right',
          label: 'Docs'
        },
        {
          type: 'docSidebar',
          sidebarId: 'partnerSidebar',
          position: 'right',
          label: 'Partners'
        },
        {
          type: 'docSidebar',
          sidebarId: 'kbaseSidebar',
          position: 'right',
          label: 'KB'
        },

        {to: '/blog', label: 'News', position: 'right'},
        {
          href: 'https://github.com/kitiplex/iuiu',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kitiplex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kitiplex',
            },
          ],
        },
      ],
      logo: {
        alt: 'Kitiplex Logo',
        src: 'img/kitimi-svg-banner-2.svg',
        href: '/',
        width: 200,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Kitimi Platforms.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages:["java","powershell","bash","python","json"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
