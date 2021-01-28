import React,{useRef, Fragment, useState} from 'react';
import {Form,Button,Card, Container,Alert} from 'react-bootstrap'
import {AuthMycontext } from '../../../context/AuthContext'
import {useHistory} from 'react-router-dom'



const LoginComponent = () => {
    const [error,setError] = useState('') 
    const [show,setShow] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    const { login } = AuthMycontext()


    const onSubmit = (e)=>{
        e.preventDefault();

        login(emailRef.current.value,passwordRef.current.value)
        .then(user=>{
            console.log(user);
            history.push("/admin/viewproduct")
        })
        .catch(err=>{
            setShow(true)
            setError(err.message)
        })
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
    <Fragment>
        <section className="principal">
            <Container className="d-flex align-items-center justify-content-center vw-100 vh-100 ">
                <Card className="loginContenedor fondoForm">
                    {show &&
                    <Alert className="text-center" variant="danger">{error}</Alert>
                    }
                    <Card.Body>
                        <h2 className="mb-4 text-center tituloLogin" style={{color:'#001781'}}>Iniciar Sesión</h2>
                        {/* { currenUser && currenUser.email} */}
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label className="FormLabel">Correo Electrónico</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="FormLabel">Contraseña</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group>
                            <Button  className="w-100 btn-login" type="submit">Iniciar Sesión</Button>
                           
                        </Form>
                    </Card.Body>
                </Card>
            
            </Container>
        </section>
    </Fragment>
    );
};

export default LoginComponent;