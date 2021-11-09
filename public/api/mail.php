<?php

$mail = $_POST["email"];
$name = $_POST["name"];
$msg = $_POST["message"];

$adminEmail = 'clacloud99@gmail.com';
$adminMessage = "
<html>
  <head>
    <title>Email from ClaCloud.it</title>
    <style type='text/css'>
      div{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .corpo{
        font-family: Gilroy, Arial;
        margin: 0 auto;
        background: #272727;
        color: #E4E4E4;
        padding: 20px;
        border-radius: 20px;
      }
      h1{
        text-align: center;
        margin: 30px auto 50px;
      }
      a{
        color: #E8A12A;
        font-weight: bold;
      }
      .row{
        display: flex;
        max-width: 900px;
        margin: 0 auto;
      }
      .col{
        background: rgba(255, 255, 255, 0.05);
        color: #E4E4E4;
        padding: 10px;
        font-size: 20px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        border-bottom: 3px solid #E4E4E4;
        margin-bottom: 30px;
      }
      .margin{
        margin-right: 30px;
      }
      .msg{
        min-height: 150px;
      }
      .placeholder{
        font-size: 15px;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
      }
      @media (max-width: 700px){
        .row{
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <div class='corpo'>
      <h1>Email from ClaCloud.it</h1>
      <div class='form'>
        <div class='row'>
          <div class='col margin'>
            <span class='placeholder'>Name: </span>
            $name
          </div>
          <div class='col'>
            <span class='placeholder'>Email: </span>
            $mail
          </div>
        </div>
        <div class='row'>
          <div class='col msg'>
            <span class='placeholder'>Message: </span>
            $msg
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
// Additional headers
$headers[] = "To: Claudio La Rosa <$adminEmail>";
$headers[] = "From: ClaCloud.it <noreply@clacloud.it>";
mail($adminEmail, "Email from $name", $adminMessage, implode("\r\n", $headers));

$userMessage = "
<html>
  <head>
    <title>Email from ClaCloud.it</title>
    <style type='text/css'>
      div{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .corpo{
        font-family: Gilroy, Arial;
        margin: 0 auto;
        background: #272727;
        color: #E4E4E4;
        padding: 20px;
        border-radius: 20px;
      }
      h1{
        text-align: center;
        margin: 30px auto 50px;
      }
      h1 > span{
        display: block;
        font-size: 20px;
        font-weight: normal;
      }
      a{
        color: #E8A12A;
        font-weight: bold;
      }
      .row{
        display: flex;
        max-width: 900px;
        margin: 0 auto;
      }
      .col{
        background: rgba(255, 255, 255, 0.05);
        color: #E4E4E4;
        padding: 10px;
        font-size: 20px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        border-bottom: 3px solid #E4E4E4;
        margin-bottom: 30px;
      }
      .margin{
        margin-right: 30px;
      }
      .msg{
        min-height: 150px;
      }
      .placeholder{
        font-size: 15px;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
      }
      @media (max-width: 700px){
        .row{
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <div class='corpo'>
      <h1>Thank you for contacting me!<span>This is what I've received</span></h1>
      <div class='form'>
        <div class='row'>
          <div class='col margin'>
            <span class='placeholder'>Name: </span>
            $name
          </div>
          <div class='col'>
            <span class='placeholder'>Email: </span>
            $mail
          </div>
        </div>
        <div class='row'>
          <div class='col msg'>
            <span class='placeholder'>Message: </span>
            $msg
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
";

$headersP[] = 'MIME-Version: 1.0';
$headersP[] = 'Content-type: text/html; charset=utf-8';
// Additional headers
$headersP[] = "To: $name <$mail>";
$headersP[] = "From: Claudio La Rosa <noreply@clacloud.it>";
mail($mail, 'Email from ClaCloud.it', $userMessage, implode("\r\n", $headersP));

header('location: /Contact');
