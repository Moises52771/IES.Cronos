import React from "react";
import { SafeEnviromentContainer, Title } from "./SafeEnviroment.style";
import { Container } from "@mui/material";

interface SafeEnviromentProps{
  title: string;
  subtitle?: string | JSX.Element;
}

const SafeEnviroment: React.FC<SafeEnviromentProps> = (props) => {
  return (
    <SafeEnviromentContainer className={'enviroment'}>
      
      <Title>{props.title}</Title>

      
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
