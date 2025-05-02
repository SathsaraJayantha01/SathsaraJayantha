<?php
// Debug log
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . ' - Handler Request: ' . $_SERVER['REQUEST_METHOD'] . "\n", FILE_APPEND);

// Set headers for AJAX response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Create response array
$response = [
    'success' => false,
    'message' => ''
];

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = "Invalid request method";
    echo json_encode($response);
    exit;
}

// Get and sanitize form data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Log received data
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Data received: " . 
    "name=$name, email=$email, subject=$subject, message=" . substr($message, 0, 20) . "...\n", FILE_APPEND);

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    $response['message'] = "Please fill all required fields.";
    echo json_encode($response);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Please enter a valid email address.";
    echo json_encode($response);
    exit;
}

// Try to send email
$to = "sathsarajayantha8@gmail.com";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$email_content = "<strong>Name:</strong> $name<br>";
$email_content .= "<strong>Email:</strong> $email<br>";
$email_content .= "<strong>Message:</strong><br>$message";

// Send email and log result
$mail_sent = mail($to, $subject, $email_content, $headers);
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Mail sent result: " . ($mail_sent ? "Success" : "Failed") . "\n", FILE_APPEND);

if ($mail_sent) {
    $response['success'] = true;
    $response['message'] = "Message sent successfully!";
} else {
    $response['message'] = "Sorry, we couldn't send your message. Please try again later.";
}

// Send JSON response
echo json_encode($response);
exit;
?>