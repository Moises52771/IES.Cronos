import React, { useState } from "react";
import "../../ui/styles/pages/css/Home.css"
import SafeEnviroment from "../../ui/components/feedback/SafeEnvironment/SafeEnviroment";
import { ContentForm, Input, TopForm, Button, Bt, InputDay, Div, Erro, Sucess } from "./CadastrarHorarios.style";


interface propsHorarios{
    InputChapaValue: string;
    InputNameValue: string;
    Enviroment: boolean;
    segundaM?: string, 
    segundaN?: string,
    terçaM?: string,
    terçaN?: string,
    quartaM?: string,
    quartaN?: string,
    quintaM?: string,
    quintaN?: string,
    sextaM?: string,
    sextaN?: string

}

const CadastrarHorario: React.FC<propsHorarios> = (props, e: React.ChangeEvent<HTMLFormElement>) => {


    const [Horarios, setHorarios] = useState({
        chapaProfessor: props.InputChapaValue,
        nomeProfessor: props.InputNameValue,
        segundaM: '', 
        segundaN: '',
        terçaM: '',
        terçaN: '',
        quartaM: '',
        quartaN: '',
        quintaM: '',
        quintaN: '',
        sextaM: '',
        sextaN: ''

    });

    //---------- Status: Erro/Sucesso ----------------------------------------------//
    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
    });
    
    //-------------- Pega o valor dos campos ---------------------------------------//
    const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setHorarios({ 
        ...Horarios, [e.target.name]: e.target.value
    });

    const cadHorarios = async (e: React.ChangeEvent<HTMLFormElement>) => {
        props.Enviroment ? e.preventDefault() : console.log('Render');

        await fetch("http://localhost/api/cadastrarHorariosProf.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({Horarios})
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

    
    return (
        
        <div className={'contents'}>
            {props.Enviroment ? <SafeEnviroment title={'Cadastro'}/> : '' }
                <ContentForm onSubmit={cadHorarios}>
                    <TopForm>Horários do Professor</TopForm>
                    <div>    
                        <label>Chapa: * </label><br/>
                        <Input type="text" name="chapaProfessor" value={props.InputChapaValue} disabled={true}/><br/><br/>
                        
                        <label>Nome: *</label><br/>
                        <Input type="text" name="nomeProfessor" value={props.InputNameValue} disabled={true}/><br/><br/>

                        <Div>
                            <div>
                               <label>Segunda Manhã: </label><br/>
                                <InputDay type='text' name='segundaM' onChange={valueInput} /><br/><br/> 
                            </div>
                            <div>
                                <label>Segunda Noite: </label><br/>
                                <InputDay type='text' name='segundaN' onChange={valueInput} /><br/><br/>
                            </div>
                        </Div>
                        <Div>
                            <div>
                               <label>Terça Manhã: </label><br/>
                                <InputDay type='text' name='terçaM' onChange={valueInput} /><br/><br/> 
                            </div>
                            <div>
                                <label>Terça Noite: </label><br/>
                                <InputDay type='text' name='terçaN' onChange={valueInput} /><br/><br/>
                            </div>
                        </Div>
                        <Div>
                            <div>
                               <label>Quarta Manhã: </label><br/>
                                <InputDay type='text' name='quartaM' onChange={valueInput} /><br/><br/> 
                            </div>
                            <div>
                                <label>Quarta Noite: </label><br/>
                                <InputDay type='text' name='quartaN' onChange={valueInput} /><br/><br/>
                            </div>
                        </Div>
                        <Div>
                            <div>
                               <label>Quinta Manhã: </label><br/>
                                <InputDay type='text' name='quintaM' onChange={valueInput} /><br/><br/> 
                            </div>
                            <div>
                                <label>Quinta Noite: </label><br/>
                                <InputDay type='text' name='quintaN' onChange={valueInput} /><br/><br/>
                            </div>
                        </Div>
                        <Div>
                            <div>
                               <label>Sexta Manhã: </label><br/>
                                <InputDay type='text' name='sextaM' onChange={valueInput} /><br/><br/> 
                            </div>
                            <div>
                                <label>Sexta Noite: </label><br/>
                                <InputDay type='text' name='sextaN' onChange={valueInput} /><br/><br/>
                            </div>

                            
                        </Div>
                    </div>
                    {status.type === 'erro'? <Erro>{status.mensagem}</Erro> : '' }
                    {status.type === 'sucess'? <Sucess>{status.mensagem}</Sucess> : '' }
                    <Bt>
                        <Button type='submit'>{status.type == 'sucess' ? 'EDITAR' : 'CADASTRAR'}</Button><br/>
                    </Bt>
                    
                </ContentForm>
        </div>
    )
}



export default CadastrarHorario;