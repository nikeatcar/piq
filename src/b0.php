
<meta charset="utf-8">
<?php
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['phone']))		{$phone		= $_POST['phone'];		if ($phone == '')	{unset($phone);}}
if (isset($_POST['email']))			{$email			= $_POST['email'];		if ($email == '')	{unset($email);}}
if (isset($_POST['textmessage']))			{$textmessage			= $_POST['textmessage'];		if ($textmessage == '')		{unset($textmessage);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($phone) ) {
$phone=stripslashes($phone);
$phone=htmlspecialchars($phone);
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
}
if (isset($textmessage) ) {
$textmessage=stripslashes($textmessage);
$textmessage=htmlspecialchars($textmessage);
}
// адрес почты куда придет письмо
$address="info@piq.by";
// текст письма 
$note_text="Тема : Новый запрос от $name";
$body_text="\r\n Имя : $name \r\n Телефон : $phone \r\n Email : $email \r\n Сообщение : $textmessage";

if (isset($name)  &&  isset ($email)) {
mail($address, $note_text, $body_text,"Content-type:text/plain; windows-1251");

// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b style='color:red;'> $email</b>.</p>";
}
?>
