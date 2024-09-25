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
                        {{ usuario.Nombre }}
                    </td>
                    <td >
                        {{ usuario.Email }}
                    </td>
                    <td>
                        <button>Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ul>

        </ul>
    </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['usuarios'])
    },
    methods:{
    },
    mounted() {
        this.$store.dispatch('obtenerUsuarios');
    }
}
</script>