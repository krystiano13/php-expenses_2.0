<?php

namespace App;

class Converter
{
    private string $fileName;
    private array $expensesArray;

    public function __construct(string $fileName) {
        $this -> fileName = $fileName;
        $this -> expensesArray = array();
    }

    public function convert(): void {
        $file = fopen($_FILES[$this -> fileName]['tmp_name'], 'r');;

        while($row = fgetcsv($file,null,',')) {
            array_push($this -> expensesArray, $row);
        }

        fclose($file);
    }

    public function getExpensesArray(): array {
        return $this -> expensesArray;
    }
}