<?php
require_once 'config/database.php';
require_once 'controllers/TestController.php';

$database = new Database();
$db = $database->getConnection();

$router->get('/tests/all', function () use ($db) {
    $controller = new TestController($db);
    $controller->index();
});

$router->get('/tests/one/:id', function ($params) use ($db) {
    $controller = new TestController($db);
    $controller->show($params['id']);
});
