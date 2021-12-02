import { styled } from '@mui/material/styles'

export const Tables = styled('div')`
    background-color: #dfdfdf;
    border: solid 1px #929292;
    margin: 5px 0 15px 0;
    border-radius: 4px;
    
`;

export const Table = styled('div')`
    background-color: #dfdfdf;
    margin: 5px 20px;
    padding: 5px 20px;
    justify-content: space-between; 
    border-radius: 4px;
    align-items: center;
    box-sizing: border-box;
    width: 1000px;
`;

export const TopTable = styled('div')`
    background-color: #b1b1b1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;  


`;

export const Td = styled('td')`
    min-width: 50px;
    width: 380px;
    padding-left: 10px;
    text-align: center;

`;
export const TdData = styled('td')`
    min-width: 30px;
    width: 200px;
    padding-left: 10px;

`;

export const Tr = styled('tr')`
    border-bottom: solid 2px #929292;
    justify-content: space-between;
    margin-bottom: 15px;
    height: 40px;


`;
