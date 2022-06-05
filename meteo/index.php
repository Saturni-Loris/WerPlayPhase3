<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<header>
</header>

    
</body>
</html>



<link rel="stylesheet" href="style.css">


<?php 
$apiKey = "bc12083e70d2d22298c2df1cec7101d9"; 
$jsonurl = "http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=" . 
$apiKey; 
$json = file_get_contents($jsonurl); 
$weather = json_decode($json); 
$kelvin = $weather->main->temp;
$temp_max = $weather->main->temp_max;
$temp_min = $weather->main->temp_min;


$celcius = $kelvin - 273.15;
$temp_maxi = $temp_max - 273.15; 
$temp_mini= $temp_min - 273.15; 

echo "<h2>Actuelle " . $celcius . "° à <span>Montbeliard<span/><h2/>"; 
echo "<h3>Max: " . $temp_maxi . "° à <span>Montbeliard<span/><h3/>";
echo "<h3>Min: " . $temp_mini . "° à <span>Montbeliard<span/><h3/>";

if ($celcius > 19) {
    echo "<img src=''>";
} else {
    echo "<img src=''>";
}

?>