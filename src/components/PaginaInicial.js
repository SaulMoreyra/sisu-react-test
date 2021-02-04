import React from 'react'
import TableUsuarios from './TableUsuarios'
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export default function PaginaInicial() {
   return (
      <div>
         <Link to="/form">
            <Button label="Save" />
         </Link>

         <TableUsuarios />
      </div>
   )
}
