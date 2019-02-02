<?php
    $tab = $_POST[];

    header("Content-Type: application/json; charset=UTF8");
    print_r(json_encode($tab));
?>