import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom';

export const ContentForm = styled('form')`
    margin: 100px 100px;
    padding: 20px 50px 50px 50px;
    border: solid 1px #afafaf;
    border-radius: 5px;
    background-color: #ececec;
`;

export const Input = styled('input')`
    margin: 5px 0 10px 0;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: solid 2px #b5cab0;
`;

export const InputDay = styled('input')`
    margin: 5px 15px 10px 0;
    height: 30px;
    width: 480px;
    border-radius: 5px;
    border: solid 2px #b5cab0;
    justify-content: space-between;
    display: flex;
`;

export const Select = styled('select')`
    margin: 5px 0 10px 0;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: solid 2px #b5cab0;
`;

export const TopForm = styled('div')` 
    padding-right: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 20px;

`;

export const Button = styled('button')`
    margin: 10px 5px 40px 20px;
    float: left;
    background-color: #8497b9;
    font-weight: bold;
    border-color: #8497b9a4;
    border-radius: 5px;
    color: #333;
    width: 130px;
    :hover{
        background-color: #8497b9c8;
        border-color: #8497b9f8;
    }

`;

export const Bt = styled('div')`
    margin: 20px 5px 10px 70px;
    
`;

export const LinkBt = styled(Link)`
    color: #333;
`;

export const Div = styled('div')`
    display: flex;
`;

export const Erro = styled('p')`
    background-color: #b98484c6;
    color: #613535;
    padding: 7px;
    border-radius: 5px;
    border: solid 2px #b98484 ;
    text-align: center;

`;
export const Sucess = styled('p')`
    background-color: #90b984c7;
    color: #405c38;
    padding: 7px;
    border-radius: 5px;
    border: solid 2px #90b984;
    text-align: center;
`;

