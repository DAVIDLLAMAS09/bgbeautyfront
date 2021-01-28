import React, { useEffect, useState } from 'react'
// import $ from "jquery";
import SkillComponent from './skillComponent';


export default function Skills() {
    
   const [productos,setProductos] = useState([]);
   const [cambio , setCambio] = useState(false);

   const __traerProductos = ()=>{
    fetch('https://nameless-mesa-22030.herokuapp.com/products', {
        method: 'GET', // or 'PUT'
            // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
          setProductos(response.productos)
      })
      .catch(error => console.error('Error:', error))
      
   }
    
    useEffect(()=>{
        __traerProductos()
    },[cambio])
       
        return (
            <section className="section bg-skills bg-light-about " id="productos" style={{paddingTop:50,paddingBottom:50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_heading mb-4">
                                <h3 className="text-dark mb-1 font-weight-light text-uppercase"><span>Productos</span></h3>
                                <div className="line position-relative"></div>
                            </div>
                        </div>
                    </div>                   
                    <div className="row">  
                            {
                                productos.length > 0 &&  <SkillComponent data={productos} />
                            }   
                           
                    </div>
                </div>
            </section>
        )
}
