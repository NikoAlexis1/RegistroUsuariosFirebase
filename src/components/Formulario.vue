<template>
    <div>
        <h1>Formulario</h1>
        <form @submit.prevent="agregarUser">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
            <button>Registrar</button>
        </form>
    </div>
</template>
<script>
import { mapState, mapActions} from 'vuex'
export default {
    data() {
        return {
            nombre: '',
            email: ''
        }
    },
    methods:{
        ...mapActions(['registrarUsuario']),
        agregarUser() {
            if(this.nombre.trim() === '' || this.email.trim() === '') {
                alert('Todos los campos son obligatorios');
                return;
            }
            this.registrarUsuario({
                nombre: this.nombre,
                email: this.email
            });
            this.nombre = '';
            this.email = '';
        }
    },
    mounted() {
        this.$store.dispatch('obtenerUsuarios');
    }
}
</script>