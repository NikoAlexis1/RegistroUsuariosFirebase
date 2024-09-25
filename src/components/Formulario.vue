<template>
    <div>
        <h1>Formulario</h1>
        <form @submit.prevent>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre">
            <label for="email">Email:</label>
            <input type="text" id="email">
            <button>Registrar</button>
        </form>
    </div>
</template>