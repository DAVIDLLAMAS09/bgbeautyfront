import React, { Component } from 'react';

class skillBox extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((skill, key) =>
                    <div className="col-md-4 mt-4 pt-2 skillfeature" key={key}  name="skillfeature">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3 imagesSkills">
                                        <img alt={skill.tittle} src={skill.image} className=" text-primary"/>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">{skill.title}</h4>
                                    </div>
                                </div>
                    </div>
                
                    )
                }
                            
            </React.Fragment>
        );
    }
}

export default skillBox;

