<?php
session_start();

// Conectando ao banco de dados
$conn = mysqli_connect('sql211.infinityfree.com', 'if0_36067284', 'Iservice1', 'if0_36067284_mylove');

// Verificando se houve erro na conexão
if (!$conn) {
    die('Could not connect: ' . mysqli_connect_error());
}

// Configurando o charset para UTF-8
mysqli_set_charset($conn, "utf8");

// Verificando se os dados de entrada foram enviados pelo formulário
if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['user'])) {
    // Capturando os dados de entrada e escapando caracteres especiais
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);
    $user = $conn->real_escape_string($_POST['user']);

    // Consulta SQL para verificar o usuário
    $query = "SELECT * FROM cadastro WHERE email='$email' AND user_name='$user' AND password='$password'";
    $result = $conn->query($query) or die('Query failed: ' . $conn->error);

    // Verificando se a consulta retornou algum resultado
    if ($result->num_rows == 1) {
        $usuario = $result->fetch_assoc();
        // Se as credenciais estiverem corretas, inicia a sessão e redireciona para a página de home
        $_SESSION['cadastro'] = $usuario['user_name'];
        header("Location: ../html/home.html");
        exit;
    } else {
        // Se nenhum usuário correspondente for encontrado, exibe mensagem de erro e redireciona para a página index
        echo "<script>alert('Falha ao logar! Email, usuário ou senha incorretos.');</script>";
        echo "<script>window.location.href='../../index.html';</script>";
        exit;
    }
}

// Fecha a conexão com o banco de dados
mysqli_close($conn);
?>