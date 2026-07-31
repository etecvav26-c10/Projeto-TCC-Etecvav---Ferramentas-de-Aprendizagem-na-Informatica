# 🚜 The Farmer Was Replaced

## O que é?

**The Farmer Was Replaced** é um jogo indie de simulação e automação desenvolvido por **Timon Herzog** e publicado pela **Metaroot**, lançado em acesso antecipado em 2023 e com versão 1.0 em outubro de 2025.

A premissa é simples: o fazendeiro foi substituído. No lugar dele, você programa um **drone** para realizar todas as tarefas agrícolas. Tudo isso é feito escrevendo código real em uma **linguagem com sintaxe praticamente idêntica ao Python**.

---

## Por que ele se destaca?

- **Progressão contínua**: não há níveis separados. Você colhe recursos, gasta em uma árvore de tecnologia e expande sua fazenda organicamente.
- **Sem resposta certa única**: cada desafio pode ser resolvido de múltiplas formas.
- **Código real**: os scripts são salvos em arquivos `.py` e podem ser editados no VS Code.
- **Feedback imediato e visual**: você escreve o código, pressiona executar e assiste o drone em ação.

---

## O que o jogo ensina?

| Conceito | Como aparece no jogo |
|----------|----------------------|
| **Sequência** | Comandos básicos: mover, plantar, colher |
| **Loop while** | Repetir a colheita indefinidamente |
| **Condicionais if/else** | Verificar se uma planta está pronta para colher |
| **Loop for** | Percorrer linhas e colunas da fazenda |
| **Variáveis** | Armazenar posição, contagem de itens, estado |
| **Funções** | Criar rotinas reutilizáveis |
| **Listas** | Gerenciar sequências de culturas ou posições |
| **Dicionários** | Mapear culturas a estratégias |
| **Algoritmos de pathfinding** | Navegar em labirintos de forma eficiente |
| **Recursão** | Resolver problemas mais complexos de navegação |
| **Otimização** | Reescrever código para ser mais rápido e eficiente |

---

## Funcionalidades do jogo

### Ações básicas do drone

```python
move(North)
move(East)
move(South)
move(West)

harvest()
plant(Entities.Carrot)
till()
trade(Items.Carrot_Seed)
```

### Funções de Sensoriamento

```python
can_harvest()
get_ground_type()
get_pos_x()
get_pos_y()
get_world_size()
num_items(Items.Wood)
```

### Culturas Disponíveis

| Cultura | Peculiaridade |
|---------|---------------|
| **Grama / Feno** | A mais simples, ideal para começar |
| **Cenoura** | Requer solo preparado com `till()` |
| **Abóbora** | Ocupa múltiplos espaços |
| **Girassol** | Requer posicionamento específico |
| **Cacto** | Exige cuidados especiais |
| **Dinossauro** | Cultura avançada com comportamento único |

---

## Exemplo de código

Script simples para colher e replantar automaticamente:

```python
while True:
    if can_harvest():
        harvest()
    else:
        plant(Entities.Grass)
    move(North)
    if get_pos_y() == get_world_size():
        move(East)
```

Script mais avançado com funções:

```python
def ir_para_proxima():
    move(East)
    if get_pos_x() == get_world_size() - 1:
        move(North)

def plantar_cenoura():
    if get_ground_type() != Grounds.Soil:
        till()
    if num_items(Items.Carrot_Seed) < 1:
        trade(Items.Carrot_Seed)
    plant(Entities.Carrot)

while True:
    if can_harvest():
        harvest()
    else:
        plantar_cenoura()
    ir_para_proxima()
```

---

## Para quem é o jogo?

- **Iniciantes em programação** que querem aprender Python de forma prática e divertida
- **Programadores experientes** que gostam de otimização e automação
- **Fãs de jogos de automação** como Factorio ou Satisfactory
- **Professores e educadores** que buscam uma ferramenta de ensino engajante

---

## Informações gerais

| | |
|--|--|
| **Desenvolvedor** | Timon Herzog (RainbowDoggieUnicorn) |
| **Publicadora** | Metaroot |
| **Lançamento** | 10 de outubro de 2025 (v1.0) |
| **Plataforma** | PC (Steam) |
| **Idiomas** | 11, incluindo Português |
| **Avaliações no Steam** | +96% positivas |
| **Cópias vendidas** | 260.000+ até o lançamento oficial |
