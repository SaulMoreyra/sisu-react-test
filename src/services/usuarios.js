import db from '../firebase';

const addUser = async (nombre, apellido) => {
   try {
      return await db.collection("users").add({ nombre, apellido });
   } catch (error) {
      return { error };
   }
}

const getUsers = async () => {
   try {
      const data = [];
      const respuesta = await db.collection("users").get();

      respuesta.forEach(doc => {
         const usuario = doc.data();
         const id = doc.id;
         data.push({ ...usuario, id })
      })


      return data;
   } catch (error) {
      return { error };
   }
}


const getUsersById = async (id) => {
   try {
      const data = await db.collection("users")
         .doc(id)
         .get()
      return data.data();
   } catch (error) {
      return { error };
   }
}


export { addUser, getUsers, getUsersById };