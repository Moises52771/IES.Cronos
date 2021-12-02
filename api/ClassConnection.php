<?php

abstract class ClassConnection{
    #Conexao com o banco de dados

    public function connectDB(){
        try{
            $Con = new PDO("mysql:host=localhost;port=3306;dbname=universidade","root","");
            return $Con;
        }catch (PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}
$Con = new PDO("mysql:host=localhost;port=3306;dbname=universidade","root","");
