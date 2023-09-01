<?php
// get data from from forms
$name = $_POST['name'];
$mail = $_POST['mail'];
$tel = $_POST['phone'];
$message = $_POST['message'];

// transformation HTML symbols
$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$tel = htmlspecialchars($tel);
$message = htmlspecialchars($message);

// decode URL
$name = urldecode($name);
$mail = urldecode($mail);
$tel = urldecode($tel);
$message = urldecode($message);

// delete spaces before and after strings
$name = trim($name);
$mail = trim($mail);
$tel = trim($tel);
$message = trim($message);

// mail adress and subject
$to = "deutsch.skillll@gmail.com";
$subject = "Hello. It`s a new message from DeutchSkill site";

// mail body
$messageBody = "Name: $name\n";
$messageBody .= "Email: $mail\n";
$messageBody .= "Phone: $phone\n";
$messageBody .= "Message:\n$message";


//--- Version 1. Send to email. Working.
// Send data to e-mail
if (mail($to, $subject, $messageBody)) {
	// sucssesful code
	echo "Message sent successfully!";
} else {
	// error code
	echo "An error occurred while sending the message.";
}


// --- Version 2. Send to email and telegram. TEST ----
// if (mail($to, $subject, $message)) {
//     // Ваш код для надсилання на телеграм-бот
//     $telegramBotToken = '6455102088:AAHLMwUgU5GJqfBE1JqgJY66tXmmFhiwUHA';
//     $chatId = 'YOUR_CHAT_ID';
//     $telegramMessage = "New message:\nName: $name\nMail: $email\nMessage: $message";

//     $telegramApiUrl = "https://api.telegram.org/bot$telegramBotToken/sendMessage?chat_id=$chatId&text=" . urlencode($telegramMessage);

//     // Відправка запиту до Telegram API
//     $response = file_get_contents($telegramApiUrl);

//     if ($response === false) {
//       http_response_code(500);
//       echo json_encode(array('message' => 'Помилка при відправленні повідомлення на телеграм.'));
//     } else {
//       http_response_code(200);
//       echo json_encode(array('message' => 'Повідомлення успішно відправлено і на пошту, і на телеграм.'));
//     }
//   } else {
//     http_response_code(500);
//     echo json_encode(array('message' => 'Помилка при відправленні повідомлення на пошту.'));
//   } else {
//   http_response_code(403);
//   echo json_encode(array('message' => 'Виникла помилка. Спробуйте ще раз.'));
// } else {
// 	// error code
// 	echo "An error occurred while sending the message.";
// }

?>