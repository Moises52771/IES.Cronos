import React from "react";
import SafeEnviroment from "../ui/components/feedback/SafeEnvironment/SafeEnviroment";
import { Contents, Content, Fundo, Texto } from './Home.style';

const Home = () => {
    return (
        
        <Contents>
           <SafeEnviroment title={'Home'}/> 
           <Content>
                <Fundo src="/img/fundo.jpg">
                </Fundo> 
                    <Texto>
                        <h2>Bem Vindo! Ao IES.Cronos </h2>
                        <h3>Somos o melhor software de gestão de horários para
                             escolas e universidades!<br/><br/>Esperamos que tenha uma boa experiencia conosco!<br/></h3>
                        <h3></h3>
                    </Texto>
           </Content>

        </Contents>
    )
}

export default Home;