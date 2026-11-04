# Alivium

Projeto integrador de uma plataforma demonstrativa de acolhimento psicológico, com informações sobre a proposta, profissionais, canais de contato e acesso para usuários e profissionais.

## Tecnologias

- HTML5 semântico
- CSS3
- Bootstrap 5.3.3
- JavaScript
- Font Awesome para ícones

Bootstrap e Font Awesome são carregados por CDN, então é necessária conexão com a internet para carregar esses recursos.

## Estrutura do projeto

```text
Alivium/
├── Home.html             # Página inicial
├── somos.html            # Apresentação do projeto e da equipe
├── profissionais.html    # Perfis demonstrativos de profissionais
├── contatos.html         # Formulário e informações de contato
├── login.html            # Acesso e cadastro demonstrativos
├── style.css             # Estilos e regras responsivas
├── site.js               # Interações e validações
├── img/                  # Imagens e documentos utilizados no projeto
└── figma-editavel/       # Telas exportadas do protótipo
```

## Como executar

1. Baixe ou extraia a pasta do projeto.
2. Abra `Home.html` em um navegador.
3. Use o menu para navegar pelas páginas.

Também é possível abrir a pasta no Visual Studio Code e iniciar um servidor local com a extensão Live Server.

## Interações

- Menu responsivo do Bootstrap.
- Formulário de contato que prepara uma mensagem no aplicativo de e-mail.
- Validação demonstrativa dos formulários de acesso e cadastro, incluindo confirmação de senha e comprovante profissional.
- Botão para voltar ao topo.

Os formulários de login e cadastro são apenas uma demonstração de interface: não criam contas, não autenticam usuários e não enviam nem armazenam dados. Para autenticação e persistência reais, é necessário implementar um backend seguro.
