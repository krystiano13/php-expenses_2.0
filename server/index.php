<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once './vendor/autoload.php';

use App\File;
use App\Converter;

if(isset($_FILES['file'])) {
    $file = new File('file');

    if($file -> validate()) {
        $converter = new Converter($file -> getFile());
        $converter -> convert();
        echo json_encode(['result' => $converter -> getExpensesArray()]);
    }

    else {
        echo json_encode(['msg' => 'failure']);
        return;
    }
}
