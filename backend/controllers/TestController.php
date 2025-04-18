<?php
require_once 'models/Test.php';

class TestController
{
    private $model;

    public function __construct($db)
    {
        $this->model = new Test($db);
    }

    public function index()
    {
        $tests = $this->model->all();
        echo json_encode($tests);
    }

    public function show($id)
    {
        $test = $this->model->find($id);
        if ($test) {
            echo json_encode($test);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Test non trouvé']);
        }
    }

    public function create($data)
    {
        $created = $this->model->create($data);
        echo json_encode($created);
    }

    public function update($id, $data)
    {
        $updated = $this->model->update($id, $data);
        echo json_encode($updated);
    }

    public function delete($id)
    {
        $deleted = $this->model->delete($id);
        echo json_encode(['deleted' => $deleted]);
    }
}
