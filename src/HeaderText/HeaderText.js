import React, { Component } from 'react'
import icoPrincipal from '../img/hero-7.png'
import Logo from '../img/logo.jpg'
export class HeaderText extends Component {
   constructor(props){
       super(props);
           this.state={
                welcome:'bienvenidos a mi porfolio'
           }
       
   }
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        return (
            <section className="hero-khulna welcome_area" id="home">
                <div className="home_barisal" style={{backgroundImage:`url(${icoPrincipal})`}}></div>
                <div className="container h-100">
                    <div className="row h-100 justify-content-between align-items-center">
                        <div className="col-12 col-md-6">
                        
                            <div className="welcome_text_area">
                                <h2 className="wow fadeInUp"  style={{visibility:'visible'}}>BG Beauty <br></br>Productos 100% efectivos y amigables con el medio ambiente.</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                        
                            <div className="welcome_area_thumb text-center">
                                <img  src={Logo} alt="hola" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
         
        )
    }
}

export default HeaderText

