<?php
include_once "ClassConnection.php";

//=========  Cabeçalhos ==========================
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

$response_json = file_get_contents("php://input");
$data = json_decode($response_json, true);

if($data){
    $chapaProfessor = $data['Professor']['chapaProfessor'];


    //--------------------  Verifica se o cadastro já existe -----------------------------------------------------

    $query_test = "SELECT COUNT(*) FROM cadastroprofessores WHERE chapaProfessor = ?";

    $test_professor = $Con->prepare($query_test);

    $test_professor->bindParam(1, $chapaProfessor);

    $test_professor->execute();

    $row = $test_professor->fetch(PDO::FETCH_ASSOC);

    if($row['COUNT(*)'] > 0){
        $response = [
            "erro" => true,
            "mensagem" => "Ouve um erro, Cadastro já existente!"
        ]; 
    }else{// --------------- Caso o cadastro ainda nao exista ---------------------------------------------------------- 
        if($data){
        
            $nomeProfessor = $data['Professor']['nomeProfessor'];
            $salarioProfessor = $data['Professor']['salarioProfessor'];
            $titulaçaoProfessor = $data['Professor']['titulaçaoProfessor'];

            $query_professor = "INSERT INTO cadastroprofessores (chapaProfessor, nomeProfessor, salarioProfessor, titulaçaoProfessor) 
                                VALUES (?, ?, ?, ?)";
    
        
            $cad_professor = $Con->prepare($query_professor);
        
            $cad_professor->bindParam(1, $chapaProfessor);
            $cad_professor->bindParam(2, $nomeProfessor);
            $cad_professor->bindParam(3, $salarioProfessor);
            $cad_professor->bindParam(4, $titulaçaoProfessor);
    
            $cad_professor->execute();
    
            if($cad_professor->rowCount()){
           
                $response = [
                    "erro" => false,
                    "mensagem" => "✔ Cadastro efetuado com sucesso! Formulario de horários disponível abaixo  ⤓ ⤓ ⤓"
                ]; 
            }else{
                $response = [
                    "erro" => true,
                    "mensagem" => "Ouve um erro, cadastro não efetuado"
                ]; 
            }
    
        }else{
            $response = [
                "erro" => true,
                "mensagem" => "Cadastro não efetuado, por favor insira dados validos"
            ];
        }

    
    }
    http_response_code(200);
    echo json_encode($response);
}



