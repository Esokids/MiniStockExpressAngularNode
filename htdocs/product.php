<?php

header("Access-Control-Allow-Origin: *");

$products = array(
    array("id" => 1, "name" => "Stock SME", "price" => 900),
    array("id" => 2, "name" => "Hotel Management", "price" => 1500)
);

echo json_encode($products);

?>