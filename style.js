var nombre = "Hola Mundo De JavaScript";
var numero = "20";
var decimal = "23.5";
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
var miFuncion = function () { };

// Pagina De Prueba Comienza

var title = document.querySelector("Titulo");
var boton = document.getElementById("boton");

// Nodos

var parrafoNuevo = document.createElement("p");
var textoNuevo = document.createTextNode("Primer Parrafo Creado Con JS");
parrafoNuevo.appendChild(textoNuevo);
parrafoNuevo.setAttribute("class", "texto-js");
var contenedor = document.getElementsByClassName("contenedor")[0];
contenedor.appendChild(parrafoNuevo);

// Canbiando Nombres

var segundoParrafo = document.getElementById("texto2");
segundoParrafo.className = "texto2 segundo"
var primerParrafo = document.getElementsByClassName("texto1")[0];

// Siguendo

var parrafo = document.createElement("p");
var textoNuevo = document.createTextNode("Segundo Parrafo Creado Con JS")











console.log("Hola Mundo De JavaScript");