<?php
$conn = mysqli_connect('sql211.infinityfree.com', 'if0_36067284', 'Iservice1', 'if0_36067284_mylove');
if (!$conn) {
    die('Could not connect: ' . mysqli_connect_error());
}

// Configura o charset para UTF-8
mysqli_set_charset($conn, "utf8");

$sql = 'INSERT INTO cadastro(user_name, name, email, cel, birth_date, age, address, color_fav, food_fav, love_number, love_me, password) 
        VALUES ("' . $_POST["user"] . '","' . $_POST["name"] . '","' . $_POST["email"] . '","' . $_POST["tel"] . '","' . $_POST["date"] . '","' . $_POST["age"] . '","' . $_POST["address"] . '","' . $_POST["favcolor"] . '","' . $_POST["favfood"] . '","' . $_POST["amountlove"] . '","' . $_POST["yesoryes"] . '","' . $_POST["password"] . '")';

if ($conn->query($sql) === TRUE) {
    ?><script>window.alert("Enviado com sucesso as informações do formulário!")</script><?php
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Redireciona para a página home
header("Location: ../../index.html");

// Fecha a conexão com o banco de dados
mysqli_close($conn);
?>