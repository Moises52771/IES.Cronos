<?php
include("ClassConnection.php");

#Exibição dos horários dos professores ordenados em um JSON
class relatorioDeHorarios extends ClassConnection{

    public function exibeHorarios(){
        //==========  Cabeçalhos  =================================
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json; charset=UTF-8");


        $BFetch = $this->connectDB()->prepare ("SELECT H.*, P.titulaçaoProfessor FROM horariosProfessores H 
        INNER JOIN cadastroProfessores P 
        ON (P.chapaProfessor = H.chapaProfessor)
        ORDER BY H.nomeProfessor ASC;"
        );
        $BFetch->execute();
        
        $J = [];
        $I = 0;

        while($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I] = [
                "Professor"=>$Fetch['titulaçaoProfessor']." ".$Fetch['nomeProfessor'],
                "Chapa"=>$Fetch['chapaProfessor'],
                "SegundaM"=>$Fetch['segundaM'],
                "SegundaN"=>$Fetch['segundaN'],
                "TercaM"=>$Fetch['terçaM'],
                "TercaN"=>$Fetch['terçaN'],
                "QuartaM"=>$Fetch['quartaM'],
                "QuartaN"=>$Fetch['quartaN'],
                "QuintaM"=>$Fetch['quintaM'],
                "QuintaN"=>$Fetch['quintaN'],
                "SextaM"=>$Fetch['sextaM'],
                "SextaN"=>$Fetch['sextaN']

            ];

            $I ++;
        }


        echo json_encode($J);
    }
    
}
