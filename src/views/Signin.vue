<template>
    
        <div class="barra">

            <img src="../assets/Logo1-removebg-preview.png" alt="LOGO" id="logoPag">

            

            <a href="/">

               <img src="../assets/home.png" id="home" alt="home">
            </a>


             

        </div>

        <h1> Inicio de Sesion</h1>

    


        <div class="google_inicio">

            <img src="../assets/Google.png" alt="LOGO" id="Golog">

            <h1> Continuar con Google</h1>

        </div>

        

        <div class="apple_inicio">

            <img src="../assets/Apple.png" alt="LOGO" id="Alog">

            <h1> Continuar con Apple</h1>

        </div>

        <div class="Linea">
            <img src="../assets/Linea.png" alt="LOGO" id="Lin">
        </div>


        
        <input type="text" id="input_text" name="nombre" placeholder="Correo Electronico">

        <input type="text" id="input_text2" name="nombre" placeholder="Contraseña">

        <div class="signbutton">
            <h1>Iniciar Sesión</h1>
        </div>

        <h1 class="opcion1">He olvidado mi contraseña</h1>

        <h1 class="opcion2">¿Todavia sin cuenta? <span class="color2"><RouterLink to="/registro" class="register">Registrarse</RouterLink></span></h1>




        


</template>






<style scoped>


.barra{
    width: 100%;
    height: 150px;
    background-color: whitesmoke;
   
    
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

#logoPag{
    width: 190px;
    margin-left: 43%;
    margin-top: 30px;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    margin-left: 43%;
    margin-top: 40px;
    font-size: 25px;
}

.google_inicio{
    background-color: whitesmoke;
    width: 510px;
    height: 45px;
    border-radius: 3px;
    margin-left: 32%;
    margin-top: 18px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.apple_inicio{
    background-color: whitesmoke;
    width: 510px;
    height: 45px;
    border-radius: 3px;
    margin-left: 32%;
    margin-top: 18px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

}

.google_inicio #Golog{
    width: 35px;
    height: 35px;
    margin-top: 5px;
    margin-left: 10px;
    
}


.apple_inicio #Alog{
    width: 35px;
    height: 40px;
    margin-top: 2px;
    margin-left: 10px;
}


.google_inicio h1{

    font-family:Arial, Helvetica, sans-serif;
    font-weight: 100;
    margin-top: -38px;
    font-size: 25px;
    right: 50px;
    

}

.apple_inicio h1{

    font-family:Arial, Helvetica, sans-serif;
    font-weight: 100;
    margin-top: -43px;
    font-size: 25px;
    right: 50px;

}

.Linea #Lin{
    margin-left: 32%;
    margin-top: 20px;
    width: 510px;
    height: 45px;
    
}

#input_text{

    margin-left: 32%;
    margin-top: 20px;
    width: 510px;
    height: 45px;
    border-radius: 3px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 20px;
    

}


#input_text2{

margin-left: 32%;
margin-top: 20px;
width: 510px;
height: 45px;
border-radius: 3px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
border: 0px;
font-size: 20px;


}

::placeholder{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-left: 10px;
}



.signbutton{
    background-color:#3b5998;
    margin-left: 32%;
    width: 515px;
    height: 45px;
    border-radius: 3px;
    margin-top: -17px;
    border: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.signbutton h1{
    top: 6px;
    color: white;
    font-size: 23px;
    margin-left: 35%;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    
}

.opcion1{
    font-size: 15px;
    font-weight: 100;
    margin-left: 42.5%;
    top:-10px;
    color: #3b5998;

}

.opcion2{
    font-size: 15px;
    font-weight: 100;
    margin-left: 41%;
    top:-40px;
    color: gray;

}

.color2{
    color: #3b5998;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}

.register{
    text-decoration: none;
}

#home{
    width: 30px;
    height: 30px;
    margin-left: 97%;
    top: -50%;
    position: relative;
}






</style>



