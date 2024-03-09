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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          breadcrumbs: true,
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          remarkPlugins: [[npm2yarn, {sync: true}],remarkMath],
          rehypePlugins: [rehypeKatex,],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Updates',
          remarkPlugins: [[npm2yarn, {sync: true}], remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/iuiu-social.png',
    navbar: {
      title: 'IUIU',
      logo: {
        alt: 'My Site Logo',
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
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
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
              label: 'Tutorial',
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
