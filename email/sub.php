<?php 

        $myemail = 'sanchopaul1@gmail.com';
        $name = $_POST['inscripcion'];

        $to = $myemail;
        $email_subject = "Nueva Subcripcion: $subject";
        $email_body = "Haz recibido un nuevo mensaje del sitio web Indio Surf School de Subcripcion. \n Nombre: $name";
        $headers = "From: $email";

        mail($to, $email_subject, $email_body, $headers);

        if($name){

            echo "<script> 
        
            alert('Subscrito Correctamente'); 
            
            location.href = '../index.html';
            
            </script>";
            
        }else{

            echo "<script> 

            alert('incorrecto');
            
            </script>";

        }

?>