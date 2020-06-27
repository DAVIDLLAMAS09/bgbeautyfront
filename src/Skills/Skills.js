import React, { Component } from 'react'
// import $ from "jquery";
import SkillComponent from './skillComponent';
import { Link } from 'react-router-dom';

// import images
import  jqueryLogo from '../img/jquery.png';
import angularLogo from '../img/angular.png';
import gitLogo from '../img/git.png';
import bootstrapLogo from '../img/bootstrap.png';
import css3Logo from '../img/css3.png';
import html5Logo from '../img/html5.png';
import jsLogo from '../img/js.png';
import mysqlLogo from '../img/mysql.png';
import phpLogo from '../img/php.png';
import reactLogo from '../img/react.png';
import seoLogo from '../img/seo.jpg';


export class Skills extends Component {
   constructor(props){
       super(props);
           this.state={
            // components
            keyfeatures : [
              { image : jqueryLogo, title : "jQuery" },
              { image : angularLogo, title : "Angular" },
              { image : gitLogo, title : "Git" },
              { image : bootstrapLogo, title : "Bootstrap" },
              { image : css3Logo, title : "Css3" },
              { image : html5Logo, title : "Html5" },
              { image : jsLogo, title : "Javascript" },
              { image : mysqlLogo, title : "Mysql" },
              { image : phpLogo, title : "php" },
              { image : reactLogo, title : "React" },
              { image : seoLogo, title : "Posicionamiento web seo" },
          ],
          certificates : [
            { imageUrl : 'http://landrick.react-dark.themesbrand.com/static/media/1.e2947588.jpg', title : "FUNDAMENTOS DE DISEÑO WEB", field : "certificación ofrecida por telmexHub con una duración de 35 hrs", author : "TelmexHub", date : "9 Abril, 2014" },
            { imageUrl : 'http://landrick.react-dark.themesbrand.com/static/media/1.e2947588.jpg', title : "CSS PARA MOVILES", field : "certificación ofrecida por telmexHub con una duración de 40 hrs", author : "TelmexHub", date : "24 Noviembre, 2017" }
        ]
           }
       
   }

    
    componentDidMount() {
        // $("#exampleModal").modal('show');
    }

    render() {
        
        return (
            <section className="section bg-skills bg-light-about " id="skills" style={{paddingTop:50,paddingBottom:50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Skills</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>                   
                    <div className="row">
                         
                            <SkillComponent 
                              data={this.state.keyfeatures}
                            ></SkillComponent>
                        
                       
                    </div>

                    <div className=" mt-5 row">
                        <div className="col-lg-6">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Certificaciones</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:40}}>
                       
                            {
                                this.state.certificates.map((work, key) =>
                                    <div lg="6" md="6" key={key} className="mt-4 pt-2 col-md-6 col-lg-6">
                                        <div className="work-container position-relative rounded">
                                                <img src={work.imageUrl} className="img-fluid rounded"  alt="certificates" />
                                                <div className="overlay-work"></div>
                                                <div className="content">
                                                    <Link to="page-work-detail" className="title text-white d-block font-weight-bold">{work.title}</Link>
                                                    <small className="text-light">{work.field}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                                </div>
                                        </div>
                                    </div>
                                )
                            } 
                    </div>
                   
                   
                </div>
            </section>
        )
    }
}

export default Skills