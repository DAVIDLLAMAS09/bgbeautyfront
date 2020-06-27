import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
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
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Descargar CV</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{background:'#000',borderTopLeftRadius:7}}>
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
                                                    <li className="nav-item"><a href="#about" className="nav-link">Acerca</a></li>
                                                    <li className="nav-item"><a href="#Portfolio" className="nav-link">Portafolio</a></li>
                                                    <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:admin@example.com">admin@example.com</a></li>
                                                    <li><a href="mailto:hr@example.com">hr@example.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p> Made with <span style={{color:'red'}}>❤</span> by David Llamas.</p>
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