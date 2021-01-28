import React, { Fragment, useEffect, useState } from 'react'
import Product from './Producto'
import Navbar from '../nav/Navbar'


export default function VerProductos() {
    
   const [productos,setProductos] = useState([]);

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

//    const __borrar = (id)=>{
//        console.log(id);
//         fetch('https://nameless-mesa-22030.herokuapp.com/products/'+id, {
//             method: 'DELETE', 
//             headers:{
//             'Content-Type': 'application/json'
//             }
//         }).then(res => res.json())
//         .then(response => {
//             setCambio(!cambio)
//         })
//         .catch(error => console.error('Error:', error))
//     }

    
    useEffect(()=>{
        __traerProductos()
    },[])
       
        return (
            <Fragment>
                <Navbar></Navbar>
                
                <div className="container">
                                      
                    <div className="row">  
                            {
                                productos.length > 0 &&  <Product data={productos} />
                            }   
                           
                    </div>
                </div>
            
            </Fragment>
           
        )
}
