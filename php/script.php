<?php

function validateX($xVal){
    $x = str_replace(',', '.', $xVal);

    if (($x != -3) && ($x != -2) && ($x != -1)
        && ($x != 0) && ($x != 1) && ($x != 2)
        && ($x != 3) && ($x != 4) && ($x != 5)) {
        return false;
    }
    return isset($xVal) && is_numeric($x);
}

function validateY($yVal){
    $yMin = -3;
    $yMax = 3;

    $y = str_replace(',', '.', $yVal);

    if (!isset($yVal))
        return false;

    return is_numeric($y) && $y > $yMin && $y < $yMax;
}

function validateR($rVal){
    $r = str_replace(',', '.', $rVal);

    if ($r != 1 && $r != 1.5 && $r != 2 && $r != 2.5 && $r != 3){
        return false;
    }


    return isset($rVal) && is_numeric($r);
}

function validateXYR($x, $y, $r){
    return validateX($x) && validateY($y) && validateR($r);
}

function hitCircle($x, $y, $r){
    return $x >= 0 && $y >= 0 && sqrt($x * $x + $y * $y) <= $r/2;
}

function hitTriangle($x, $y, $r){
    return $x >= 0 && $y <= 0 && $y >= $x - $r;
}

function hitRectangle($x, $y, $r){
    return $x <= 0 && $y <= 0 && $x >= -$r/2 && $y >= -r;
}

function checkHit($x, $y, $r){
return hitCircle($x, $y, $r) || hitRectangle($x, $y, $r) || hitTriangle($x, $y, $r);
}


$xval = $_POST['x'];
$yval = $_POST['y'];
$rval = $_POST['r'];
$timezoneOffset = $_POST['time'];

$isValid = validateXYR($xval, $yval, $rval);
$isValidConverted = $isValid ? 'true' : 'false';

$isHit = checkHit($xval, $yval, $rval);
$isHitConverted = $isHit ? 'true' : 'false';

$currentTime = date('H:i:s', time() - $timezoneOffset * 60);

$executionTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);

if ($isValid) {
    $jsonData = '{' .
        "\"valid\":$isValidConverted," .
        "\"x\":\"$xval\"," .
        "\"y\":\"$yval\"," .
        "\"r\":\"$rval\"," .
        "\"ans\":$isHitConverted," .
        "\"curtime\":\"$currentTime\"," .
        "\"exectime\":\"$executionTime\"" .
        "}";
} else {
    $jsonData = '{' .
        "\"valid\":$isValidConverted" .
        "}";
}




echo $jsonData;