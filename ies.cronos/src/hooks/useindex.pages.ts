import { useState, useEffect } from "react";
import { UserShortInterface } from "../data/@types/UserInterface";
import { ApiService } from "../data/services/ApiServices";



export default function useIndex() {
 
    const [Professores, setProfessores] = useState([] as UserShortInterface[]);
    
        useEffect(() => {
        
            ApiService.get("")
            .then((response) => setProfessores(response.data))
            .catch ((error) => {
                console.error(error)
                alert("Falha ao tentar buscar os dados! \n" + error)
            
            })
        }, []);
   
    

    return {
        Professores
    }
        
}