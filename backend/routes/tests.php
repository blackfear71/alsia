<?php
require_once '../config/database.php';
require_once '../controllers/ProduitController.php';

$database = new Database();
$db = $database->getConnection();

$controller = new TestController($db);
$controller->index();
