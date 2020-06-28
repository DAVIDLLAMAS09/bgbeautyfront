import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import Menu from '../navBar/menu';
import HeaderText from '../HeaderText/HeaderText'
import Acerca from '../Acerca/Acerca'
import Academica from '../Academica/Academica'
import Skills from '../Skills/Skills'
import LikeThis from '../LikeThis/LikeThis'
import Contacto from '../Contacto/Contacto'
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

 
    // _getdata=()=>{
    //     const apiUrl = 'http://api.lhsunglasses.com.mx/obtenerdatos.php';
    // fetch(apiUrl,{
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log('This is your data', data));
    // }
    

    // _login = () => {
    //     var form = $("#login");
    //     var responseLogin = document.getElementById('responseLogin');

    //     if(this.state.inputSuccess1 =="" && this.state.inputSuccess2==""){
    //         responseLogin.innerHTML="<p style='color:red; text-align:center;'>Los datos son requeridos.</p>";
    //     }

    //     if(form[0].checkValidity() === false){
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }else{
    //       event.preventDefault();
    //       fetch(localStorage.getItem('API')+'api/admin/login/',{
    //         method:'POST',
    //         body:JSON.stringify({
    //           'email': this.state.inputSuccess1,
    //           'password': this.state.inputSuccess2
    //         })
    //       })
    //       .then(function(response){
    //         return response.json();
    //       })
    //       .then(function(JSONresponse) {
    //         console.log(JSONresponse);
    //         if(JSONresponse.error){
    //             console.log(JSONresponse.error);
    //             responseLogin.innerHTML = "<p style='color:red; text-align:center;'>"+JSONresponse.error+"</p>";
    //         }else{
    //             responseLogin.innerHTML = "<p style='color:green; text-align:center;'>Iniciando sesión</p>";
    //             localStorage.setItem('token', JSONresponse.token);
    //             localStorage.setItem('nombre', JSONresponse.nombres);
    //             window.location.href="/noticias";
    //         }
    //       })
    //       .catch(function(error){
    //         console.log("error: "+error);
    //         responseLogin.innerHTML = "<p style='color:red; text-align:center;'>Por favor revisa tu conexión a internet e intenta de nuevo</p>";
    //       });
    //     }

    //     form.addClass('was-validated');
    // }

    // _recuperarEmail = () => {
    //     var form = $("#recuperar");
    //     var responseRecuperar = document.getElementById('responseRecuperar');
    //     var recupEmail = document.getElementById('recup_email');

    //     if (form[0].checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         responseRecuperar.innerHTML = "<p style='color:red; text-align:center;'>El correo electrónico no es válido, favor de verificarlo.</p>";
    //     }else{
    //       event.preventDefault();

    //       fetch(localStorage.getItem('API')+'api/admin/recovers?email='+this.state.inputSuccess3,{
    //         method:'GET'
    //       })
    //       .then(function(response) {
    //         return response.json();
    //       })
    //       .then(function(JSONresponse) {
    //         console.log(JSONresponse);
    //         if(JSONresponse.error){
    //             form.removeClass('was-validated');
    //             responseRecuperar.innerHTML = "<p style='color:red; text-align:center;'>"+JSONresponse.error+"</p>";
    //         }else{
    //             responseRecuperar.innerHTML = "<p style='color:green; text-align:center;'>"+JSONresponse.message+"</p>";
    //             document.getElementById('modal-footer-recuperar').innerHTML = '<button type="button" style="display:block; margin:0 auto; padding-top:8px;" class="btn btn-danger btn-radius-lg" data-dismiss="modal">Aceptar</button>';
    //         }
    //       })
    //       .catch(function(error) {
    //           console.log("error: "+error);
    //           responseRecuperar.innerHTML = "<p style='color:red; text-align:center;'>Ocurrió un error inesperado. Por favor intente de nuevo más tarde</p>";
    //           recupEmail.disabled = 'true';
              
    //       });
    //     }
    //     form.addClass('was-validated');
    // }

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
              <Contacto></Contacto>
              {/* footer */}
              <Footer></Footer>
           </div>
         
        )
    }
}

export default ContenedorInicio