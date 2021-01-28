import React, { useEffect, useState } from 'react';


 const skillBox =({data})=> {
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
                                </div>
                                {
                                    skill.available ? (
                                        <div style={{position:'absolute',top:0}} className="available">Disponible</div>
                                    ):(
                                        <div style={{position:'absolute',top:0}} className="notAvailable">Agotado</div>
                                    )
                                }
                                
                    </div>
                    )
                }
                            
            </React.Fragment>
        );
    
}

export default skillBox;

