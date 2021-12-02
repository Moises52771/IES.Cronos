import React from "react";
import "../ui/styles/pages/css/Home.css"
import SafeEnviroment from "../ui/components/feedback/SafeEnvironment/SafeEnviroment";
import { Content, TopTable, Interna, Footer, Icon } from "./Info.style";
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        
        <div className={'contents'}>
           <SafeEnviroment title={'Informacões'}/> 
            <Content>
                <TopTable>
                    <h2>Informacoes do Desenvolvedor</h2>
                </TopTable>
                <Interna>
                    <h3>NOME: </h3>
                    <h3>Moises Gomes da Silva</h3>
                    
                </Interna>
                <hr/>
                <Interna>
                    <h3>RGM: </h3>
                    <h3>20829841</h3>
                    
                </Interna>
                <hr/>
                <Interna>
                    <h3>CAMPI: </h3>
                    <h3>UNICSUL - SÃO MIGUEL PAULISTA</h3>
                    
                </Interna>
                <hr/>
                <Interna>
                    <h3>PROJETO: </h3>
                    <h3>IES.Cronos</h3>
                    
                </Interna>
                <hr/>
                <Interna>
                      
                </Interna>
                <Footer>
                    <Link to={'#'}> 
                        <Icon src={"/img/facebook.png"}/> 
                    </Link>
                    <Link to={'#'}>
                        <Icon src={"/img/instagram.png"}/>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/moisesgomes52771/'}>
                        <Icon src={"/img/linkedin.png"}/>
                    </Link>
                    
                    
                </Footer>
            </Content>
           
        </div>
    )
}

export default Home;