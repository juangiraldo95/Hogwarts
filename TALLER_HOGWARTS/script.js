//Crear objeto con informacion del alumno
var datosAlumno = [];

function formulario(){
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
}

function seleccionCasa(){
    var nombre = document.getElementById('nombre').value;
    document.getElementById('nombre').value = ""
    var edad = document.getElementById('edad').value;
    document.getElementById('edad').value = ""
    var familia = document.getElementById('familia').value;
    document.getElementById('familia').value = ""
    var linaje = document.getElementById('linaje').value;
    document.getElementById('linaje').value = ""
    var cualidades = document.getElementById('cualidades').value;
    document.getElementById('cualidades').value = ""

    //Logica para asignar la casa

    var casaAsignada = "";
    var cualidades2 = "";
    var escudo = ""
    if (cualidades == "Griffindor" && (linaje == "Mestizo" || linaje == "Muggle" || linaje == "Sangre Pura")){
        casaAsignada = "Griffindor";
        cualidades2 = "Valor, Fuerza, Audacia";
        escudo = "escudo1"
        document.getElementById('escudo1').classList.remove("d-none");
    } else if (cualidades == "Hufflepuff" && (linaje == "Mestizo" || linaje == "Muggle")){
        casaAsignada = "Hufflepuff";
        cualidades2 = "Justicia, Lealtad, Paciencia";
        escudo = "escudo2"
        document.getElementById('escudo2').classList.remove("d-none");
    } else if (cualidades == "Ravenclaw" && (linaje == "Mestizo" || linaje == "Muggle" || linaje == "Sangre Pura")){
        casaAsignada = "Ravenclaw"
        cualidades2 = "Creatividad, Erudición, Inteligencia";
        escudo = "escudo3"
        document.getElementById('escudo3').classList.remove("d-none");
    } else if (cualidades == "Slytherin" && linaje == "Sangre Pura"){
        casaAsignada = "Slytherin"
        cualidades2 = "Ambición, Determinación, Astucia";
        escudo = "escudo4"
        document.getElementById('escudo4').classList.remove("d-none")
    } else {
        casaAsignada = "Sin Casa Asignada";
    }

    //Crear objeto con info del estudiante

    var formularioDatos = {
        nombre : nombre,
        edad : edad,
        familia : familia,
        linaje : linaje,
        casa : casaAsignada,
        cualidades : cualidades2,
        escudo: escudo,
    };
    
    datosAlumno.push(formularioDatos);

    mostrarDatosEnPagina();
}

function mostrarDatosEnPagina(){
    document.getElementById("pruebaSombrero").classList.remove("d-none");
    let time;
    time = setTimeout(cargaSombrero, 5000);
    
    alert("Soy el sombrero magico, voy a seleccionar tu casa");

    function escudos(){
        document.getElementById("escudos").classList.remove('d-none');
        document.getElementById("escudos").classList.add('d-block');
        let time1;
        time1 = setTimeout(escudos, 6000);


    }

    function cargaSombrero(){
        document.getElementById("pruebaSombrero").classList.add("d-none");
        var mostrarDatosElemento = document.getElementById('mostrarDatos');
        mostrarDatosElemento.classList.remove("d-none");
        document.getElementById("siguiente").classList.remove('d-none');

        escudos();

        //Iterar el array agregar al elemento
        

        datosAlumno.forEach((formularioDatos, index) => {
            mostrarDatosElemento.innerHTML += `<p>Datos del estudiante ${index + 1}:</p>`;
            mostrarDatosElemento.innerHTML += `<p>Nombre: ${formularioDatos.nombre}</p>`;
            mostrarDatosElemento.innerHTML += `<p>Edad: ${formularioDatos.edad}</p>`;
            mostrarDatosElemento.innerHTML += `<p>Familia: ${formularioDatos.familia}</p>`;
            mostrarDatosElemento.innerHTML += `<p>Linaje: ${formularioDatos.linaje}</p>`;
            mostrarDatosElemento.innerHTML += `<p>Casa Asignada: ${formularioDatos.casa}</p>`;
            mostrarDatosElemento.innerHTML += `<p>Cualidades: ${formularioDatos.cualidades}</p>`;
            mostrarDatosElemento.innerHTML += '<hr>';
        });
    }
}
function capturarInfo(){
    var input = document.getElementById("input").value;
    console.log(input.toUpperCase())
    document.getElementById("input").value = ("");
}

function capturarColor(){
    var color = document.getElementById("color").value;
    console.log(color);
    document.getElementById("cuadro").style.backgroundColor = color;
}

function pelearBoggart(){
    document.getElementById("harryvsboggart").classList.remove("d-none");
    document.getElementById("harryvsboggart").classList.add('d-block')
}
function correrBoggart(){
    document.getElementById("harrycorriendo").classList.remove("d-none");
    document.getElementById("harrycorriendo").classList.add('d-block');
}
function animalPatronus(){
    document.getElementById("dragon").classList.remove("d-none");
}










