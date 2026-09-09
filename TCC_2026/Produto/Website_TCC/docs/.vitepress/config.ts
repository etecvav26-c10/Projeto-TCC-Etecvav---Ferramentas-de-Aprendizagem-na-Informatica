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
            target: '_self',
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
            text: 'Ferramentas de Linguagens Específica',

            items: [
              {
                items: [
                  {
                  text: 'Linguagem Python',

                  items: [
                    {
                      text: 'The Farmer Was Replaced',
                      link: `/Page_A_TFWR.html`,
                      target: '_self',
                    },
                    {
                      text: 'Learn Python',
                      link: `https://www.learnpython.org/`,
                      target: '_self',
                    },
                    {
                      text: 'Python Institute',
                      link: `https://pythoninstitute.org/`,
                      target: '_self',
                    },
                    
                    ],
                  },  
                  {
                  text: 'Linguagem C#',

                  items: [
                    {
                      text: 'Unity Learn',
                      link: `https://learn.unity.com/`,
                      target: '_self',
                    },
                    
                    ],
                  },
                  {
                  text: 'Linguagem java',

                  items: [
                    {
                      text: 'MOOC.fi',
                      link: `https://www.mooc.fi/en/`,
                      target: '_self',
                    },
                    
                    ],
                  },  
                  {
                  text: 'Linguagem javascript',

                  items: [
                    {
                      text: 'MDN Web Docs',
                      link: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
                      target: '_self',
                    },
                    {
                      text: 'Javascript Info',
                      link: 'https://javascript.info/',
                      target: '_self',
                    },
                    {
                      text: 'The Elevator Saga',
                      link: 'https://play.elevatorsaga.com/',
                      target: '_self',
                    },
                    {
                      text: 'Screeps',
                      link: 'https://store.screeps.com/pt-BR',
                      target: '_self',
                    },
                    {
                      text: 'Untrusted',
                      link: 'https://untrustedgame.com/',
                      target: '_self',
                    },
                    
                    ],
                  },
                  {
                  text: 'Linguagem PHP',

                  items: [
                    {
                      text: 'PHP Plataforma Laracasts',
                      link: `https://laracasts.com/series/php-for-beginners-2023-edition`,
                      target: '_self',
                    },
                    
                    ],
                  },
                  {
                  text: 'Linguagem SQL',

                  items: [
                    {
                      text: 'Sql Bolt',
                      link: `https://sqlbolt.com/`,
                      target: '_self',
                    },
                    {
                      text: 'Sql Zoo',
                      link: `https://sqlzoo.net/wiki/SQL_Tutorial`,
                      target: '_self',
                    },
                    {
                      text: 'Sql Murder Mystery',
                      link: `https://mystery.knightlab.com/`,
                      target: '_self',
                    },
                    {
                      text: 'Sql Poliece Departament',
                      link: `https://sqlpd.com/`,
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
                    text: 'Coddy Tech',
                    link: 'https://coddy.tech/',
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
                  {
                    text: 'Turtle Academy',
                    link: `/Page_A_Turtleacademy.html`,
                    target: '_self',
                  },
                  {
                    text: 'Tynker',
                    link: `/Page_A_Tynker.html`,
                    target: '_self',
                  },
                ],
              },
              

              {
                text: 'Plataformas de Treino',

                items: [
                  {
                    text: 'CodeWars',
                    link: `/Page_A_Codewars.html`,
                    target: '_self',
                  },
                  {
                    text: 'Codingame',
                    link: `/Page_A_Codingame.html`,
                    target: '_self',
                  },
                  {
                    text: 'Hacker Rank',
                    link: `/Page_A_Hackerank.html`,
                    target: '_self',
                  },
                  {
                    text: 'LeetCode',
                    link: `/Page_A_Leetcode.html`,
                    target: '_self',
                  },
                  {
                    text: 'CodeGym',
                    link: `https://codegym.cc/`,
                    target: '_self',
                  },
                  
                  
                  
                ],
              },

              {
                text: 'Plataformas de Revisão',

                items: [
                  {
                    text: 'W3Schools',
                    link: `/Page_A_W3Schools.html`,
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