import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/Projeto-TCC-Etecvav---Ferramentas-de-Aprendizagem-na-Informatica/',
  lang: 'pt-BR',
  title: 'Infohub',
  description: 'Portal de ferramentas de aprendizagem em programação.',

  themeConfig: {
    nav: [
      { text: 'Introducao', link: '/Introducao' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Guia de introdução à programação',
            link: '/Guias.html',
          },
          {
            text: 'Ferramentas de aprendizagem',
            items: [
              {
                text: 'Ferramentas de Linguagem Própria',
                items: [{ text: 'Scratch', link: '/public/Page_A_scratch.html' }],
              },
              {
                text: 'Ferramentas de Multiplas Linguagens',
                items: [{ text: 'Code Combat', link: '/public/Page_A_CodeCombat.html' }],
              },
              {
                text: 'Linguagem Python',
                items: [{ text: 'The Farmer Was Replaced', link: '/Page_A_' }],
              },
            ],
          },
        ],
      },
    ],
  },
});