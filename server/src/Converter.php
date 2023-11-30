<?php

namespace App;

use App\Calculate;

class Converter
{
    private string $fileName;
    private array $expensesArray;
    private array $income = array();

    public function __construct(string $fileName) {
        $this -> fileName = $fileName;
        $this -> expensesArray = array();
    }

    public function convert(): self {
        $file = fopen($_FILES[$this -> fileName]['tmp_name'], 'r');;

        while($row = fgetcsv($file,null,',')) {
            array_push($this -> expensesArray, $row);
        }

        fclose($file);
        return $this;
    }

    public function verifyFormat():bool {
        if($this -> expensesArray[0] === ['Date', 'Check #', 'Description', 'Amount']) {
            $calc = new Calculate($this -> expensesArray);
            $calc -> calc();

            $this -> income = ['income' => $calc -> income, 'expenses' => $calc -> expenses, 'net' => $calc -> net];
            return true;
        }
        return false;
    }

    public function getExpensesArray(): array {
        return $this -> expensesArray;
    }

    public function getIncome():array {
        return $this -> income;
    }
}