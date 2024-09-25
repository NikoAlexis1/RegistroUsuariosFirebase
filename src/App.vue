<script>
import Formulario from './components/Formulario.vue';
import Usuarios from './components/Usuarios.vue';
export default {
  components: {
    Formulario,
    Usuarios
  }
}
</script>

<template>
  <div class="container">
    <div>
      <Formulario />
    </div>
    <div>
      <Usuarios />
    </div>
  </div>

</template>

<style scoped></style>
