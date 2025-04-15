<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

$basePath = dirname($_SERVER['SCRIPT_NAME']); // "/alsia/backend"
$request = substr($_SERVER['REQUEST_URI'], strlen($basePath));

switch ($request) {
    case '/tests':
        require __DIR__ . '/routes/tests.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(["message" => "Not found"]);
        break;
}
