import React from "react";
import "../ui/styles/pages/css/Home.css"
import SafeEnviroment from "../ui/components/feedback/SafeEnvironment/SafeEnviroment";
import { Content, Contents } from "./Pages.style";
import TableHorarios from '../ui/components/tables/TableHorarios'
import useIndex from "../hooks/useindex.pages";
import { CircularProgress } from "@mui/material";

const Horarios = () => {
    const {Professores} = useIndex();
  
    return (
        
            <Contents>
            <SafeEnviroment title={'Horários'}/> 
                <Content>
                    {(Professores.length > 0 ? (
                        Professores.map((item, index) => {
                            return(
                                <TableHorarios 
                                    key={index}
                                    Professor={item.Professor}         
                                    Chapa={item.Chapa}
                                    SegundaM={item.SegundaM}
                                    SegundaN={item.SegundaN}
                                    TercaM={item.TercaM}
                                    TercaN={item.TercaN}
                                    QuartaM={item.QuartaM}
                                    QuartaN={item.QuartaN}
                                    QuintaM={item.QuintaM}
                                    QuintaN={item.QuintaN}
                                    SextaM={item.SextaM}
                                    SextaN={item.SextaN}
                                />
                            );
                        
                        })) : <h2> <br/> Carregando Conteudo, por favor guarde!. . . . . .  </h2>
                    
                    )}
                    
                </Content>
 
            </Contents>
    );
   
};

export default Horarios;