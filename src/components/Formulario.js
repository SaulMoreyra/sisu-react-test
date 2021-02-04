import React, { useEffect, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';
/* import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import 'primeflex/primeflex.css'; */

//FIREBASE SERVICES (ADDUSUARIO)
import { addUser } from '../services/usuarios';

export default function Formulario() {
   const history = useHistory();
   const [mensaje, setMensaje] = useState("");
   const [nombre, setNombre] = useState("");
   const [apellido, setApellido] = useState("");
   const timer = useRef();

   const isFormValid = () => {
      if (nombre.trim() === 0) return false;
      if (!nombre.match(/^[A-Za-z]+$/) === 0) return false;
      if (apellido.trim() === 0) return false;
      if (!apellido.match(/^[A-Za-z]+$/) === 0) return false;
      return true;
   }


   const onSubmit = (e) => {
      if (isFormValid()) {
         addUser(nombre, apellido).then((resp) => {
            history.push("/");
         }).catch((error) => {
            setMensaje("Hubo un error");
         })
      }
      else {
         setMensaje("Revisa los campos");
      }
   }

   useEffect(() => {
      if (mensaje !== "")
         timer.current = setTimeout(() => {
            setMensaje("");
         }, 2000)
   }, [mensaje])

   return (
      <div className="container">

         <h1>Crear Usuario</h1>

         {mensaje !== "" && <h6>{mensaje}</h6>}

         <div className="p-field">
            <label htmlFor="nombre" className="p-d-block">Nombre</label>
            <br />
            <InputText
               id="nombre"
               name="nombre"
               className="p-d-block"
               value={nombre}
               autoComplete="off"
               onChange={(e) => setNombre(e.target.value)} />
         </div>


         <div className="p-field">
            <label htmlFor="apellido" className="p-d-block">Apellido</label>
            <br />
            <InputText
               id="apellido"
               name="apellido"
               className="p-d-block"
               value={apellido}
               autoComplete="off"
               onChange={(e) => setApellido(e.target.value)} />
         </div>

         <div >
            <Button label="Guardar" onClick={onSubmit} />
         </div>

         {/* <div className="p-field">
            <label htmlFor="basic">Basic</label>
            <Calendar id="basic" />

         </div> */}

      </div>
   )
}
