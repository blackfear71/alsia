<?php
require_once '../models/Test.php';

class TestController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function index() {
        $produit = new Test($this->db);
        $result = $produit->getAll();

        header('Content-Type: application/json');
        echo json_encode($result);
    }
}
