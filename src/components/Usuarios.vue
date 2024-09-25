<template>
    <div>
        <h1>Usuarios</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios">
                    <td >
                        {{ usuario.Nombre }}
                    </td>
                    <td >
                        {{ usuario.Correo }}
                    </td>
                </tr>
            </tbody>
        </table>
        <ul>

        </ul>
    </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
export default {
    name: "FirebaseComponent",
    data() {
        return {
            usuarios: [],
        }
    },
    async mounted() {
        try {
            const db = getFirestore(firebaseApp);
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            querySnapshot.forEach((doc) => {
                this.usuarios.push(doc.data());
            });
        } catch (error) {
            conosole.log(error);
        }


    }
}
</script>