<?php

header("Access-Control-Allow-Origin: *");

$json = json_decode(file_get_contents("php://input"));

// echo "<div>name = {$json->name}</div>";
// echo "<div>price = {$json->price}</div>";
echo "<div> {$json} </div>";
?>