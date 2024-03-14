import Link from "@docusaurus/Link";
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  guideSidebar: [
    
    "introduction",

    {
      type: "category",
      label: "Getting started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["configuration"],
    },
  ],


  kbaseSidebar: [


    {
      type: "category",
      label: "KB",
      link: {
        type: "generated-index",
        description: "Curated references and good stuff.",
      },
      collapsed: true,

      items: [

        "kbase/kangaroo/joey",
        "kbase/kangaroo/buganizer"
  
      ],

    },
    {
      type: 'category',
      label: 'Troublshoot',
      link: {
        type: 'generated-index',
      },
      items: [
     
      ]

    },
  ],

  communitySidebar: [
    {
      type: "autogenerated",
      dirName: "community",
    },
  ],
  
  partnerSidebar: [


    {

      type: "autogenerated",
      dirName: "partners",
    },

  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
