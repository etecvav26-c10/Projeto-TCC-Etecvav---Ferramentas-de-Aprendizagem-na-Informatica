import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/Projeto-TCC-Etecvav---Ferramentas-de-Aprendizagem-na-Informatica/',
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Guia de introdução à programação',
            items: [
              { text: 'Ferramentas básicas', link: '/Ferramentas_B' },
              { text: 'Intermediárias', link: '/Guia_Intermediario' },
              { text: 'Avançadas', link: '/Guia_Avançado' },
            ],
          },
          {
            text: 'Biblioteca de ensino à programação',
            items: [
              {
                text: 'Ferramentas de Linguagem Própria',
                items: [{ text: 'Scratch', link: '/Scratch_D' }],
              },
              {
                text: 'Linguagem Python',
                items: [{ text: 'The Farmer Was Replaced', link: '/TFWR_D' }],
              },
            ],
          },
        ],
      },
    ],
  },
});
