import React, { Component } from "react";

import CV from '../CV_david_llamas_ortega.docx'

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area" style={{overflow:'hidden'}} id="contact">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Quiero hacer cosas que marquen la diferencia.</span>
                                        <a className="rn-button-style--2" href={CV}>
                                            <span>Descargar CV</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{background:'#000',borderTopLeftRadius:7}}>
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-5 col-sm-5 col-12">
                                            <div className="footer-link">
                                                <h4>Navegación</h4>
                                                <ul className="ft-link">
                                                    <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
                                                    <li className="nav-item"><a href="#about" className="nav-link">Acerca</a></li>
                                                    <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Medios de contacto</h4>
                                                <ul className="ft-link">
                                                    <li className="mb-2"><a href="mailto:davidllamasortega09@gmail.com">davidllamasortega09@gmail.com</a></li>
                                                    <li><a href="mailto:dllamas@paginasweb-cdmx.com.mx">dllamas@paginasweb-cdmx.com.mx</a></li>
                                                    <li><a href="tel:5611377051">56 - 11 - 37 - 70 - 51</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p> Code with <span style={{color:'red'}}>❤</span> by David Llamas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;