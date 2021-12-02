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
    $chapaProfessor = $data['Horarios']['chapaProfessor'];
    $nomeProfessor = $data['Horarios']['nomeProfessor'];

    $segundaM = $data['Horarios']['segundaM'];
    $segundaN = $data['Horarios']['segundaN'];

    $terçaM = $data['Horarios']['terçaM'];
    $terçaN = $data['Horarios']['terçaN'];

    $quartaM = $data['Horarios']['quartaM'];
    $quartaN = $data['Horarios']['quartaN'];

    $quintaM = $data['Horarios']['quintaM'];
    $quintaN = $data['Horarios']['quintaN'];

    $sextaM = $data['Horarios']['sextaM'];
    $sextaN = $data['Horarios']['sextaN'];

    //--------------------  Verifica se o cadastro já existe -----------------------------------------------------

    $query_test = "SELECT COUNT(*) FROM horariosprofessores WHERE chapaProfessor = ?";

    $test_horarios = $Con->prepare($query_test);

    $test_horarios->bindParam(1, $chapaProfessor);

    $test_horarios->execute();

    $row = $test_horarios->fetch(PDO::FETCH_ASSOC);

    if($row['COUNT(*)'] > 0){
        $query_horarios =  "UPDATE `horariosprofessores` SET `segundaM` = ?, `segundaN` = ?, `terçaM` = ?, `terçaN` = ?, `quartaM` = ?, `quartaN` = ?, `quintaM` = ?, `quintaN` = ?, `sextaM` = ?, `sextaN` = ? WHERE `horariosprofessores`.`chapaProfessor` = ?";
    
        
            $cad_horarios = $Con->prepare($query_horarios);
        
            $cad_horarios->bindValue(1, $segundaM);
            $cad_horarios->bindValue(2, $segundaN);
            $cad_horarios->bindValue(3, $terçaM);
            $cad_horarios->bindValue(4, $terçaN);
            $cad_horarios->bindValue(5, $quartaM);
            $cad_horarios->bindValue(6, $quartaN);
            $cad_horarios->bindValue(7, $quintaM);
            $cad_horarios->bindValue(8, $quintaN);
            $cad_horarios->bindValue(9, $sextaM);
            $cad_horarios->bindValue(10, $sextaN);
            $cad_horarios->bindParam(11, $chapaProfessor);
            
            $cad_horarios->execute();

            if($cad_horarios->rowCount()){
           
                $response = [
                    "erro" => false,
                    "mensagem" => "✔ Os dados foram atualizados com sucesso!"
                ];  
            }else{
                $response = [
                    "erro" => true,
                    "mensagem" => "Ouve um erro, edição não efetuado"
                ]; 
            }
        
    }else{// --------------- Caso o cadastro ainda não exista ---------------------------------------------------------- 
        if($data){
        
            

            $query_professor = "INSERT INTO `horariosprofessores` (`chapaProfessor`, `nomeProfessor`, `segundaM`, `segundaN`, `terçaM`, `terçaN`, `quartaM`, `quartaN`, `quintaM`, `quintaN`, `sextaM`, `sextaN`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
        
            $cad_horarios = $Con->prepare($query_professor);
        
            $cad_horarios->bindParam(1, $chapaProfessor);
            $cad_horarios->bindParam(2, $nomeProfessor);
            $cad_horarios->bindParam(3, $segundaM);
            $cad_horarios->bindParam(4, $segundaN);
            $cad_horarios->bindParam(5, $terçaM);
            $cad_horarios->bindParam(6, $terçaN);
            $cad_horarios->bindParam(7, $quartaM);
            $cad_horarios->bindParam(8, $quartaN);
            $cad_horarios->bindParam(9, $quintaM);
            $cad_horarios->bindParam(10, $quintaN);
            $cad_horarios->bindParam(11, $sextaM);
            $cad_horarios->bindParam(12, $sextaN);
    
            $cad_horarios->execute();
    
            if($cad_horarios->rowCount()){
           
                $response = [
                    "erro" => false,
                    "mensagem" => "✔ Cadastro efetuado com sucesso!"
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