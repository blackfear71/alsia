<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/tests':
        require __DIR__ . '/routes/tests.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(["message" => "Not found"]);
        break;
}
