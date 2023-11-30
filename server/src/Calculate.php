<?php

namespace App;

class Calculate
{
    private array $data;
    public float $income = 0;
    public float $expenses = 0;
    public float $net = 0;

    public function __construct(array $data)
    {
        $this -> data = $data;
    }

    public function calc() {
        for($i=1; $i < count($this -> data); $i++) {
            $num = (float)str_replace('$','',$this -> data[$i][3]);

            if($num < 0) {
                $this -> expenses -= $num;
                $this -> net -= $num;
            }

            else {
                $this -> income += $num;
                $this -> net += $num;
            }
        }
    }
}