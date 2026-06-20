import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: 'docs',
  base: '/Projeto-TCC-Etecvav---Ferramentas-de-Aprendizagem-na-Informatica/',
  lang: 'pt-BR',
  title: 'Infohub',
  description: 'Portal de ferramentas de aprendizagem em programação.',

  themeConfig: {
    nav: [
      { text: 'Ferramentas Básicas', link: '/Ferramentas_B' },
      { text: 'Scratch', link: '/Scratch_D' },
      { text: 'TFWR', link: '/TFWR_D' },
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