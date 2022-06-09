function capturarDatos(){

    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var correo = document.getElementById("correo").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mCorreo = document.getElementById("mCorreo");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mCorreo.textContent = correo;
    mDescripcion.textContent = descripcion;

    if (genero == "Masculino"){
        mFoto.src="img/man.png";
    }else if (genero == "Femenino"){
        mFoto.src="img/woman.png";
    }else{
        mFoto.src="img/question.png";
    }
    switch (color) {
        case "Verde":
            var contenedor = document.getElementById("contAvatar");
            color.classList = "";
            contenedor.classList.add("Verde");
        break;
        case "Amarillo":
            var contenedor = document.getElementById("contAvatar");
            color.classList = "";
            contenedor.classList.add("Amarillo");
        break;
        case "Azul":
            var contenedor = document.getElementById("contAvatar");
            color.classList = "";
            contenedor.classList.add("Azul");
        break;

    }
    function cambiar(){
        
    }
}