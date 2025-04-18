<?php
require_once 'models/Test.php';

class TestController
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function index() {
        $test = new Test($this->db);
        $result = $test->getAll();

        header('Content-Type: application/json');
        echo json_encode($result);
    }

    public function show($id) {
        $test = new Test($this->db);
        $result = $test->getOne($id);

        header('Content-Type: application/json');
        echo json_encode($result);
    }
}
