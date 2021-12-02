<?php
include_once "ClassConnection.php";

//=========  Cabeçalhos ==========================
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");



$chapaProfessor = filter_input(INPUT_GET, "chapa", FILTER_SANITIZE_STRING);

if(!empty($chapaProfessor)){
    //--------------------  Deleta de horariosProfessores -----------------------------------------------------

    $query_test = "DELETE FROM `horariosprofessores` WHERE `horariosprofessores`.`chapaProfessor` = ?";
    $test_horarios = $Con->prepare($query_test);

    $test_horarios->bindParam(1, $chapaProfessor);

    if ($test_horarios->execute()){

        //-------------------- Deleta de cadastroProfessores -------------------------------------------------------

        $query_test = "DELETE FROM `cadastroprofessores` WHERE `cadastroprofessores`.`chapaProfessor` = ?";

        $test_horarios = $Con->prepare($query_test);

        $test_horarios->bindParam(1, $chapaProfessor);

        if ($test_horarios->execute()){
            $response = [
                "erro" => false,
                "mensagem" => "Registro deletado com sucesso!"
            ]; 
        }else{
            $response = [
                "erro" => true,
                "mensagem" => "Erro, o registro não foi deletado com sucesso!"
            ]; 
        }
         
    }else{
        $response = [
            "erro" => true,
            "mensagem" => "Erro, o registro não foi deletado com sucesso!"
        ]; 
    }

}else{
    $response = [
        "erro" => true,
        "mensagem" => "Registro não encontrado!"
    ]; 
}

http_response_code(200);
echo json_encode($response);





