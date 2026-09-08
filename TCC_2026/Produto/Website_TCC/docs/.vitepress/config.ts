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

                items: [
                  {
                    text: 'Scratch',
                    link: '/Page_A_scratch.html',
                    target: '_self',
                  },
                  
                ],
              },

              {
                text: 'Ferramentas de Multiplas Linguagens',

                items: [
                  {
                    text: 'Code Combat',
                    link: `/Page_A_CodeCombat.html`,
                    target: '_self',
                  },
                  {
                    text: 'Check.io',
                    link: `/Page_A_Checkio.html`,
                    target: '_self',
                  },
                  
                  
                ],
              },

              {
                text: 'Linguagem Python',

                items: [
                  {
                    text: 'The Farmer Was Replaced',
                    link: `/Page_A_TFWR.html`,
                    target: '_self',
                  },
                  
                ],
              },
              {
                text: 'Linguagem CSS',

                items: [
                  {
                    text: 'Minigames de CSS',
                    link: `/Page_MinigamesCss.html`,
                    target: '_self',
                  },
                  
                ],
              },
              

            ],
          },

          {
            text: 'Plataformas de aprendizagem',

            items: [
              {
                text: 'Plataformas de Cursos',

                items: [
                  {
                    text: 'Curso em Vídeo',
                    link: 'https://www.cursoemvideo.com/',
                    target: '_self',
                  },
                  {
                    text: 'Codeacademy',
                    link: '/Page_A_Codeacademy.html',
                    target: '_self',
                  },
                  {
                    text: 'CodeAi',
                    link: '/Page_A_CodeAi.html',
                    target: '_self',
                  },
                  {
                    text: 'Codechef',
                    link: '/Page_A_Codechef.html',
                    target: '_self',
                  },
                  {
                    text: 'Exercism',
                    link: '/Page_A_Exercism.html',
                    target: '_self',
                  },
                  {
                    text: 'Khan Academy',
                    link: '/Page_A_KhanAcademy.html',
                    target: '_self',
                  },
                ],
              },
              

              {
                text: 'Plataformas de Treino',

                items: [
                  {
                    text: 'Code Combat',
                    link: `/Page_A_CodeCombat.html`,
                    target: '_self',
                  },
                  
                ],
              },

              {
                text: 'Plataformas de Revisão',

                items: [
                  {
                    text: 'The Farmer Was Replaced',
                    link: `/Page_A_TFWR.html`,
                    target: '_self',
                  },
                ],
              },
              

            ],
          },
        ],
      },
    ],
  },
});