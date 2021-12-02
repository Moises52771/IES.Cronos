import React, {Component} from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./ui/themes/themes";
import Header from "./ui/components/surfaces/Header/Header";
import { AppContainer } from "./ui/styles/pages/App.style";
import "./ui/styles/pages/css/App.css"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Horarios from './pages/Horarios';
import Info from './pages/Info';


class App extends Component {

    render(){
      return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>

            <Header />
            <AppContainer className={'pageContent'}>
              <Routes>
                <Route path="/" element = { <Home /> } />
                <Route path="/cadastrar" element = { <Cadastrar /> } />
                <Route path="/horarios" element = { <Horarios /> } />
                <Route path="/info" element = { <Info /> } />
              </Routes>
              
              
              
            </AppContainer>

          </BrowserRouter>
          
          
        </ThemeProvider> 
      );
       
    };
    
};

export default App;
