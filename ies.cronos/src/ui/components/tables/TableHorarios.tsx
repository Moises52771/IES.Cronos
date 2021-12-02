import React, { useState } from "react";
import{ Table, Tables, TopTable, Td, Tr, TdData } from './TableHorarios.styled';
import CadastrarHorario from "../../../pages/components/CadastrarHorario";
import './Table.css';

interface TableProps{
    Professor: String;          
    Chapa: String;
    SegundaM: String;
    SegundaN: String;
    TercaM: String;
    TercaN: String;
    QuartaM: String;
    QuartaN: String;
    QuintaM: String;
    QuintaN: String;
    SextaM: String;
    SextaN: String; 
}

const TableHorarios: React.FC<TableProps> = (props, e: React.ChangeEvent<HTMLFormElement>) => {
    
    const [status, setStatus] = useState({
        type: ''
    });
    
    const editClick = () => {
        if(status.type == 'eidt'){
            setStatus({
                type: ''
            })
        }else{
            setStatus({
                type: 'edit'
            })
            
        }
        
    }

    
    //---------- Status: Erro/Sucesso ----------------------------------------------//
    const [statusRemove, setStatusRemove] = useState({
        type: '',
        mensagem: '',
    });

    //------------------- Botão remover ----------------------------------------------------------//

    const removeProfessor = async () => {

        if(window.confirm("Tem certeza que deseja remover esse registro?")){// -------------- Pede a confirmação  ---------
            await fetch("http://localhost/api/eliminarUmProfessor.php?chapa=" + props.Chapa, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => response.json())

            //--------------- Tratativa de Erros -------------------------------------------------//
            .then((responseJson) => {
                if(responseJson.erro){
                    window.alert('Erro! Registro não deletado!')

                }else{
                    window.location.reload();
                    window.alert('Registro deletado com sucesso!')
                   
                }
            })
            .catch((err) => {
                setStatusRemove({
                    type: 'erro',
                    mensagem: 'Desculpe, cadastro não efetuado! Erro ao tentar se conectar ' + err
                })
                window.alert(statusRemove.mensagem)
            })
        }

        

       
        
    } 



    return(
        <Tables>
            <TopTable>
                <h2>{props.Professor}</h2>
                <h3>Chapa: {props.Chapa}</h3>
            </TopTable>
            <div className={'content'}>
            <Table>
                <thead>
                    <Tr>
                        <TdData>Dia</TdData>
                        <Td>Manhã</Td>
                        <Td>Noite</Td>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <TdData>Segunda</TdData>
                        <Td>{props.SegundaM}</Td>
                        <Td>{props.SegundaN}</Td>
                    </Tr>
                    <Tr>
                        <TdData>Terça</TdData>
                        <Td>{props.TercaM}</Td>
                        <Td>{props.TercaN}</Td>
                    </Tr>
                    <Tr>
                        <TdData>Quarta</TdData>
                        <Td>{props.QuartaM}</Td>
                        <Td>{props.QuartaN}</Td>
                    </Tr>
                    <Tr>
                        <TdData>Quinta</TdData>
                        <Td>{props.QuintaM}</Td>
                        <Td>{props.QuintaN}</Td>
                    </Tr>
                    <Tr>
                        <TdData>Sexta</TdData>
                        <Td>{props.SextaM}</Td>
                        <Td>{props.SextaN}</Td>
                    </Tr>

                </tbody>
                

            </Table>
            <div className={'bt'}>
                    <button 
                    className={'btEdit'} 
                    onClick={editClick}>EDITAR</button>

                <button className={'btRemove'} onClick={removeProfessor}>REMOVER</button>                    
            </div>
            </div>
            {status.type == 'edit'? <CadastrarHorario 
            InputChapaValue={props.Chapa.toString()} 
            InputNameValue={props.Professor.toString()} 
            Enviroment={false}
            segundaM={props.SegundaM.toString()} 
            segundaN={props.SegundaN.toString()}
            terçaM={props.TercaM.toString()}
            terçaN={props.TercaN.toString()}
            quartaM={props.QuartaM.toString()}
            quartaN={props.QuartaN.toString()}
            quintaM={props.QuintaM.toString()}
            quintaN={props.QuintaN.toString()}
            sextaM={props.SextaM.toString()}
            sextaN={props.SextaN.toString()}
            /> : ''}
        </Tables>

    );
};

export default TableHorarios;