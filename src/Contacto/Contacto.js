import React, { Component } from 'react'
//import axios from 'axios';


export class Contacto extends Component {
   constructor(props){
       super(props);
        this.state = {
            nombre: '',
            apellido: '',
            sueldo: '',
            message: '',
            mailSent: false,
            error: null
        }
       
   }

   componentDidMount(){
       this.getDatos();
   }

    handleFormSubmit=( event )=>{
    event.preventDefault();

    fetch('http://api.lhsunglasses.com.mx/creardatos.php',{
                method:'POST',
                body:JSON.stringify({
                    'nombre': this.state.nombre,
                    'apellido': this.state.apellido,
                    'sueldo':this.state.sueldo
                  })
              })
              .then((response)=>{
                 console.log(response);
                if(response.status===200){
                    this.setState({
                      exito:true,
                      nombre:'',
                      apellido:'',
                      sueldo:''
                    },()=>{
                        this.getDatos();
                    })
                }
              })
              .catch(function(error){
                console.log("error: "+error);
              });
    // try {
 
    //         const {nombre, apellido, sueldo} = this.state;
    //         const obj1 = {nombre:nombre, apellido:apellido, sueldo:sueldo };
    //         const res = await axios.post('http://api.lhsunglasses.com.mx/creardatos.php',obj1);
    //         console.log(res.status);
    //         if(res.status===200){
    //             this.setState({
    //                 nombre:'',
    //                 apellido:'',
    //                 sueldo:''
    //             },()=>{
    //                 this.getEmpleados();
    //             })
    //         }
      
    //      } catch (error) {
    //        console.error(error);
    //      }

    //      this.getEmpleados();
  }


  getDatos() {
    fetch('http://api.lhsunglasses.com.mx/obtenerdatos.php',{
                method:'GET'
              })
              .then(function(response){
                return response.json();
              })
              .then(JSONresponse=> {
                console.log("hola"+JSON.stringify(JSONresponse));
                this.setState({
                    nuevosDatos:JSONresponse
                })
                
              })
              .catch(function(error){
                console.log("error: "+error);
              });

    // try {
    //   const res = await axios.get('http://api.lhsunglasses.com.mx/obtenerdatos.php');
    //   console.log(res.data);
    //       this.setState({
    //           empleado:res.data
    //         })
          
    //    } catch (error) {
    //      console.error(error);
    //    }
}

    render() {
        return (
            <React.Fragment>
                {/* contact Start */}
                <form action="#" >
                    <label>Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder=""
                        value={this.state.nombre}
                        onChange={e => this.setState({ nombre: e.target.value })}
                    />
                    <label>Apellidos</label>
                    <input type=" text" id="lname" name="lastname" placeholder=""
                        value={this.state.apellido}
                        onChange={e => this.setState({ apellido: e.target.value })}
                    />
                    <label>sueldo</label>
                    <input type=" text" id="lname" name="lastname" placeholder=""
                        value={this.state.sueldo}
                        onChange={e => this.setState({ sueldo: e.target.value })}
                    />


                    {/* <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    /> */}


                    {/* <label>Message</label>
                    <textarea id="message" name="message" placeholder="Write something.."
                        onChange={e => this.setState({ message: e.target.value })}
                        value={this.state.message}
                    ></textarea> */}
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                </form >

                
            </React.Fragment>
        )
    }
}

export default Contacto