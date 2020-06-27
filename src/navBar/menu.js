import React, { Component } from 'react'
import $ from "jquery";
import { Link } from 'react-router-dom';
// import principal from '../img/zooki.png'
import principal from '../img/davidTexto.png'
import MenuIco from '../img/Menu.png'
import ScrollspyNav from "react-scrollspy-nav";


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});


// SmoothLink
$('.nav-item a, .mouse-down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});




export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '' };
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    

    render() {

        return (
           
                <nav id="main_navbar" className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark navbar-light">
                    <div className="container">
                        <Link className="navbar-brand logo" to="/">
                            <img src={principal} alt="" height="20" />
                        </Link>
                        <div className="sss" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >
                            <img src={MenuIco} alt="hola" style={{width:30}} />
                        </div>


                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ScrollspyNav
                                scrollTargetIds={["home", "about", "Portfolio", "contact"]}
                                activeNavClass="active"
                                scrollDuration="800"
                                headerBackground="true"
                                className="ml-auto">
                                <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                    <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
                                    <li className="nav-item"><a href="#about" className="nav-link">Acerca</a></li>
                                    <li className="nav-item"><a href="#Portfolio" className="nav-link">Portafolio</a></li>
                                    <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a> </li>
                                </ul>
                            </ScrollspyNav>
                        </div>
                    </div>
                </nav>
          
        );
    }

}

export default Menu;