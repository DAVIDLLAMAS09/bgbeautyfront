// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'
// import image 404
import img404 from '../img/404.png';

class PageError extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <React.Fragment>
                 <Helmet>
                        <title>404 page not found</title>
                        <meta name="description" content="página no encontrada :( ..." />
                 </Helmet>
                <section className="bg-home d-flex align-items-center" style={{height:'100vh'}}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div lg={8} md={12} className="text-center col-md-12 col-lg-8">
                                        <img src={img404} className="img-fluid" alt="" />
                                        <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                                        <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div md="12" className="text-center col-md-12">
                                        <Link to="/" className="btn btn-outline-primary mt-4">Go Back</Link>
                                        <Link to="/" className="btn btn-primary mt-4 ml-2">Go To Home</Link>
                                    </div>
                                </div>
                            </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageError;
