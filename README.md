📄 README — Sistema de Cadastro com Modal (Axis Empreendimentos)
📌 Descrição

Este projeto é uma landing page interativa com formulário de cadastro em modal, onde os dados inseridos pelo usuário são validados no front-end e enviados para um servidor PHP, sendo então armazenados em um banco de dados MySQL.

O sistema simula um fluxo real de captura de leads (cadastro de clientes).

⚙️ Tecnologias utilizadas
HTML5 → estrutura da página
CSS3 → estilização (arquivos próprios)
JavaScript / jQuery → interações e validações
PHP (MySQLi) → processamento do formulário
MySQL → banco de dados
XAMPP → ambiente local de desenvolvimento

🧩 Estrutura do Projeto
/projeto
│
├── index.html              # Página principal com formulário
├── cadastro.php            # Processa e salva os dados
├── conexao.php             # Conexão com banco de dados
│
├── /assets
│   ├── /css
│   ├── /js
│   ├── /img
│   └── /jquery
🧠 Funcionamento do Sistema
1. 📥 Abertura do formulário
O usuário clica no botão "Começar agora"
Um modal é exibido com o formulário
$('.btn').click(function(){
    $('.modal-form').fadeIn();
});
2. ✅ Validação dos dados (JavaScript)

Antes de enviar, o sistema valida:

Nome completo (nome + sobrenome com letras maiúsculas/minúsculas)
Telefone no formato (XX) XXXXX-XXXX
Email válido

Exemplo:

if(verificarEmail(email) == false) {
    aplicarCampoInvalido($('input[name=email]'));
    return false;
}

Se algum campo estiver inválido:

O campo fica vermelho
O envio é bloqueado
3. 📤 Envio do formulário

Se tudo estiver correto:

<form action="cadastro.php" method="POST">

Os dados são enviados via POST para o arquivo cadastro.php.

4. ⚙️ Processamento no PHP

O arquivo cadastro.php:

require_once('conexao.php');

if(isset($_POST['acao'])){
Recebe os dados do formulário
Monta a query SQL
Insere no banco
$sql = "INSERT INTO clientes (nome, email, telefone) 
VALUES ('$nome', '$email', '$telefone')";

5. 🗄️ Conexão com banco

Arquivo conexao.php:

$conexao=mysqli_connect("localhost","root","","cadastro");
Conecta ao banco MySQL
Interrompe execução em caso de erro

🗃️ Estrutura do Banco de Dados

Banco: cadastro

Tabela: clientes

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20)
);

🧠 Conclusão

Este projeto implementa com sucesso:

Interface moderna com modal
Validação de formulário no front-end
Integração com PHP
Persistência de dados em MySQL

É uma ótima base para:

sistemas de cadastro
landing pages
captura de leads
