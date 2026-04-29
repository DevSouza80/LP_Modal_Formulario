📄 Sistema de Cadastro com Modal — Axis Empreendimentos

📌 Descrição

Este projeto consiste em uma landing page com um formulário de cadastro exibido em modal. O sistema permite que usuários insiram seus dados pessoais e tenham essas informações processadas e armazenadas em um banco de dados MySQL através de PHP.

A aplicação simula um fluxo simples de captura de leads, com validação de dados no lado do cliente e persistência no servidor.

⚙️ Tecnologias Utilizadas
HTML5
CSS3
JavaScript (jQuery)
PHP (MySQLi)
MySQL

🧩 Estrutura do Projeto
/
├── index.html
├── cadastro.php
├── conexao.php
└── assets/
    ├── css/
    ├── js/
    ├── img/
    └── jquery/
    
🖥️ Interface

![Preview do sistema](project.png)

A página principal apresenta uma seção de destaque com um botão de ação. Ao clicar nesse botão, um modal é exibido contendo o formulário de cadastro.

O formulário solicita os seguintes dados:

Nome completo
Email
Telefone

🔄 Fluxo do Sistema
1. Abertura do Modal

O modal é acionado através de um botão na interface. A exibição é controlada via jQuery, permitindo uma interação dinâmica sem recarregar a página.

2. Validação dos Dados

Antes do envio, os dados inseridos são validados no front-end com JavaScript:

Nome: deve conter pelo menos dois nomes e seguir um padrão de escrita
Telefone: validado com base em um formato específico (XX) XXXXX-XXXX
Email: validado com expressão regular

Caso algum campo esteja inválido:

O campo é destacado visualmente
O envio do formulário é interrompido
3. Envio do Formulário

Após a validação, os dados são enviados via método POST para o arquivo responsável pelo processamento no servidor.

4. Processamento no Servidor

O arquivo responsável pelo processamento recebe os dados enviados e realiza a inserção no banco de dados.

Os dados capturados incluem:

Nome
Email
Telefone

Essas informações são utilizadas para montar uma instrução SQL de inserção.

5. Conexão com o Banco de Dados

A conexão com o banco é realizada em um arquivo separado, responsável por estabelecer a comunicação com o MySQL.

Caso ocorra falha na conexão, a execução é interrompida.

🗄️ Banco de Dados

O sistema utiliza um banco de dados contendo uma tabela responsável por armazenar os registros de cadastro.

Estrutura da tabela:
id (chave primária, auto incremento)
nome
email
telefone

🧠 Funcionamento Geral

O sistema segue um fluxo simples e funcional:

O usuário acessa a página
Abre o formulário em modal
Preenche os dados
O sistema valida as informações no navegador
Os dados são enviados ao servidor
O PHP processa e armazena no banco
Uma mensagem de retorno é exibida

👨‍💻 Autor
Desenvolvido por Pedro Souza 🚀
