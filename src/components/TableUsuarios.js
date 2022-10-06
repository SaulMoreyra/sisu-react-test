import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { getUsers } from '../services/usuarios';

import { Link } from 'react-router-dom';

export default function TableUsuarios() {
   const [usuarios, setUsuarios] = useState([]);

   useEffect(() => {
      getUsers().then(setUsuarios)
   }, [])

   const buttonVer = (rowData) => {
      return <Link to={`/verusuario/${rowData.id}`}>
         <Button >
            Ver
         </Button>
      </Link>
   }


   return (
      <div>
         <div className="card">
            <DataTable value={usuarios}>
               <Column field="nombre" header="Nombre"></Column>
               <Column field="apellido" header="Apellido"></Column>
               <Column field="id" header="Accion" body={buttonVer}>  </Column>
            </DataTable>
         </div>
      </div>
   )
}
