# Projeto Integrador ALUXYA

## Sobre o projeto

A ALUXYA é um projeto integrador que apresenta uma plataforma demonstrativa de acolhimento psicológico. O site informa sobre a proposta, apresenta profissionais, oferece canais de contato e demonstra telas de acesso e cadastro para usuários e profissionais.

Os formulários de acesso são apenas demonstrativos: não criam contas, não autenticam usuários e não enviam nem armazenam dados. Uma implementação real exige um backend seguro.

## Tecnologias

- HTML5 semântico
- CSS3
- Bootstrap 5.3.3 para componentes e responsividade
- JavaScript para validação e interações da interface
- Font Awesome para ícones

Bootstrap e Font Awesome são carregados por CDN, então é necessária conexão com a internet para carregar esses recursos.

## Estrutura do projeto

```text
P1-Alivium/
└── Alivium/
    ├── Home.html
    ├── somos.html
    ├── profissionais.html
    ├── contatos.html
    ├── login.html
    ├── style.css
    ├── site.js
    ├── img/
    └── figma-editavel/
```

O detalhamento das páginas e interações está em [P1-Alivium/Alivium/README.md](./P1-Alivium/Alivium/README.md).

## Como executar

Abra `P1-Alivium/Alivium/Home.html` em um navegador. Alternativamente, abra o repositório no Visual Studio Code e execute a página com a extensão Live Server.

## Objetivo do repositório

Organizar o desenvolvimento do projeto, controlar as versões dos arquivos e permitir que todos os integrantes contribuam de forma colaborativa utilizando Git e GitHub.

## Regras de trabalho da equipe

1. Ninguém poderá realizar commits diretamente na branch `main`.
2. Cada tarefa deverá ser desenvolvida em uma branch própria, seguindo o padrão `feature/nome-da-tarefa`.
3. Todo Pull Request deverá receber a revisão e a aprovação de pelo menos um colega antes do merge.
4. As mensagens de commit deverão ser claras e escritas no imperativo, como `Adiciona tela de cadastro` e `Corrige validação`.
5. Antes de começar uma tarefa, cada integrante deverá executar `git pull` para atualizar sua cópia local do projeto.

## Fluxo de desenvolvimento

1. Escolher uma Issue correspondente à tarefa.
2. Atualizar a branch principal local.
3. Criar uma branch para a tarefa.
4. Realizar alterações e commits pequenos e frequentes.
5. Enviar a branch para o GitHub e abrir um Pull Request.
6. Incluir `Closes #número` na descrição do Pull Request.
7. Revisar o Pull Request de um colega.
8. Realizar o merge após a aprovação e atualizar a branch `main` local.

## Trabalho em equipe

Todos os integrantes devem colaborar no desenvolvimento, revisar as alterações e resolver conflitos em conjunto. Os conflitos deverão ser documentados no Pull Request correspondente.
