<?php 
if(isset($_POST['submit'])){
    $to = "wellrespectdman5@gmail.com"; // this is your Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = "Form submission";
    $message = "Name: " . $name . " with phone:" . $phone;

    $headers = "From:" . $name;
    mail($to, $subject, $message, $headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>