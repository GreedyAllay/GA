<?php
$filename = $_GET['filename'];
$filePath = Programs\calculator.gex . '/' . $filename; // Adjust this based on your server setup

if (file_exists($filePath)) {
    echo file_get_contents($filePath);
} else {
    echo "File not found or error loading.";
}
?>
