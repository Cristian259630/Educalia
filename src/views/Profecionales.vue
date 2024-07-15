<script setup>
import { ref } from "vue";
import profesores from "../../public/profesores.json";
import Card from "@/components/Card.vue";

let id_m = 0;
const materias = ref([
    { id: id_m++, text: "Español" },
    { id: id_m++, text: "Matematicas" },
    { id: id_m++, text: "Historia" },
    { id: id_m++, text: "Geografia" },
    { id: id_m++, text: "Civica y Etica" },
    { id: id_m++, text: "Literatura" }
]);

let id_e = 0;
const estados = ref([
    { id: id_e++, text: "Queretaro" },
    { id: id_e++, text: "CDMX" },
    { id: id_e++, text: "Puebla" }
]);

const maestros = ref(profesores.profesor);
</script>

<template>
    <header>
        <h1>Educalia</h1>
        <div class="seleccion">
            <select name="materias" id="materias">
                <option v-for="materia in materias" :key="materia.id" value="materia.text">
                    {{ materia.text }}
                </option>
            </select>

            <select name="estados" id="estados">
                <option v-for="estado in estados" :key="estado.id" value="estado.text">
                    {{ estado.text }}
                </option>
            </select>
        </div>

        <RouterLink to="/signin" class="link">Iniciar sesion</RouterLink>
    </header>

    <div class="filtrar">
        <form>
            <input type="text" name="modalidad" id="modalidad" placeholder="Modalidad">
            <input type="date" name="fecha" id="fecha">
            <input type="time" name="hora" id="hora">
            <button type="submit">Filtrar</button>
        </form>
    </div>

    <main>
        <h2>Resultados</h2>
        <div v-for="maestro in maestros" :key="maestro.id">
            <RouterLink :to="'/profile/' + maestro.id">
                <Card 
                    :imagen= "maestro.foto"
                    :nombre="maestro.nombre"
                    :profesion="maestro.profesion"
                    :calificacion="maestro.calificacion" 
                />
            </RouterLink>
        </div>
        
    </main>
</template>

<style scoped>

.card-imagen{
    width: 50px;
    height: 50px;
}

header {
    background-color: #0055A6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3.5em;
}

main {
    padding: 2vh 3vw;
}

h1 {
    font-size: 3rem;
    margin: 0;
    color: #fff;
}

.link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    border-style: none;
    padding: 10px 20px;
}

.link:hover {
    color: #0055A6;
    background-color: #fff;
    border-style: none;
    border-radius: 20px;
}

.seleccion {
    display: flex;
    flex-direction: row;
    column-gap: 3vw;
}

.seleccion>select {
    border-radius: 10px;
    height: 7vh;
    width: 20vw;
    font-size: 1.1rem;
}

.filtrar {
    background-color: #E9E9E9;
    height: 10vh;
    padding: 0 5vw;
}

.filtrar>form {
    display: flex;
    flex-direction: row;
    column-gap: 5vw;
    align-items: center;
    padding: 2vh 2vw;
}

#modalidad {
    border-radius: 10px;
    height: 5vh;
    width: 13vw;
    font-size: 1.1rem;
    border-style: solid;
    border-color: black;
    border-collapse: collapse;
    border-width: 1px;
    padding: 0 1vw;
}

#fecha {
    border-radius: 10px;
    height: 5vh;
    width: 13vw;
    padding: 0 1vw;
    font-size: 1.1rem;
    border-style: solid;
    border-color: black;
    border-collapse: collapse;
    border-width: 1px;
}

#hora {
    border-radius: 10px;
    height: 5vh;
    width: 13vw;
    padding: 0 1vw;
    font-size: 1.1rem;
    border-style: solid;
    border-color: black;
    border-collapse: collapse;
    border-width: 1px;
}

.filtrar>form>button {
    width: 13vw;
    padding: 8.5px;
    float: right;
    font-size: 1.1rem;
    color: #fff;
    border-style: none;
    border-radius: 20px;
    background-color: #eb3d3d;
    cursor: pointer;
}
</style>