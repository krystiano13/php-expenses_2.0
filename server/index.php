<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once './vendor/autoload.php';

use App\File;

if(isset($_FILES['file'])) {
    $file = new File('file');

    if($file -> validate()) {
        echo json_encode(['msg' => 'succsess']);
    }

    else {
        echo json_encode(['msg' => 'failure']);
        return;
    }
}
