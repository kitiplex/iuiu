"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8103],{9297:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/03/10/components","metadata":{"permalink":"/iuiu/blog/2024/03/10/components","source":"@site/blog/2024-03-10-components/index.mdx","title":"Components","description":"Hello, world!","date":"2024-03-10T00:00:00.000Z","formattedDate":"March 10, 2024","tags":[{"label":"updates","permalink":"/iuiu/blog/tags/updates"}],"readingTime":2.315,"hasTruncateMarker":true,"authors":[{"name":"Keith","title":"Maintainer @ Kitiplex","url":"https://github.com/mkeithX","imageURL":"https://github.com/mkeithX.png","key":"mkeithX"}],"frontMatter":{"title":"Components","authors":["mkeithX"],"tags":["updates"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/iuiu/blog/welcome"}},"content":"import CodeBlock from \'@theme/CodeBlock\';\\nimport Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n## Hello, world!\\n\\nPosting this update for testing purposes to ensure all plugins are properly configured. As a start, this article is trucated.\\n\\n{/*truncate*/}\\n\\n### Code higlight\\n\\n```js\\nfunction HighlightSomeText(highlight) {\\n  if (highlight) {\\n    // highlight-next-line\\n    return \'This text is highlighted!\';\\n  }\\n\\n  return \'Nothing highlighted\';\\n}\\n\\nfunction HighlightMoreText(highlight) {\\n  // highlight-start\\n  if (highlight) {\\n    return \'This range is highlighted!\';\\n  }\\n  // highlight-end\\n\\n  return \'Nothing highlighted\';\\n}\\n```\\n\\n### Tabs\\n\\n\\n<Tabs>\\n<TabItem value=\\"js\\" label=\\"JavaScript\\">\\n\\n```js\\nfunction helloWorld() {\\n  console.log(\'Hello, world!\');\\n}\\n```\\n\\n</TabItem>\\n<TabItem value=\\"py\\" label=\\"Python\\">\\n\\n```py\\ndef hello_world():\\n  print(\\"Hello, world!\\")\\n```\\n\\n</TabItem>\\n\\n</Tabs>\\n\\n### npm2yarn remark plugin\\n\\n```bash npm2yarn\\nnpm install @docusaurus/remark-plugin-npm2yarn\\n```\\n\\n\\n## Equation\\n\\n\\n__$ Philosophiae Naturalis Principia Mathematica $__, better known as Principia is a monumental work that revolutionized our understanding the motion of objects and the force of gravity in the physical world.It introduced three fundamental laws of motion:\\n\\n### First Law (Inertia)\\n**Statement**: An object at rest will remain at rest, and an object in motion will remain in motion with a constant velocity unless acted upon by a net external force.\\n\\n**In simpler terms**: Objects tend to stay as they are (either at rest or moving at a constant speed) unless something makes them change.\\n\\nThe first law is expressed by the equation:\\n\\n$$\\nF = ma\\n$$\\n\\nwhere:\\n- $ F = $ is the force applied to an object,\\n- $ m = $ is the mass of the object, and\\n- $ a = $ is the acceleration produced by the applied force.\\n\\n### Second Law\\n\\n**Statement:** The acceleration of an object is directly proportional to the net force applied to it and inversely proportional to its mass. The direction of the acceleration is in the direction of the net force.\\n\\nEquation: $ F = ma $\\n\\n$ F=ma $ (Force equals mass times acceleration)\\nIn simpler terms: The force acting on an object is equal to the mass of that object multiplied by its acceleration.\\n\\nThe second law, describing gravitational force, is given by:\\n\\n$$\\n F = G \\\\cdot \\\\frac{m_1 \\\\cdot m_2}{r^2}\\n$$\\n\\nwhere:\\n- $ F = $ is the gravitational force between two masses,\\n- $ G = $ is the gravitational constant,\\n- $ ( m_1 ) $ and $ ( m_2 ) $ are the masses of the two objects, and\\n- $ r $ is the separation between the centers of the masses.\\n\\n### Third Law\\n\\n**Statement:** For every action, there is an equal and opposite reaction. In other words, if object A exerts a force on object B, then object B simultaneously exerts a force of equal magnitude in the opposite direction on object A.\\n\\n**In simpler terms:** Every action has an equal and opposite reaction."},{"id":"welcome","metadata":{"permalink":"/iuiu/blog/welcome","source":"@site/blog/2024-03-10-iuiu/index.mdx","title":"Welcome","description":"","date":"2024-03-10T00:00:00.000Z","formattedDate":"March 10, 2024","tags":[{"label":"hello","permalink":"/iuiu/blog/tags/hello"},{"label":"welcome","permalink":"/iuiu/blog/tags/welcome"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Keith","title":"Maintainer @ Kitiplex","url":"https://github.com/mkeithX","imageURL":"https://github.com/mkeithX.png","key":"mkeithX"},{"name":"JoeiX","title":"Contributor @ Kitiplex","url":"https://github.com/JoeiX","imageURL":"https://github.com/JoeiX.png","key":"JoeiX"},{"name":"Venice","title":"Contributor @ Kitiplex","url":"https://github.com/Portiaporkshap","imageURL":"https://github.com/Portiaporkshap.png","key":"Venice"},{"name":"PriMx","title":"Contributor @ Kitiplex","url":"https://github.com/PriMaxima","imageURL":"https://github.com/PriMaxima.png","key":"Prim"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["mkeithX","JoeiX","Venice","Prim"],"tags":["hello","welcome"]},"unlisted":false,"prevItem":{"title":"Components","permalink":"/iuiu/blog/2024/03/10/components"}},"content":""}]}')}}]);