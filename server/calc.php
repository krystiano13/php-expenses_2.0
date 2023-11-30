<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once './vendor/autoload.php';

use App\Calculate;

if(isset($_POST['array'])) {
    $calc = new Calculate($_POST['array']);
    $calc -> calc();

    echo json_encode(['income' => $calc -> income, 'expenses' => $calc -> expenses, 'net' => $calc -> net]);
}

