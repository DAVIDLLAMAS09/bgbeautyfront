import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import  imgDavid from '../img/davidbg.jpg';

export class LikeThis extends Component {
   constructor(props){
       super(props);
           this.state={

               
           }
       
   }

    render() {
        return (
            <React.Fragment>
            {/* Message Start */}
            <section className="d-table w-100" style={{ background: `url(${imgDavid}) center center`,padding:'170px 0',marginBottom:50,position:"relative" }}>
                        <div className="overlay-likethis"></div>
                        <div className="container">
                            <div className="row position-relative align-items-center pt-4">
                                <div className="col-lg-7 offset-md-5" lg={{size:7, offset:5}}>
                                    <div className="title-heading studio-home bg-likeThis shadow mt-5">
                                        <h1 className="heading mb-3">OK, CREEMOS ALGO  <span className="text-primarylikeThis">GENIAL</span></h1>
                                        <p className="para-desc text-muted">Si le gusta mi trabajo y tiene algún proyecto genial para trabajar, 
                                            solo envíeme un mensaje directo o contácteme a través de los sitios sociales 
                                            que se enumeran a continuación.
                                        </p>
                                        <div className="mt-4">
                                            <Link to="/whatsapp" className="btn btn-primary mt-2 mr-2" style={{padding:'8px 20px'}}><i className="mdi mdi-phone"></i>Whatsapp</Link>
                                            <Link to="/facebook" className="btn btn-outline-primary mt-2 ml-1" style={{padding:'8px 20px',color:'#fff'}}><i className="mdi mdi-book-outline"></i>Facebook</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
        </React.Fragment>
        )
    }
}

export default LikeThis