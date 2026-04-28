<?php 

require_once('conexao.php');

if(isset($_POST['acao'])){

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    $sql = "INSERT INTO clientes (nome, email, telefone) 
            VALUES ('$nome', '$email', '$telefone')";

    if(mysqli_query($conexao, $sql)){
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir: " . mysqli_error($conexao);
    }
}
?>