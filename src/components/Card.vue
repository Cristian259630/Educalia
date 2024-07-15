<script setup>
const props = defineProps({
    imagen: String,
    nombre: String,
    profesion: String,
    calificacion: Number
})
</script>

<template>

    
    <div class="card">
        <img :src="imagen" alt="Foto del maestro/a">
        
        <div class="info">
            <h1>{{ nombre }}</h1>
            <p>{{ profesion }}</p>
            <p>{{ calificacion }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    column-gap: 2vw;
    margin: 2vh 2vw;
    padding: 2vh 2vw;
    border-style: solid;
    border-collapse: collapse;
    border-color: #ccc;
    border-width: 1px;
    border-radius: 20px;
    background-color: #f4f4f4;
    transition: box-shadow .3s;
}

.card:hover {
    box-shadow: 0 0 11px rgba(3, 3, 3, 0.596);
    cursor: pointer;
}

.card>img {
    border-radius: 100%;
}

.info {
    display: flex;
    flex-direction: column;
    row-gap: 0.5vh;
    font-size: 1.5rem;
}

.info>h1 {
    margin: 0;
}
</style>