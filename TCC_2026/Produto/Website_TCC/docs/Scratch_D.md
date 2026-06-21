# 🐱 Scratch

## O que é?

**Scratch** é uma linguagem de programação visual e uma plataforma online de criação desenvolvida pelo **MIT Media Lab**, lançada em 2007 e atualmente na versão **3.0** (desde 2019). É a maior plataforma de programação criativa do mundo, com mais de **100 milhões de usuários registrados** em mais de 200 países.

Em vez de escrever código com texto, o Scratch usa **blocos coloridos que se encaixam como peças de LEGO**. O usuário arrasta, combina e executa esses blocos para criar jogos, animações, histórias interativas e muito mais — tudo diretamente no navegador, sem instalar nada.

O objetivo do Scratch não é apenas ensinar sintaxe de programação. É ensinar a **pensar computacionalmente** através da criação de projetos que o próprio usuário escolhe e imagina.


## O que o Scratch ensina?

Os conceitos são introduzidos naturalmente conforme o usuário quer fazer coisas mais complexas. Ninguém precisa estudar uma lista de tópicos — a criatividade guia o aprendizado.

| Conceito | Como aparece no Scratch |
|----------|------------------------|
| **Sequência** | Blocos executados de cima para baixo |
| **Eventos** | "Quando a bandeira for clicada", "quando tecla for pressionada" |
| **Loops** | Blocos `repita`, `sempre`, `repita até que` |
| **Condicionais** | Blocos `se / então / senão` |
| **Variáveis** | Armazenar pontuação, vidas, nome do jogador |
| **Listas** | Sequências de perguntas, itens de inventário |
| **Funções** | "Meus Blocos" — criar blocos personalizados reutilizáveis |
| **Paralelismo** | Múltiplos scripts rodando ao mesmo tempo |
| **Eventos customizados** | Sistema de mensagens entre sprites |
| **Clonagem** | Criar cópias independentes de um objeto em tempo real |
| **Coordenadas** | Posicionar sprites no palco com eixos X e Y |
| **Lógica booleana** | Operadores `e`, `ou`, `não` |

---

## Funcionalidades

### Sprites e o Palco

O **Palco** é a tela do projeto — onde tudo acontece, com dimensões fixas de 480×360 pixels e um sistema de coordenadas com centro em (0, 0).

**Sprites** são os personagens e objetos do projeto. Cada sprite tem:
- **Fantasias** — suas aparências visuais (podendo ter várias para animação)
- **Scripts** — os programas que controlam seu comportamento
- **Sons** — áudios associados a ele

### Categorias de Blocos

Cada categoria tem uma cor própria para identificação rápida:

| Categoria | Cor | O que faz |
|-----------|-----|-----------|
| **Movimento** | 🔵 Azul | Mover, girar, posicionar o sprite no palco |
| **Aparência** | 🟣 Roxo | Trocar fantasia, mostrar balões de fala, aplicar efeitos visuais |
| **Som** | 🩷 Rosa | Tocar sons, controlar volume e efeitos de áudio |
| **Eventos** | 🟡 Amarelo | Gatilhos que iniciam scripts (clique, tecla, mensagem) |
| **Controle** | 🟠 Laranja | Loops, condicionais, clones, pausas |
| **Sensores** | 🔵 Azul claro | Detectar colisão, posição do mouse, teclado, webcam |
| **Operadores** | 🟢 Verde | Matemática, comparações, lógica, texto |
| **Variáveis** | 🟠 Laranja escuro | Criar e manipular variáveis e listas |
| **Meus Blocos** | 🔴 Vermelho | Criar blocos personalizados (funções) |

### Exemplo de código — movimento com teclado

```
quando 🏴 for clicado
sempre
    se <tecla [seta direita] pressionada?> então
        adicione (5) a x
    se <tecla [seta esquerda] pressionada?> então
        adicione (-5) a x
    se <tecla [seta cima] pressionada?> então
        adicione (5) a y
```

### Exemplo de código — coleta de pontos com variável

```
quando eu começar como clone
sempre
    se <tocando em [jogador]?> então
        adicione (10) a [pontos]
        apague este clone
```

### Sistema de Mensagens

Sprites se comunicam por mensagens — um envia, qualquer outro pode receber e reagir:

```
Sprite A:                        Sprite B:
quando clicado                   quando eu receber [explosão]
    envie [explosão]                 toque o som [Boom]
                                     esconda
```

### Clones

Clones são cópias independentes de um sprite criadas durante a execução. Cada clone roda seu próprio script, mas herda o comportamento original. Fundamentais para jogos com múltiplos inimigos, projéteis ou partículas:

```
quando 🏴 for clicado
repita (20)
    crie um clone de [eu mesmo]

quando eu começar como clone
    vá para x: (aleatório entre -240 e 240) y: (aleatório entre -180 e 180)
    sempre
        mova (3) passos
        se tocar na borda, volte
```

### Meus Blocos (Funções)

É possível criar blocos personalizados com parâmetros — o equivalente a funções em linguagens tradicionais:

```
defina [teleportar para x: (px) y: (py)]
    vá para x: (px) y: (py)
    toque o som [Pop]
    diga [Cheguei!] por (1) segundos

teleportar para x: (100) y: (50)   ← chamada do bloco
```

### Editor de Sprites e Fantasias

O Scratch inclui um editor gráfico completo com dois modos:
- **Bitmap** — para pintura pixel a pixel
- **Vetorial** — para formas geométricas escaláveis sem perda de qualidade

Também é possível importar imagens, usar a câmera do computador ou escolher da biblioteca de sprites do próprio Scratch.

### Sons e Música

Além de uma biblioteca de sons prontos, o Scratch tem um editor de áudio básico para gravar, cortar e aplicar efeitos (eco, reverso, robot). Com a extensão de **Música**, é possível tocar notas e instrumentos por código:

```
toque a nota (60 Dó) por (0.5) batidas
toque o tambor (1 Bumbo) por (0.25) batidas
defina o instrumento como (1 Piano)
```

### Extensões

O Scratch suporta extensões que ampliam suas capacidades:

| Extensão | O que permite |
|----------|--------------|
| **Música** | Tocar instrumentos e notas musicais |
| **Caneta** | Desenhar no palco enquanto o sprite se move |
| **Sintetizador de Texto** | Converter texto em fala (TTS) |
| **Tradução** | Traduzir textos entre idiomas |
| **Vídeo** | Detectar movimento pela webcam |
| **micro:bit** | Programar o microcontrolador BBC micro:bit |
| **LEGO MINDSTORMS** | Controlar robôs LEGO por código |
| **Makey Makey** | Conectar objetos físicos ao teclado |

---

## A Comunidade

Projetos publicados podem ser **curtidos, comentados e remixados** por qualquer usuário. Remixar significa copiar um projeto e modificá-lo livremente — o Scratch mantém automaticamente o histórico de quem remixou o quê.

Isso transforma o aprendizado em algo social: o usuário não cria apenas para si, mas para uma audiência real.

---

## Para quem é?

- **Crianças e jovens** de 8 a 16 anos que estão tendo o primeiro contato com programação
- **Educadores** que querem ensinar lógica computacional de forma visual e criativa
- **Iniciantes de qualquer idade** que querem criar jogos ou animações sem barreiras técnicas
- **Quem quer aprender os fundamentos** antes de migrar para Python, JavaScript ou outra linguagem textual

---

## Informações gerais

| | |
|--|--|
| **Desenvolvedor** | MIT Media Lab (Grupo Lifelong Kindergarten) |
| **Lançamento** | 2007 (v3.0 em janeiro de 2019) |
| **Plataforma** | Navegador web, aplicativo desktop, tablet |
| **Linguagem** | Visual (blocos), exportável para HTML5 |
| **Idiomas** | 70+ |
| **Usuários registrados** | 100 milhões+ |
| **Custo** | Gratuito |
**
