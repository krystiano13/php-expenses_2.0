<?php

namespace App;

class File
{
    private $file;

    public function __construct($file)
    {
        $this -> file = $file;
    }

    public function getFile() {
        return $this -> file;
    }
}