import React, { Component } from 'react'
import $ from "jquery";
import { Link } from 'react-router-dom';
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
                            <p style={{marginBottom:0,color:'#FFf',fontWeight:'bold',fontSize:24}}>BG BEAUTY</p>
                        </Link>
                        <div className="sss" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >
                            <img src={MenuIco} alt="hola" style={{width:30}} />
                        </div>


                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ScrollspyNav
                                scrollTargetIds={["home", "productos"]}
                                activeNavClass="active"
                                scrollDuration="800"
                                headerBackground="true"
                                className="ml-auto">
                                <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                    <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
                                    <li className="nav-item"><a href="#productos" className="nav-link">Productos</a></li>
                                    {/* <li className="nav-item"><Link to="/portfolio" className="nav-link">Portafolio</Link></li> */}
                                   
                                </ul>
                            </ScrollspyNav>
                        </div>
                    </div>
                </nav>
          
        );
    }

}

export default Menu;