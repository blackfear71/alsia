<?php
require_once 'config/database.php';
require_once 'controllers/TestController.php';

$database = new Database();
$db = $database->getConnection();

$controller = new TestController($db);
$controller->index();
