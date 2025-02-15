<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer එක require කරන්න

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // SMTP Server Configurations
        $mail->isSMTP();
        $mail->Host = 'aspmx.l.google.com'; // Gmail සඳහා SMTP Server
        $mail->SMTPAuth = true;
        $mail->Username = 'jayanthasathsara20@gmail.com'; // ඔබේ email එක
        $mail->Password = 'codn eiim whvs znow'; // App Password එක
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Headers
        $mail->setFrom('jayanthasathsara20@gmail.com', 'Sathsara');
        $mail->addAddress('jayanthasathsara20@gmail.com'); // Receiver Email
        $mail->addReplyTo($email, $name);

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<strong>Name:</strong> $name<br><strong>Email:</strong> $email<br><strong>Message:</strong><br>$message";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

        // Send Email
        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Failed to send the message. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
