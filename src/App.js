import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
// importamos componentes pagina inicial
import ContenedorInicio from './Inicio/Inicio'
// rutas admin
import SubirProducto from './admin/subirproducto/subirProducto/SubirProducto'
import EditarProducto from './admin/subirproducto/editarProducto/EditarProducto'
import VerProductos from './admin/subirproducto/verProductos/VerProductos'
import LoginComponent from './admin/subirproducto/login/Login'
// componente por si una ruta no existe manda un 404
import PageError from './PageError/PageError'
// componente HOC donde verifica si existe una conexion a internet
import NetworkDetector from './Hoc/NetworkDetector';

// importamos el contexto par aun estado global
import AuthContext from './context/AuthContext'

// para rutas privadas
import PrivateRoutes from './admin/subirproducto/PrivateRoutes'
class App extends Component{
  render(){
    return(
      <AuthContext>
        <Router>
          <Switch>
              <Route path ="/" exact component={ContenedorInicio}/>
              <PrivateRoutes path="/admin/uploadproduct" component={SubirProducto}></PrivateRoutes>
              <PrivateRoutes path="/admin/editproduct" component={EditarProducto}></PrivateRoutes>
              <PrivateRoutes path="/admin/viewproduct" component={VerProductos}></PrivateRoutes>
              <Route path="/admin" exact component={LoginComponent}></Route>
              {/* <Route path ="/davidCV" exact component={DavidCV}/> */}
              <Route component={PageError}/>
          </Switch>
        </Router>
        </AuthContext>
    )
  }

}

export default NetworkDetector(App);
