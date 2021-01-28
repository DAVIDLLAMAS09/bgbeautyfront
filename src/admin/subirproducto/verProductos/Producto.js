import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 const Producto =({data,borrar})=> {
  
        return (
            <React.Fragment>
                {
                    data.map((skill, key) =>
                    <div className="col-md-4 mt-4 pt-2 skillfeature" key={key}  name="skillfeature">
                                <div className="key-feature col-md-12 p-0 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-0 imagesSkills">
                                        <img alt={skill.name} src={skill.image} className=" text-primary"/>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-2 text-center" style={{fontWeight:'bold'}}>{skill.name}</h4>
                                        <p className="text-center">{skill.description}</p>
                                        <h4 className="text-right pr-2" style={{fontWeight:'bold'}}>$MXN {skill.cost}</h4>
                                    </div>
                                        <Link  
                                        to={{
                                            pathname:"/admin/editproduct",
                                            state:{
                                                producto:{...skill}
                                                
                                            }
                                        }}>
                                            <div className="btn btn-success" style={{width:'100%',marginBottom:10}}>Editar Producto</div>
                                            
                                        </Link>
                                       <div className="borrar" onClick={()=>borrar(skill._id)}>borrar Producto</div>
                                    
                                   
                                </div>
                               
                                
                    </div>
                    )
                }
                            
            </React.Fragment>
        );
    
}

export default Producto;
