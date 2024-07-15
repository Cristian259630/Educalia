<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let id_m = 0;
const materias = ref([
    { id: id_m++, text: "Español" },
    { id: id_m++, text: "Matematicas" },
    { id: id_m++, text: "Historia" },
    { id: id_m++, text: "Geografia" },
    { id: id_m++, text: "Civica y Etica" },
    { id: id_m++, text: "Literatura" }
]);

let id_g = 0
const grados = ref([
    { id: id_g++, text: "Preescolar" },
    { id: id_g++, text: "Primaria" },
    { id: id_g++, text: "Secundaria" },
    { id: id_g++, text: "Preparatoria" },
    { id: id_g++, text: "Licenciatura" },
    { id: id_g++, text: "TSU" }
]);

function search() {
    router.push("/profecionales");
}
</script>
<script>
export default {
  name: 'Name',
  created() {
    document.title = 'Educalia';
  }
}
</script>
<template>
    <header>
        <h1 class="prevent-select">Educalia</h1>
        <nav>
            <RouterLink to="/signin" class="link">Iniciar sesion</RouterLink>
            <RouterLink to="/registro" class="link">Registrarse</RouterLink>
        </nav>
    </header>

    <main>
        <div class="search">
            <img src="../assets/maestra.png" alt="Foto de maestra caricatura">
            <div>
                <h2 class="search_title prevent-select">Encuentra a tu asesor <br /> y agenda tu clase</h2>
                <form class="search_form" @submit.prevent="search">
                    <input type="text" placeholder="Asignatura, nivel, tema" /> <br />
                    <input type="text" placeholder="Ej. Queretaro" /> <br />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </div>

        <div class="seleccion">
            <div class="materias">
                <ul>
                    <li v-for="materia in materias" :key="materia.id">
                        {{ materia.text }}
                    </li>
                </ul>
            </div>
            <div class="grados">
                <ul>
                    <li v-for="grado in grados" :key="grado.id">
                        {{ grado.text }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="ofrecer">
            <div>
                <img src="../assets/find.png" alt="find">
                <h3>Encuentra a tu profesor</h3>
                <p>Las opiniones reales de miles de<br />maestros te ayudarán a tomar<br />siempre la mejor decisión.
                </p>
            </div>

            <div>
                <img src="../assets/pedir.png" alt="calendario">
                <h3>Pide una clase de forma fácil</h3>
                <p>Elige la hora que prefieras y pide<br />clase sin necesidad de llamar.<br />Es fácil, cómodo y muy
                    rápido.</p>
            </div>

            <div>
                <img src="../assets/sms.png" alt="sms">
                <h3>Recordatorio por SMS</h3>
                <p>Te confirmamos la cita al instante y<br />te enviamos un recordatorio a tu<br />celular antes de la
                    cita.</p>
            </div>
        </div>
        <div class="respuestas">
            <h3>Respuestas de maestros calificados</h3>

            <div class="maestros">
                <div class="maestro">
                    <img src="../assets/Diana.png" alt="Maestra Diana">
                    <p>Las operaciones elementales en<br />las matematicas son<br />fundamentales para que
                        todo<br />estudiante cuente con bases solidas.<br/><span>M. Diana Alcocer</span></p>
                </div>

                <div class="maestro">
                    <img src="../assets/Jose.png" alt="Maestro Jose">
                    <p>La historia tiende por objetivo<br />conocer la informaciòn del<br />pasado y saber que
                        repecusiones<br />tendra esto en el futuro.<br><span>M. Jose Campos</span></p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
header {
    background-color: #0055A6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3.5em;
}

h1 {
    font-size: 3rem;
    margin: 0;
    color: #fff;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
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

.search {
    background-color: #0055A6;
    display: flex;
    flex-direction: row;
    column-gap: 20vw;
    padding: 10vh 5vw;
}

.search>img {
    width: 30vw;
    height: 55vh;
}

.search>div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search_title {
    font-size: 3rem;
    text-align: center;
    color: #fff;
}

.search_form>input {
    width: 25rem;
    font-size: 1.2rem;
    border-radius: 20px;
    border-style: solid;
    margin-bottom: 10px;
    padding: 15px;
}

.search_form>button {
    width: 15rem;
    padding: 8.5px;
    float: right;
    font-size: 1.5rem;
    color: #fff;
    border-style: none;
    border-radius: 20px;
    background-color: #eb3d3d;
    cursor: pointer;
}

.search_form>button:hover {
    color: #eb3d3d;
    background-color: #fff;
    cursor: pointer;
}

ul {
    list-style-type: none;
    margin: 2rem 2rem;
    padding: 0 5rem;
    display: flex;
    flex-direction: row;
    column-gap: 1vw;
    justify-content: space-between;
    align-items: center;
    background-color: gainsboro;
    height: 12vh;
    border-radius: 20px;
}

li {
    font-size: 1.3rem;
    text-emphasis: center;
    cursor: pointer;
}

.ofrecer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10vh 3vw;
}

.ofrecer>div {
    text-align: center;
}

.respuestas>h3 {
    background-color: #0055A6;
    margin: 5vh 3vw;
    padding: 2vh 0;
    height: 8vh;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    align-content: center;
}

.maestros {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5vh 0;
}

.maestro {
    display: flex;
    flex-direction: row;
    column-gap: 2vw;
    align-items: center;
    text-align: center;
}

.maestro>img {
    width: 10vw;
    height: 20vh;
}

.maestro>p>span {
    color: #0055A6
}
</style>