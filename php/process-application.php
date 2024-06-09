<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $cv = $_FILES['cv'];

    $uploadDir = '../uploads/';
    $uploadFile = $uploadDir . basename($cv['name']);

    if (move_uploaded_file($cv['tmp_name'], $uploadFile)) {
        header('Location: ../success.html');
        exit();
    } else {
        header('Location: ../success.html');
        exit();
    }
} else {
    echo "Phương thức yêu cầu không hợp lệ.";
}
?>
