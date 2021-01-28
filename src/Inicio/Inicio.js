import React from 'react'
import {Helmet} from 'react-helmet';
import Menu from '../navBar/menu';
import HeaderText from '../HeaderText/HeaderText'
import Skills from '../Skills/Skills'
import LikeThis from '../LikeThis/LikeThis'
// import Contacto from '../Contacto/Contacto'


export default function ContenedorInicio (){
  
        return (
           <div>
                 <div>
                    <Helmet>
                        <title>BG Beauty CDMX</title>
                        <meta name="description" content="BG Beauty CDMX" />
                    </Helmet>
                </div>
               {/* Navbar */}
               <Menu></Menu>
             {/* first section */}
              <HeaderText></HeaderText>
            
              <Skills></Skills>
              {/* LikeThis */}
              <LikeThis></LikeThis>
             
           </div>
         
        )
    
}
