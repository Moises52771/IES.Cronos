import React from "react";
import { HeaderAppBar, HeaderLogo, } from "./Header.style";
import { Toolbar} from "@mui/material";
import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarData  from '../Sidebar/SidebarData';
import './NavbarData.css';

const Header = () => {
  
  
      const [sidebar, setSidebar] = useState(false);
  
      const showSidebar = () => setSidebar(!sidebar);
      const showOffSidebar = () => setSidebar(sidebar);
      
      function show(){
        showOffSidebar()
        let x = 'show'
      }
   
    /* --------------------------------------------------------------- */
    /*------------ Define a pagina atual no menu lateral --------------*/
   
    $ (document).ready (function () {
      $('.link').click(function () {
        if($(this).is('.link')){
          $('.link').removeClass('link active').addClass('link')
          $(this).addClass('link active')
        }
      })
    });
    /* ---------------------------------------------------------------- */   
    /* --------- Manipula o menu lateral de acordo com click ---------- */ 
    
    /*var divName = $('.nav-menu-items').get(0);
    $(document).on("click", function(e) {
      var outside = $.contains(divName, e.target);
      if (outside) sidebar ? showSidebar : undefined 
    });
    */

    var mouse_is_inside = false;
    var fa_bars_inside = false;

    $(document).ready(function(){
      $('.nav-menu-items').hover(function(){ 
        mouse_is_inside=true;
        let x = 'true'
      }, 
      function(){ 
        mouse_is_inside=false; 
        let x = 'false'
      });
      $('.navbar').hover(function(){ 
        fa_bars_inside=true; 
        let x = 'true'
      }, 
      function(){ 
        fa_bars_inside=false; 
        let x = 'false'
      });

      $("body").mouseup(function(){ 
        if(!mouse_is_inside && !sidebar && !fa_bars_inside) {
          show();
        }
      });
    });
    
    
    /* ---------------------------------------------------------------- */   

    return (
      <HeaderAppBar position={"sticky"}>
            <Toolbar>
              
              <IconContext.Provider value={{ color: '#494949' }}>
                <div className={'navbar'}>
                  <Link to={'#'} className={'icon-bars'}>
                    <FaIcons.FaBars id={"fa-Bars"} onClick={showSidebar} />
                  </Link>
                </div>
                <HeaderLogo className={'logo-bars1'} src={"/img/logo/logo.png"}/>
              </IconContext.Provider>  
              <IconContext.Provider value={{ color: '#c8d7d8' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className={'nav-menu-items'} onClick={sidebar ? showSidebar : undefined }>
            
                    {SidebarData.map((item, index) => {
                      return (
                        <li  key={index} className={item.cName}>
                          <Link className={'link'} id={""+index} to={item.path} >
                            
                              <span className={'link-title'}> {item.title} </span> 
                              <div className={'link-icon'}>
                                {item.icon}
                              </div>
                      
                          </Link>
                        </li>
                
                      );
                    })}

                  </ul>
                </nav>
              </IconContext.Provider>
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;

  




