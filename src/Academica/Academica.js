import React, { Component } from 'react'
import upiicsa from '../img/upiicsa.png'
// import { Modal, Button } from 'react-bootstrap';

// import { Helmet } from "react-helmet";



export class Academica extends Component {
   constructor(props){
       super(props);
           this.state={
                welcome:'paginaas de acerca'
           }
       
   }
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        return (
            <section className="section bg-about bg-light-about " id="about" style={{paddingTop:50,paddingBottom:50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-md-8">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Formación académica</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="align-items-center mt-1 row">
                    <div className="col-md-6 aboutContentFormacion">
                            <div className="fondoAbout"></div>
                            <div className="about-img light-img position-relative p-4">
                                <img src={upiicsa} alt="" className="img-fluid mx-auto d-block imgAboutAcademica" />
                            </div>
                       </div>
                        <div className="col-md-6">
                            <div className="about-desc">
                                <h3 className="text-dark mb-3 font-weight-light">UPIICSA - INGENIERÍA EN INFORMÁTICA </h3>
                                <p className=" f-15">Estudié la carrera de ingeniería en informática en UPIICSA (Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas) del instituto politecnico nacional (IPN)</p>
                                <p className="f-15">Julio 2014 – Diciembre 2019 </p>
                                <p className="f-15">Promedio: 7.99 </p>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </section>
        )
    }
}

export default Academica