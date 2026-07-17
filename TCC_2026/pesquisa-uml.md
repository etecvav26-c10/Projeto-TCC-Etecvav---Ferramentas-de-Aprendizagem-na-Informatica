# Pesquisa: UML — Diagrama de Caso de Uso e Diagrama de Classes
#### Nome: João Vitor Medeiros Araujo
#### Classe: 3°C

## 1. O que é UML?

### Conceito

UML (*Unified Modeling Language*, ou Linguagem de Modelagem Unificada) é uma linguagem visual padronizada utilizada para especificar, construir, visualizar e documentar os artefatos de sistemas de software. Diferente de uma linguagem de programação, a UML não é executável: ela serve para representar graficamente a estrutura e o comportamento de um sistema, facilitando a comunicação entre os envolvidos no projeto (BOOCH; RUMBAUGH; JACOBSON, 2005).

### Objetivo

O principal objetivo da UML é fornecer um vocabulário visual comum que permita às equipes de desenvolvimento — analistas, projetistas, programadores e até mesmo clientes — compreenderem um sistema antes, durante e depois de sua implementação. Ela auxilia na modelagem de requisitos, na definição da arquitetura e na documentação do sistema, reduzindo ambiguidades que poderiam surgir apenas da descrição textual (GUEDES, 2018).

### História

A UML surgiu em meados da década de 1990, resultado da unificação de três métodos de modelagem orientada a objetos então concorrentes: o método Booch, de Grady Booch; o OMT (*Object Modeling Technique*), de James Rumbaugh; e o OOSE (*Object-Oriented Software Engineering*), de Ivar Jacobson. Esses três autores, conhecidos como "os três amigos", trabalharam juntos na Rational Software para consolidar uma notação única. Em 1997, a UML foi adotada como padrão pelo *Object Management Group* (OMG), entidade responsável por sua manutenção e evolução até hoje (FOWLER, 2004).

### Onde é utilizada

A UML é amplamente empregada no desenvolvimento de software orientado a objetos, em projetos de pequeno, médio e grande porte. É utilizada para:

- modelar requisitos de sistemas (por meio de diagramas de caso de uso);
- representar a estrutura estática de classes e objetos;
- descrever o comportamento dinâmico do sistema (sequência, atividades, estados);
- documentar arquiteturas de software para fins de manutenção e evolução;
- apoiar a comunicação entre equipes técnicas e stakeholders não técnicos.

Ela é aplicada em diversas áreas, como desenvolvimento web, sistemas corporativos, aplicativos móveis e sistemas embarcados.

---

## 2. O que é um Diagrama de Caso de Uso?

### Finalidade

O Diagrama de Caso de Uso (*Use Case Diagram*) tem como finalidade representar, de forma simples e visual, as funcionalidades que um sistema oferece sob a perspectiva do usuário. Ele descreve **o que** o sistema faz, sem detalhar **como** essas funcionalidades são implementadas internamente. É geralmente um dos primeiros diagramas elaborados em um projeto, pois ajuda a levantar e validar os requisitos funcionais junto aos interessados (GUEDES, 2018).

### Principais elementos

- **Ator**: representa um papel desempenhado por um usuário ou outro sistema que interage com o sistema modelado.
- **Caso de uso**: representa uma funcionalidade ou serviço oferecido pelo sistema.
- **Sistema (limite do sistema)**: um retângulo que delimita o escopo do sistema modelado, contendo os casos de uso em seu interior.
- **Relacionamentos**: linhas que conectam atores a casos de uso, ou casos de uso entre si.

### Atores

Um ator é qualquer entidade externa ao sistema que interage com ele, podendo ser uma pessoa, um cargo/papel ou até outro sistema computacional. É representado por uma figura humana estilizada (*stick figure*), mesmo quando representa um sistema externo. Um ator não é necessariamente uma pessoa específica, mas sim um **papel** desempenhado durante a interação (por exemplo, "Cliente", "Administrador", "Sistema de Pagamento").

### Casos de uso

Um caso de uso representa uma sequência de ações que o sistema executa e que produz um resultado de valor observável para um ator. É representado por uma elipse contendo um verbo no infinitivo que descreve a ação (por exemplo, "Realizar Login", "Cadastrar Produto", "Emitir Relatório").

### Relacionamento entre os elementos

Os principais tipos de relacionamento em um diagrama de caso de uso são:

- **Associação**: liga um ator a um caso de uso, indicando que ele participa daquela funcionalidade.
- **Include (inclusão)**: indica que um caso de uso sempre incorpora o comportamento de outro caso de uso (por exemplo, "Realizar Pedido" inclui "Validar Estoque").
- **Extend (extensão)**: indica que um caso de uso pode, opcionalmente, estender o comportamento de outro em determinadas condições (por exemplo, "Aplicar Cupom de Desconto" estende "Finalizar Compra").
- **Generalização**: indica que um ator ou caso de uso mais específico herda características de um mais genérico.

### Exemplo ilustrativo

Considere um sistema de **Biblioteca**:

```
Ator: Aluno
Casos de uso: "Consultar Acervo", "Solicitar Empréstimo", "Renovar Empréstimo"

Ator: Bibliotecário
Casos de uso: "Cadastrar Livro", "Registrar Devolução", "Gerar Relatório de Atrasos"

Relacionamento de inclusão:
"Solicitar Empréstimo" --include--> "Verificar Disponibilidade do Livro"
```

Nesse exemplo, o aluno interage com os casos de uso relacionados à consulta e empréstimo de livros, enquanto o bibliotecário interage com casos de uso administrativos, evidenciando como diferentes atores possuem diferentes conjuntos de funcionalidades dentro do mesmo sistema.

---

## 3. O que é um Diagrama de Classes?

### Finalidade

O Diagrama de Classes é o diagrama estrutural mais utilizado na UML. Sua finalidade é representar a estrutura estática do sistema, mostrando as classes que o compõem, seus atributos, métodos e os relacionamentos existentes entre elas. Ele é a base para a implementação do código orientado a objetos, servindo como um projeto (*blueprint*) da arquitetura de dados e comportamento do sistema (FOWLER, 2004).

### Classes

Uma classe é a representação abstrata de um conjunto de objetos que compartilham os mesmos atributos, métodos e relacionamentos. Graficamente, é representada por um retângulo dividido em três compartimentos: nome da classe, atributos e métodos.

### Atributos

Atributos são as características ou propriedades que descrevem o estado de um objeto da classe. Em uma classe "Aluno", por exemplo, atributos poderiam ser `nome`, `matrícula` e `dataNascimento`. Cada atributo pode ter um tipo de dado e um modificador de visibilidade (público `+`, privado `-`, protegido `#`).

### Métodos

Métodos (ou operações) representam o comportamento que os objetos da classe podem executar, ou seja, as ações que a classe é capaz de realizar. Para a classe "Aluno", métodos poderiam ser `matricular()`, `consultarNotas()` ou `solicitarDeclaracao()`.

### Relacionamentos entre classes

Os principais tipos de relacionamento em um diagrama de classes são:

- **Associação**: uma ligação simples entre duas classes, indicando que elas se comunicam ou se conhecem (por exemplo, "Aluno" associado a "Turma").
- **Agregação**: representa uma relação do tipo "todo-parte" em que as partes podem existir independentemente do todo (por exemplo, "Departamento" agrega "Professor").
- **Composição**: uma forma mais forte de agregação, em que as partes não existem sem o todo (por exemplo, "Pedido" é composto por "Itens do Pedido").
- **Herança (generalização)**: indica que uma classe filha herda atributos e métodos de uma classe pai (por exemplo, "ProfessorSubstituto" herda de "Professor").
- **Dependência**: indica que uma classe utiliza outra de forma temporária, geralmente como parâmetro de um método.

### Exemplo ilustrativo

```
Classe: Livro
- titulo: String
- autor: String
- isbn: String
+ verificarDisponibilidade(): boolean

Classe: Emprestimo
- dataEmprestimo: Date
- dataDevolucao: Date
+ calcularMulta(): float

Relacionamento:
Emprestimo "1" --- "1" Livro   (associação)
Emprestimo "*" --- "1" Aluno   (associação)
```

Esse exemplo mostra como a classe `Emprestimo` se relaciona com as classes `Livro` e `Aluno`, refletindo a estrutura de dados que sustentaria o sistema de biblioteca descrito anteriormente.

---

## 4. Comparação entre Diagrama de Caso de Uso e Diagrama de Classes

| Aspecto | Diagrama de Caso de Uso | Diagrama de Classes |
|---|---|---|
| Tipo de diagrama | Comportamental | Estrutural |
| Foco | Funcionalidades do sistema sob a ótica do usuário | Estrutura de dados e comportamento interno das classes |
| Pergunta respondida | "O que o sistema faz?" | "Como o sistema é estruturado?" |
| Elementos principais | Atores e casos de uso | Classes, atributos, métodos e relacionamentos |
| Momento de uso | Fase inicial de levantamento de requisitos | Fase de projeto e modelagem de dados/arquitetura |
| Público-alvo | Stakeholders, clientes, usuários finais | Desenvolvedores e analistas de sistemas |

O Diagrama de Caso de Uso é normalmente utilizado na etapa de **levantamento e análise de requisitos**, quando a equipe ainda está entendendo as necessidades do negócio e validando o escopo do sistema junto aos usuários. Já o Diagrama de Classes é utilizado na etapa de **projeto (design)**, quando a estrutura interna do sistema já está sendo definida para orientar a implementação do código (PRESSMAN; MAXIM, 2016).

Em resumo, os dois diagramas são complementares: o primeiro define **o quê** o sistema deve fazer, e o segundo define **como** essas funcionalidades serão estruturadas internamente em termos de dados e comportamento.

---

## 5. Aplicação Prática: Sistema de Biblioteca

Para exemplificar a aplicação conjunta dos dois diagramas, foi escolhido um sistema de **Biblioteca**.

### Atores (usuários)

- **Aluno**: usuário que consulta o acervo e solicita empréstimos.
- **Bibliotecário**: responsável pela gestão do acervo e pelo controle de empréstimos/devoluções.
- **Administrador do Sistema**: responsável por gerenciar usuários e configurações gerais do sistema.

### Funcionalidades (casos de uso)

- Consultar acervo de livros;
- Solicitar empréstimo de livro;
- Renovar empréstimo;
- Registrar devolução;
- Cadastrar/editar livro;
- Gerar relatório de empréstimos em atraso;
- Cadastrar novo usuário.

### Classes possíveis

- **Aluno**: `nome`, `matrícula`, `email` / `consultarHistorico()`
- **Bibliotecário**: `nome`, `registroFuncional` / `cadastrarLivro()`, `registrarDevolucao()`
- **Livro**: `titulo`, `autor`, `isbn`, `quantidadeDisponivel` / `verificarDisponibilidade()`
- **Emprestimo**: `dataEmprestimo`, `dataDevolucaoPrevista`, `status` / `calcularMulta()`
- **Relatorio**: `periodo`, `tipo` / `gerar()`

Essas classes se relacionam entre si: um `Aluno` pode realizar vários `Emprestimo`, cada `Emprestimo` está associado a um `Livro`, e o `Bibliotecário` é responsável por gerenciar tanto os livros quanto os empréstimos.

---

## 6. Conclusão

A UML se consolidou como uma ferramenta essencial no desenvolvimento de software orientado a objetos, pois oferece uma linguagem visual comum capaz de reduzir ambiguidades na comunicação entre as equipes técnicas e os stakeholders do projeto. Durante esta pesquisa, ficou evidente que os diagramas de UML não são apenas representações gráficas decorativas, mas sim ferramentas de raciocínio que ajudam a organizar ideias antes da implementação do código.

O Diagrama de Caso de Uso mostrou-se fundamental na etapa de levantamento de requisitos, permitindo identificar com clareza quem são os usuários do sistema e quais funcionalidades eles necessitam. Já o Diagrama de Classes revelou-se essencial na etapa de projeto, pois traduz esses requisitos em uma estrutura de dados e comportamento que pode ser diretamente implementada em código orientado a objetos.

Como principais aprendizados do grupo, destacam-se: a importância de planejar um sistema antes de codificá-lo; a compreensão de que diferentes diagramas atendem a diferentes momentos do ciclo de desenvolvimento; e a percepção de que uma boa modelagem reduz retrabalho e facilita a manutenção futura do software.

---

## Referências

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: guia do usuário**. 2. ed. Rio de Janeiro: Campus, 2005.

FOWLER, Martin. **UML essencial**: um breve guia para a linguagem-padrão de modelagem de objetos. 3. ed. Porto Alegre: Bookman, 2004.

GUEDES, Gilleanes T. A. **UML 2: uma abordagem prática**. 2. ed. São Paulo: Novatec, 2018.

PRESSMAN, Roger S.; MAXIM, Bruce R. **Engenharia de software: uma abordagem profissional**. 8. ed. Porto Alegre: AMGH, 2016.

OBJECT MANAGEMENT GROUP. **Unified Modeling Language (UML)**. Disponível em: https://www.uml.org. Acesso em: 29 jun. 2026.
