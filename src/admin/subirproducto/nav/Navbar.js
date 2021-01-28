import React, { useState } from 'react';
import './navStyle.css'
import {AuthMycontext} from '../../../context/AuthContext'
import {useHistory,Link} from 'react-router-dom'



const Navbar = () => {
    const {logout} = AuthMycontext()
    const history = useHistory()

    const salir = ()=>{
        logout()
        .then(user=>{
            history.push("/admin")
        })
    }


    return (
        
            <nav className="navbar  navbar-custom-global">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" style={{float:'right'}} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/admin/uploadproduct">
                             <a class="navbar-brand">BD BEAUTY - ADMIN</a>
                        </Link>
                        
                        
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/admin/viewproduct">Ver Productos</Link></li> 
                        <li><Link to="/admin/uploadproduct">Subir Producto</Link></li> 
                        <li className="visible-xs" style={{paddingTop:'20px'}}>
                        <div onClick={salir} style={{border: '2px solid #8C00FF', padding: '6px 14px', color: '#ffffff', display:'inline-block', margin: '0 auto',cursor:'pointer',background: '#000'}}>
                            salir 
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      
    );
};

export default Navbar;