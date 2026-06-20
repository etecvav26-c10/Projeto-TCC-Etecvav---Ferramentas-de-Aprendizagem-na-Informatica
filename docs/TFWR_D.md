# 🚜 The Farmer Was Replaced

## O que é?

**The Farmer Was Replaced** é um jogo indie de simulação e automação desenvolvido por **Timon Herzog** (RainbowDoggieUnicorn) e publicado pela **Metaroot**, lançado em acesso antecipado em 2023 e com versão 1.0 em outubro de 2025.

A premissa é simples: o fazendeiro foi substituído. No lugar dele, você programa um **drone** para realizar todas as tarefas agrícolas — plantar, colher, regar, navegar pelo terreno e muito mais. Tudo isso é feito escrevendo código real em uma **linguagem própria do jogo com sintaxe praticamente idêntica ao Python**.

O diferencial do jogo é que ele não é um curso disfarçado de jogo — é genuinamente um jogo de automação, no estilo de títulos como Factorio, onde a ferramenta de automação é o seu próprio código.

\---

## Por que ele se destaca?

A maioria dos jogos educacionais de programação divide o conteúdo em fases isoladas, com objetivos fixos e pouca liberdade criativa. The Farmer Was Replaced faz diferente:

- **Progressão contínua**: não há níveis separados. Você colhe recursos, gasta em uma árvore de tecnologia e expande sua fazenda organicamente.
- **Sem resposta certa única**: cada desafio pode ser resolvido de múltiplas formas. O jogador é encorajado a experimentar e otimizar.
- **Código real**: os scripts são salvos em arquivos `.py` e podem ser editados em editores externos como o VS Code — com suporte a IntelliSense do Python.
- **Feedback imediato e visual**: você escreve o código, pressiona "executar" e assiste o drone em ação. Se algo está errado, você vê imediatamente.

\---

## O que o jogo ensina?

O jogo introduz os conceitos de programação **um por vez**, na ordem em que eles se tornam necessários para progredir. O jogador não estuda teoria — ele aprende porque precisa resolver um problema concreto.

### Conceitos ensinados (em ordem de progressão):

| Conceito                          | Como aparece no jogo                                               |
| --------------------------------- | ------------------------------------------------------------------ |
| **Sequência**                     | Comandos básicos: mover, plantar, colher                           |
| **Loop `while`**                  | Repetir a colheita indefinidamente                                 |
| **Condicionais `if/else`**        | Verificar se uma planta está pronta para colher                    |
| **Loop `for`**                    | Percorrer linhas e colunas da fazenda                              |
| **Sensores / funções de leitura** | `can\\\_harvest()`, `get\\\_ground\\\_type()`, `get\\\_pos\\\_x()` |
| **Variáveis**                     | Armazenar posição, contagem de itens, estado                       |
| **Funções**                       | Criar rotinas reutilizáveis (ex: `def plantar\\\_cenoura()`)       |
| **Listas**                        | Gerenciar sequências de culturas ou posições                       |
| **Dicionários**                   | Mapear culturas a estratégias                                      |
| **Algoritmos de pathfinding**     | Navegar em labirintos de forma eficiente                           |
| **Recursão**                      | Resolver problemas mais complexos de navegação                     |
| **Otimização**                    | Reescrever código para ser mais rápido e eficiente                 |

O aprendizado é **orgânico**: ninguém manda o jogador aprender dicionários. Mas quando ele percebe que precisa associar cada tipo de semente a uma ação diferente, o dicionário se torna a solução natural.

\---

## Funcionalidades do jogo

### O Drone e o Campo

O jogador controla um único drone (ou múltiplos, após desbloqueio) que se move por um campo em grade. O drone só executa o que o código manda — ele não age sozinho.

**Ações básicas do drone:**

```python
move(North)       # move uma casa para o norte
move(East)
move(South)
move(West)

harvest()         # colhe a planta na posição atual
plant(Entities.Carrot)  # planta uma cenoura
till()            # prepara o solo
trade(Items.Carrot\\\_Seed)  # compra sementes
```

### Funções de Sensoriamento

O drone pode "sentir" o ambiente ao redor, o que é fundamental para escrever código inteligente:

```python
can\\\_harvest()         # retorna True se a planta está pronta para colher
get\\\_ground\\\_type()     # retorna o tipo de solo (grama, solo, água...)
get\\\_pos\\\_x()           # posição horizontal do drone
get\\\_pos\\\_y()           # posição vertical do drone
get\\\_world\\\_size()      # tamanho do campo
measure()             # mede propriedades da planta abaixo do drone
num\\\_items(Items.Wood) # quantos itens de um tipo você tem
```

### Culturas Disponíveis

O jogo conta com mais de 7 tipos de culturas, cada uma com mecânicas próprias:

| Cultura                | Peculiaridade                            |
| ---------------------- | ---------------------------------------- |
| **Grama / Feno**       | A mais simples, ideal para começar       |
| **Arbustos / Árvores** | Crescem em múltiplos estágios            |
| **Cenoura**            | Requer solo preparado (`till()`)         |
| **Abóbora**            | Ocupa múltiplos espaços                  |
| **Girassol**           | Requer luz solar / posicionamento        |
| **Cacto**              | Exige cuidados especiais                 |
| **Dinossauro**         | Cultura avançada com comportamento único |

Certas culturas se beneficiam de **policultura** — plantar tipos diferentes lado a lado aumenta o rendimento, incentivando o jogador a criar algoritmos mais sofisticados de plantio.

### Árvore de Tecnologia

O jogo tem uma árvore de upgrades dividida em dois lados:

- **Lado esquerdo**: novas culturas, velocidade do drone, sistema de irrigação
- **Lado direito**: novas capacidades de código — operadores, variáveis, funções, listas, dicionários

Isso significa que recursos de código como variáveis e funções precisam ser **desbloqueados** durante o jogo, garantindo que o jogador os aprenda no momento certo, sem sobrecarga de informação.

### Múltiplos Drones

Com o avanço do jogo, é possível programar **vários drones simultaneamente**, cada um com seu próprio script. Isso introduz naturalmente conceitos de **paralelismo e coordenação** entre processos.

### Editor Externo

Um diferencial notável: o código do jogo é armazenado em **arquivos `.py` reais** no computador. Com a opção de monitoramento de arquivos ativada, qualquer mudança feita no VS Code (ou outro editor) é detectada e aplicada ao jogo automaticamente. Isso significa que jogadores avançados podem usar ferramentas profissionais de desenvolvimento enquanto jogam.

\---

## Exemplo de código no jogo

Um script simples para colher e replantar automaticamente:

```python
while True:
    if can\\\_harvest():
        harvest()
    else:
        plant(Entities.Grass)
    move(North)
    if get\\\_pos\\\_y() == get\\\_world\\\_size():
        move(East)
```

Um script mais avançado com funções:

```python
def ir\\\_para\\\_proxima():
    move(East)
    if get\\\_pos\\\_x() == get\\\_world\\\_size() - 1:
        move(North)

def plantar\\\_cenoura():
    if get\\\_ground\\\_type() != Grounds.Soil:
        till()
    if num\\\_items(Items.Carrot\\\_Seed) < 1:
        trade(Items.Carrot\\\_Seed)
    plant(Entities.Carrot)

while True:
    if can\\\_harvest():
        harvest()
    else:
        plantar\\\_cenoura()
    ir\\\_para\\\_proxima()
```

\---

## Para quem é o jogo?

- **Iniciantes em programação** que querem aprender Python de forma prática e divertida
- **Programadores experientes** que gostam de otimização e automação (há desafios avançados e até um placar global cronometrado)
- **Fãs de jogos de automação** como Factorio ou Satisfactory, mas que querem uma curva de entrada mais acessível
- **Professores e educadores** que buscam uma ferramenta de ensino engajante

\---

## Informações gerais

|                         |                                     |
| ----------------------- | ----------------------------------- |
| **Desenvolvedor**       | Timon Herzog (RainbowDoggieUnicorn) |
| **Publicadora**         | Metaroot                            |
| **Lançamento**          | 10 de outubro de 2025 (v1.0)        |
| **Plataforma**          | PC (Steam)                          |
| **Idiomas**             | 11, incluindo Português             |
| **Avaliações no Steam** | +96% positivas                      |
| **Cópias vendidas**     | 260.000+ até o lançamento oficial   |

\---

> O jogo é uma prova de que ensinar programação não precisa parecer uma aula — pode parecer uma fazenda caótica esperando para ser automatizada.
