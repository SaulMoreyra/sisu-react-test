import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsersById } from '../services/usuarios';


export default function EditUsuario() {
   /* const history = useHistory(); */
   const { id } = useParams()
   const [usuario, setUsuario] = useState({
      nombre: "",
      apellido: ""
   })

   useEffect(() => {
      getUsersById(id).then(usuario => {
         setUsuario(usuario);
      })
   }, [id])

   const { nombre, apellido } = usuario;
   return (
      <div className="container">
         <h1>Ver Usuario</h1>

         <div className="p-field">
            <label htmlFor="nombre" className="p-d-block">{nombre}</label>
         </div>

         <div className="p-field">
            <label htmlFor="apellido" className="p-d-block">{apellido}</label>
         </div>

         <div >
            {/* <Button label="Guardar" onClick={onSubmit} /> */}
         </div>
      </div>
   )
}
