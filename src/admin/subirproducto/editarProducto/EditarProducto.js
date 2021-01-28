import React, { useState } from 'react';
import Navbar from '../nav/Navbar'
import {useHistory}  from 'react-router-dom'


const EditarProducto =({location})=> {
   const history = useHistory()
 
    const [datos,setDatos] = useState({
        name:location.state.producto.name,
        description:location.state.producto.description,
        cost:location.state.producto.cost,
        available:location.state.producto.available ? "1" : "0",
        id:location.state.producto._id
    })

    const [show,setShow] = useState(false)
    const [error,setError] = useState('')
    const [disabl,setdisabl] = useState(true)


   const __handleChange=(e)=>{
            setDatos({
                ...datos,
                [e.target.name]:e.target.value
            })
            if(datos.name !==  "" && datos.description !==  "" && datos.cost !== 0 && datos.available !== ""){
                setdisabl(false)
            }
            
        
    }


   const __EditProduct = (e)=>{
        e.preventDefault()
        
        fetch('https://nameless-mesa-22030.herokuapp.com/products/'+datos.id,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:datos.name,
                description:datos.description,
                available:datos.available === "1" ? true : false ,
                cost:Number(datos.cost)
            })
        })
        .then(response=> response.json())
        .then(responseJSON =>{
            console.log(responseJSON)
            if(responseJSON.success){
                setShow(true)
                setError('Producto editado exitosamente')
                history.push("/admin/viewproduct")
            }
        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
    }   

        return (
            <React.Fragment>
                 <Navbar></Navbar>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                            {show &&
                                <div class="alert alert-success" role="alert">
                                    {error}
                                </div>
                            }

                            <h2 className="text-center">Editar producto </h2>
                            <form encType="multipart/form-data" type="POST">
                                <div class="form-group">
                                    <label htmlFor="name">*nombre</label>
                                    <input type="text" class="form-control" id="name" name="name" value={datos.name} onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="description">*descripcción</label>
                                    <input type="text" class="form-control" id="description" value={datos.description} name="description" onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="cost">*Precio</label>
                                    <input type="number" class="form-control" id="cost" value={datos.cost} name="cost" onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                <label htmlFor="cost">*¿Esta Disponible?</label>
                                <select  onChange={__handleChange} name="available" value={datos.available} >
                                    <option value="0">Agotado</option>
                                    <option value="1">Disponible</option>
                                </select>
                                </div>
                                <button type="submit" onClick={__EditProduct} class="btn btn-success"  disabled={disabl}>Submit</button>
                            </form>
                       </div>
                   </div>
               </div>
                           
            </React.Fragment>
        );
    
}

export default EditarProducto;

