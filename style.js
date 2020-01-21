var edad = "18";
var boton = document.getElementById("boton")
var registrate = document.getElementById("registrate")
var informacion = "23.5";
var texto = "Hola, Pagina De Practica";
var subtexto = "true";
var subtexto1 = "false";
var primerParrafo = document.querySelector("#texto1");
var segundoParrafo = document.querySelector("#texto2");
var terceroParrafo = document.querySelector("#texto3");
var familia = ["Papa", "Mamá", "Herman@s", true];
var planta = {
  color: "verde",
  tamaño: "grande",
  cantidad: 3
}
var generador = document.getElementById("generador");



// Primer Script

var nombre = "Hola Mundo De JavaScript";
console.log(nombre);

// Segundo Script

var edad = "tengo 18 años";
console.log(edad);

// Segundo Script

var title = document.querySelector("Titulo");
var boton = document.getElementById("boton");

// Tercer Script

var parrafoNuevo = document.createElement("p");
var textoNuevo = document.createTextNode("Grasias Por El Curso De JavaScript");
parrafoNuevo.appendChild(textoNuevo);
parrafoNuevo.setAttribute("class", "texto-js");
var contenedor = document.getElementsByClassName("contenedor")[0];
contenedor.appendChild(parrafoNuevo);

// Cuarto Script

var segundoParrafo = document.getElementById("texto2");
segundoParrafo.className = "texto2 segundo"
var primerParrafo = document.getElementsByClassName("texto1")[0];

// Quinto Script

function alerta() {
  alert("Esto Puede Tardar Un Poco !");
}

boton.addEventListener("click", alerta)

registrate.addEventListener("click", alerta)

// Eliminar Escuchador

function removerAlerta() {
  boton.removeEventListener("click", alerta);
  registrate.removeEventListener("click", alerta);
}

boton.addEventListener("click", removerAlerta)
registrate.addEventListener("click", removerAlerta)

// Sexto Script


generador.addEventListener("click", function () {
  var nuevoParrafo = document.createElement("p");
  var textoNuevo = document.createTextNode("Sigue Dandole Click");

  nuevoParrafo.appendChild(textoNuevo)
  nuevoParrafo.className = "text-info_concept";

  var contenedor = document.getElementsByClassName("contenedor")[0];
  contenedor.appendChild(nuevoParrafo);

})

// Septimo Script  

var parrafos = document.getElementsByClassName("parrafo")
rojo = document.getElementById("boton_rojo")
violeta = document.getElementById("boton_violeta")
bgamarillo = document.getElementById("boton_amarillo")
bgdark = document.getElementById("boton_negro")

rojo.addEventListener("click", function (e) {
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red";
  }
});

violeta.addEventListener("click", function (e) {
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "violet";
  }
});

bgamarillo.addEventListener("click", function (e) {
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.background = "yellow";
  }
});

bgdark.addEventListener("click", function (e) {
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.background = "black";
  }
});
