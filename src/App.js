import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
// importamos componentes
import ContenedorInicio from './Inicio/Inicio'

// componente por si una ruta no existe manda un 404
import PageError from './PageError/PageError'
// componente HOC donde verifica si existe una conexion o no
import NetworkDetector from './Hoc/NetworkDetector';
class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
            <Route path ="/" exact component={ContenedorInicio}/>
            {/* <Route path ="/davidCV" exact component={DavidCV}/> */}
            <Route component={PageError}/>
        </Switch>
      </Router>
    )
  }

}

export default NetworkDetector(App);
