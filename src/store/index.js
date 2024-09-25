import { createStore } from "vuex";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

export default createStore(
    {
        state: {
            usuarios: [],
        },
        mutations: {
            setUsuarios(state, users) {
                state.usuarios = users;
            },
        },
        actions: {
            async obtenerUsuarios({ commit }) {
                const db = getFirestore(firebaseApp);
                const querySnapshot = await getDocs(collection(db, "usuarios"));
                const usuarios = [];
                querySnapshot.forEach((doc) => {
                    const usuario = {
                        id: doc.id,
                        ...doc.data(),
                    };
                    usuarios.push(usuario);
                });
                commit('setUsuarios', usuarios);
            },
        }
    }
)