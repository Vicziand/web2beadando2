<?php

class Sutieink_Controller
{
    public $baseName = 'sutieink';
    public function main(array $vars)
    {
        $view = new View_Loader($this->baseName."_main");
    }
}

?>