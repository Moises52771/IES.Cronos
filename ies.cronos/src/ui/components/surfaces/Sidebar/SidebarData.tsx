import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    
    {
        title:'HOME',
        path:"/",
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'CADASTRO',
        path:"./cadastrar",
        icon:<IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'HORÁRIOS',
        path:"./horarios",
        icon:<BsIcons.BsClock />,
        cName:'nav-text'
    },
    {
        title:'INFORMAÇÕES',
        path:"./info",
        icon:<FaIcons.FaInfo/>,
        cName:'nav-text'
    }

]

export default SidebarData;