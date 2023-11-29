<?php

namespace App;

class File
{
    private string $fileName;

    public function __construct(string $fileName)
    {
        $this -> fileName = $fileName;
    }

    public function validate(): bool {
        $file = $_FILES[$this -> fileName];

        if($file['type'] === "text/csv") {
            return true;
        }

        else {
            return false;
        }
    }

    public function getFile(): string {
        return $this -> fileName;
    }
}