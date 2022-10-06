import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import EditUsuario from './components/EditUsuario';
import Formulario from "./components/Formulario"
import PaginaInicial from './components/PaginaInicial';

export default function MyRouter() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={PaginaInicial} />
            <Route path="/form" exact component={Formulario} />
            <Route path="/verusuario/:id" exact component={EditUsuario} />
         </Switch>
      </Router>
   )
}
