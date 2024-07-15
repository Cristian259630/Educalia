<script setup>
import sourceData from "../../public/profesores.json";
</script>

<template>

    <div class="taskbar">
            <router-link to="/">

                <img src="../assets/Educalia_azul.png" alt="" id="BlueLog" >

            </router-link>
    </div>



    <input id="myInput" type="text" placeholder="Tema" class="autocomplete">

    <input id="myInput" type="text" placeholder="Estado" class="State">


    <h1 class="Inicio_Sesión">Inicio de Sesión</h1>


    <div class="info">
        <div class="Perfil">

            <img :src="maestro.foto" id="Foto1">

            <h1 class="nombre_especialista">
                {{ maestro.nombre }}
            </h1>

            <h1 class="especialidad">
                {{ maestro.profesion }}
            </h1>

            <h1 class="Ubicacion">
                {{ maestro.ubicacion }}
            </h1>

            <img src="../assets/5-Star-Rating.png" id="stars">

            <button class="cita">Agendar Cita</button>

            <button class="mensaje">Enviar Mensaje</button>

            <br>

            <ul class="Opciones">
                <li><button>Detalles </button><br></li>
                <li>|</li>
                <li><button>Experiencia</button><br></li>
                <li>|</li>
                <li><button>Costos</button><br></li>
                <li>|</li>
                <li><button>Opiniones</button></li>
            </ul>
    </div>

    <!----------------------------------------------------------------------------------------------------------------------------->

        <div class="Agenda">
            <h1 class="Agentclass">Agendar una Clase </h1>
            <h1 class="direct"> <strong>Dirección:</strong> {{ maestro.direccion }} </h1>
            <div class="calendar">
                <iframe src="https://calendar.google.com/calendar/embed?src=c_ed07614458e681bc1c5982a599c0933c9bc6aac0cd2f36e6f6a9e18bab08453b%40group.calendar.google.com&ctz=America%2FMexico_City" 
                    style="border: 0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
            </div>
            <div class="timer">
                <input type="time" name="hora" id="hora">
            </div>
        </div>

        <div class="box1"></div>
    </div>

    <!------------------------------------------------------------------------------------------------------------------------------>

    <div class="Section2">

        <h1 class="texto1">
            Ubicacion
        </h1>

        <iframe class="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119526.37601552467!2d-100.5631661!3d20.5799191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35acbc1932d3b%3A0x9812e24009d961c5!2sUniversidad%20Aut%C3%B3noma%20de%20Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1717018548935!5m2!1ses-419!2smx"
            width="600" height="450" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>


        <h2 class="texto2">{{ maestro.direccion }}</h2>

        <h2 class="texto3">Detalles de la direccción </h2>

        <h1 class="texto4">Costos</h1>

        <ul class="cost-list">
            <li>1 hora - $150 pesos</li>
            <li></li>
            <li>2 hora - $250 pesos</li>
            <li></li>
            <li>Dia Completo - $650 pesos</li>
            <li></li>
            <li>Asesoria Personalizada - acordar precio </li>

        </ul>

        <img src="../assets/money.png" class="dinero">

        <h1 class="texto5">Formas de Pago</h1>

        <h2 class="texto6">Efectivo - Transferencia Bancaria</h2>

        <img src="../assets/transferenciabancaria.png" class="transferencia">

    </div>

    <div class="sec3">

        <h1 class="opini">
            Opiniones
        </h1>

        <br>

        <ul>
            <li>Jesus Ramirez: Las sesiones  me han  ayudado a mejorar mi logica de programación en las clases de la universidad</li>
            <br>
            <li>Carlos Ramirez: "¡Las clases con el profesor son increíbles! Su pasión por el tema realmente brilla a través de su enseñanza. Siempre está dispuesto a responder preguntas y explicar conceptos difíciles de una manera fácil de entender. Realmente ha hecho que aprender sea divertido y emocionante".</li>
            <br>
            <li>Roberto Cordoba: "He tenido la suerte de tener al profesor como mi maestro este semestre. Su enfoque práctico para la enseñanza realmente ha hecho una diferencia en mi comprensión del tema. Siempre trae ejemplos del mundo real a la clase y fomenta la participación activa. ¡No podría estar más agradecido por su dedicación y apoyo!"</li>
            <br>
            <li>Karla Ortiz: "El profesor es un verdadero experto en su campo. Su profundo conocimiento y experiencia hacen que cada clase sea valiosa y enriquecedora. Además, su enfoque en el aprendizaje activo y el trabajo en equipo ha mejorado significativamente mi capacidad para resolver problemas y pensar de manera crítica".</li>
            <br>
            <li>Carlos Rodriguez: "Las clases con el profesor son todo menos aburridas. Su estilo de enseñanza dinámico y creativo mantiene a todos comprometidos y motivados. Siempre está dispuesto a probar nuevas técnicas y herramientas educativas para asegurarse de que todos los estudiantes estén aprendiendo al máximo de su capacidad".</li>
        </ul>

    </div>

</template>

<script>
export default {
    computed: {
        maestroId() {
            return parseInt(this.$route.params.id);
        },

        maestro() {
            return sourceData.profesor.find(maestro => maestro.id === this.maestroId);
        }
    }
}
</script>


<style scoped>



.taskbar {


    width: 100%;
    height: 90px;
    background: #0055A6;
    position: fixed;
    z-index: 1000;



}



.autocomplete {
    position: relative;
    margin-left: 300px;
    top: -70px;
    width: 350px;
    height: 40px;
    border-radius: 5px;
}

.State {
    position: relative;
    margin-left: 40px;
    top: -70px;
    width: 350px;
    height: 40px;
    border-radius: 5px;

}

.Inicio_Sesión {
    margin-left: 83%;
    margin-top: -110px;
    color: white;
    font-weight: 200;
}


::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-left: 10px;
}

.info {
    column-gap: 2vw;
    margin-top: 100px;
    width: 100px;
}

.Perfil {
    position: relative;
    background: #eeeeee;
    width: 950px;
    height: 500px;
    top: 20px;
    border-radius: 10px;
    margin-left: 40px;

}

.Agenda {
    left: 959px;
    position: relative;
    background: #eeeeee;
    width: 480px;
    height: 1005px;
    border-radius: 5px;
    margin-left: 65%;
    z-index: 900;
    top: -480px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    

}

.Agenda .Agentclass{
    display: flex;
    position: relative;
    left: 20px;
    top: -420px;
    font-size: 29px;
    width: 100%;
}

.Agenda .calendar{
    width: 90%;
    height: 600px;
    margin-left: -480px;
    margin-top: 0px;
    position: relative;
}


.Agenda .direct{
    width: 100%;
    margin-top: -680px;
    margin-left: -460px;
    font-weight: 300;
    font-size: 20px;
}

.Agenda .timer{
    margin-top: 680px;
    margin-left: -420px;
}

.Section2 {
    background: #eeeeee;
    width: 950px;
    height: 500px;
    border-radius: 5px;
    margin-left: 40px;
    position: absolute;
    top: 600px;
  

    
    
   
}

.Perfil #Foto1 {
    margin-left: 50px;
    margin-top: 20px;
}

.Perfil .nombre_especialista {
    margin-left: 350px;
    margin-top: -200px;

}

.Perfil .especialidad {
    margin-left: 350px;
    margin-top: -20px;
    font-weight: 200;
}

.Perfil .Ubicacion {

    margin-left: 350px;
    margin-top: -20px;
    font-weight: 200;

}

.Perfil #stars {
    margin-top: 70px;
    width: 250px;
    margin-left: 40px;
}


.Perfil .cita {
    margin-left: 60px;
    width: 170px;
    height: 50px;
    top: -20px;
    font-size: 20px;
    background-color: #0055A6;
    border-radius: 5px;
    color: white;
    position: relative;

}


.Perfil .mensaje {
    margin-left: 20px;
    top: -20px;
    width: 170px;
    height: 50px;
    position: relative;
    font-size: 20px;
    background-color: #0055A6;
    border-radius: 5px;
    color: white;
    position: relative;

}


.Perfil .cita:hover {
    background-color: white;
    color: #0055A6;
}


.Perfil .mensaje:hover {
    background-color: white;
    color: #0055A6;

}


.Perfil .Opciones {
    margin-top: 70px;
    margin-left: 50px;
    list-style-type: none;
    display: inline-flex;
    font-size: 40px;


}


.Perfil .Opciones button {
    font-size: 40px;
    border-radius: 5px;
    font-weight: 200;
    background-color: #0055A6;
    color: white;

}

.Perfil .Opciones button:hover {
    background-color: white;
    color: #0055A6;
}


.Section2 .texto1 {

    margin-left: 50px;
    position: relative;
    top: 45px;

}

.Section2 .mapa {
    width: 150px;
    height: 150px;
    margin-left: 700px;
    border-radius: 10px;
    margin-top: -30px;
}


.Section2 .texto2 {

    margin-left: 50px;
    font-weight: 500;
    font-size: 20px;
    margin-top: -90px;

}

.Section2 .texto3 {
    margin-left: 50px;
    font-weight: 500;
    font-size: 20px;
    color: #0055A6;
}

.Section2 .texto3:hover {

    text-decoration: underline;

}

.Section2 .texto4 {
    margin-left: 50px;
    margin-top: 30px;
}

.Section2 .cost-list {

    margin-left: 10px;
    list-style-type: none;
    margin-bottom: 1.5em;

}

.Section2 .dinero {
    width: 150px;
    height: 150px;
    margin-left: 700px;
    top: -160px;
    position: relative;
}


.Section2 .texto5 {
    margin-left: 50px;
    margin-top: -150px;
}

.Section2 .texto6 {

    margin-left: 50px;
    font-weight: 500;
    font-size: 17px;

}

.Section2 .transferencia {
    width: 150px;
    height: 100px;
    margin-left: 700px;
    margin-top: -80px;
}

.Section3{
    display: flex;
    top: 900px;
    position: initial;
}

.sec3{
    width: 1465px;
    height: 420px;
    background: #0055A6;
    border-radius: 10px;
    margin-left: 40px;
    top: 1120px;
    position: absolute;

}

.sec3 .opini{
    color: white;
    margin-left: 750px;
}

.sec3 ul li{
    list-style-type: none;
    color: white;
}


</style>
