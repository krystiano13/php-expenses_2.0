<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once './vendor/autoload.php';

use App\File;

if(isset($_POST['test'])) {
    $file = new File($_FILES['file']);
    echo json_encode(['msg' => $file -> getFile()]);
}
