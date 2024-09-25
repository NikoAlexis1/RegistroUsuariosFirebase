<template>
    <div>
        <h1>Usuarios</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios">
                    <td >
                        {{ usuario.nombre }}
                    </td>
                    <td >
                        {{ usuario.email }}
                    </td>
                    <td>
                        <button @click="eliminarUsuario(usuario.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ul>

        </ul>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState(['usuarios'])
    },
    methods:{
        ...mapActions(['eliminarUsuario']),
        async eliminarUsuario(id) {
            await this.$store.dispatch('eliminarUsuario', id);
            location.reload();
        }
    },
    mounted() {
        this.$store.dispatch('obtenerUsuarios');
    }
}
</script>