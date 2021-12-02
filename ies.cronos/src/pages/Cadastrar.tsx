import React, { useState } from "react";
import "../ui/styles/pages/css/Home.css"
import SafeEnviroment from "../ui/components/feedback/SafeEnvironment/SafeEnviroment";
import { ContentForm, Input, TopForm, Select, Button, Bt, LinkBt, Erro, Sucess } from "./Cadastrar.style";
import CadastrarHorario from "./components/CadastrarHorario";

const LinkTo = () => {
    return(
        <div>
            <LinkBt to={'../components/cadastrarHorario'}>
                Cadastrar Horarios do Professor 
            </LinkBt><br/>            
        </div>

    )
}

const Cadastrar = () => {

    const [Professor, setProfessor] = useState({
        chapaProfessor: '',
        nomeProfessor: '',
        salarioProfessor: '',
        titulaçaoProfessor: '',

    });

    //---------- Status: Erro/Sucesso ----------------------------------------------//
    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
    });

    // -------------- Testa se os campos estao vazios ------------------------------//
    const testValue = (e: React.ChangeEvent<HTMLFormElement>) => {
        if(
            Professor.chapaProfessor == '' || 
            Professor.nomeProfessor == '' || 
            Professor.salarioProfessor == '' ||
            Professor.titulaçaoProfessor == ''){//----------------------------------//
                e.preventDefault();
                setStatus({
                    type: 'erro',
                    mensagem: 'Por favor preencha todos os campos marcados com *',
                })

        }else{
           cadProfessor(e);
        }
    }


    
    const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setProfessor({ 
        ...Professor, [e.target.name]: e.target.value
    });
    const valueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => setProfessor({
         ...Professor, [e.target.name]: e.target.value
    });

    const cadProfessor = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch("http://localhost/api/registrarProfessor.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({Professor})
            })
            .then((response) => response.json())

            //--------------- Tratativa de Erros -------------------------------------------------//
            .then((responseJson) => {
                if(responseJson.erro){
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem,
                    })
                }else{
                    setStatus({
                        type: 'sucess',
                        mensagem: responseJson.mensagem,
                    })
                }
            })
            .catch((err) => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Desculpe, cadastro não efetuado! Erro ao tentar se conectar ' + err,
                })
            })
       
        
    }    
    
    let cadHor = false

    return (
        
        <div className={'contents'}>
            <SafeEnviroment title={'Cadastro'}/> 
                <ContentForm onSubmit={testValue}>
                    <TopForm>Professor</TopForm>
                    
                    <div>    
                        <label>Chapa: * </label><br/>
                        <Input 
                            disabled={status.type == 'sucess' ? true : false}
                            type="text" name="chapaProfessor" 
                            placeholder="  Insira a Chapa" 
                            onChange={valueInput} 
                        /><br/><br/>
                        
                        <label>Titulacao: *</label><br/>
                        <Select name="titulaçaoProfessor" onChange={valueSelect} 
                                disabled={status.type == 'sucess' ? true : false}>
                            <option>                  </option>
                            <option value='Me.'>Mestre</option>
                            <option value='Dr.'>Doutor(a)</option>
                            <option value='Bel.'>Bacharel</option>
                        </Select><br/><br/>

                        <label>Nome: *</label><br/>
                        <Input 
                            disabled={status.type == 'sucess' ? true : false}
                            type="text" 
                            name="nomeProfessor" 
                            placeholder="  Insira o Nome" 
                            onChange={valueInput} 
                        /><br/><br/>

                        <label>Salario: *</label><br/>
                        <Input 
                            disabled={status.type == 'sucess' ? true : false}
                            type="text" 
                            name="salarioProfessor" 
                            placeholder="  Insira o Salário" 
                            onChange={valueInput} 
                        /><br/><br/>
                    </div>
                    {status.type === 'erro'? <Erro>{status.mensagem}</Erro> : '' }
                    {status.type === 'sucess'? <Sucess>{status.mensagem}</Sucess> : '' }
                    <Bt>
                        
                        {status.type === 'sucess'? cadHor = true : <Button type='submit' >CADASTRAR</Button> }
                        
                    </Bt><br/>
                    
                </ContentForm>
                {cadHor? <CadastrarHorario 
                            InputChapaValue={Professor.chapaProfessor}
                            InputNameValue={Professor.nomeProfessor}
                            Enviroment={true}
                        /> : ''
                }
        </div>
    ) 
}


export default Cadastrar;