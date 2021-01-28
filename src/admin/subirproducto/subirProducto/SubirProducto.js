import React, { useState } from 'react';
import Navbar from '../nav/Navbar'

const SubirProducto =()=> {
   
    
    const data=new FormData();
    
    const [datos,setDatos] = useState({
        name:'',
        description:'',
        cost:0,
    })
    const [image,setImage] = useState('')
    const [show,setShow] = useState(false)
    const [error,setError] = useState('')
    const [disabl,setdisabl] = useState(true)

   const __handleChange=(e)=>{
            setDatos({
                ...datos,
                [e.target.name]:e.target.value
            })
            if(datos.name !==  "" && datos.description !==  "" && datos.cost !== 0 && image !== ""){
                setdisabl(false)
            }
            
        
    }

   const __handleChangeImage=(e)=>{
            
            setImage(document.querySelector('#image').files[0])
            if(datos.name !==  "" && datos.description !==  "" && datos.cost !== 0){
                setdisabl(false)
            }
    }

   const __SendProducts = (e)=>{
        e.preventDefault()

        data.append('name',datos.name)
        data.append('description',datos.description)
        data.append('cost',Number(datos.cost))
        data.append('image',image)

        fetch('https://nameless-mesa-22030.herokuapp.com/products',{
            method: 'POST',
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: data
        })
        .then(response=> response.json())
        .then(responseJSON =>{
            console.log(responseJSON)
            if(responseJSON.success){
                setShow(true)
                setError('Producto agregado exitosamente')
                setDatos({
                    name:'',
                    description:'',
                    cost:0,
                    image:''
                })
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

                            <h2 className="text-center">Subir nuevo producto </h2>
                            <form encType="multipart/form-data" type="POST">
                                <div class="form-group">
                                    <label htmlFor="name">*nombre</label>
                                    <input type="text" class="form-control" id="name" name="name" onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="description">*descripcción</label>
                                    <input type="text" class="form-control" id="description" name="description" onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="cost">*Precio</label>
                                    <input type="number" class="form-control" id="cost" name="cost" onChange={__handleChange} required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="image">*imagen</label>
                                    <input type="file" class="form-control" id="image" name="image" onChange={__handleChangeImage} required/>
                                </div>
                                <button type="submit" onClick={__SendProducts} class="btn btn-success"  disabled={disabl}>Submit</button>
                            </form>
                       </div>
                   </div>
               </div>
                           
            </React.Fragment>
        );
    
}

export default SubirProducto;

