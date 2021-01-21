import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import Menu from '../navBar/menu';
import HeaderText from '../HeaderText/HeaderText'
import Acerca from '../Acerca/Acerca'
import Academica from '../Academica/Academica'
import Skills from '../Skills/Skills'
import LikeThis from '../LikeThis/LikeThis'
// import Contacto from '../Contacto/Contacto'
import Footer from '../Footer/Footer'

export class ContenedorInicio extends Component {
   constructor(props){
       super(props);
           this.state={
                welcome:'bienvenidos a mi porfolio'
           }
       
   }
    componentDidMount() {
    }

    render() {
        return (
           <div>
                 <div>
                    <Helmet>
                        <title>David llamas - Desarrollador Web Frontend cdmx</title>
                        <meta name="description" content="Hola :) , Mi nombre es david llamas y soy desarrollador web frontend,vivo en la CDMX." />
                    </Helmet>
                </div>
               {/* Navbar */}
               <Menu></Menu>
             
             {/* first section */}
              <HeaderText></HeaderText>
              {/* second section */}
              <Acerca></Acerca>
              {/* estudios */}
              <Academica></Academica>
              {/* skills */}
              <Skills></Skills>
              {/* LikeThis */}
              <LikeThis></LikeThis>
              {/* contact */}
              {/* <Contacto></Contacto> */}
              {/* footer */}
              <Footer></Footer>
           </div>
         
        )
    }
}

export default ContenedorInicio