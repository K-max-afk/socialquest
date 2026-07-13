// =======================
// SOCIALQUEST
// =======================

const preguntas = [

{
pregunta:"¿Qué es una exportación?",
opciones:[
"Comprar productos del extranjero",
"Vender productos a otros países",
"Transportar mercancías",
"Fabricar productos"
],
correcta:1
},

{
pregunta:"¿Qué organismo regula el comercio internacional?",
opciones:[
"ONU",
"OMC",
"UNESCO",
"FIFA"
],
correcta:1
},

{
pregunta:"¿Cuál es una exportación importante del Ecuador?",
opciones:[
"Banano",
"Petróleo de Arabia",
"Automóviles",
"Celulares"
],
correcta:0
},

{
pregunta:"¿Qué significa importar?",
opciones:[
"Comprar productos del extranjero",
"Vender productos",
"Fabricar bienes",
"Transportar personas"
],
correcta:0
},

{
pregunta:"¿Cuál es una ventaja del comercio internacional?",
opciones:[
"Menor variedad",
"Más oportunidades económicas",
"Menos empleo",
"Aislamiento comercial"
],
correcta:1
}

];

let actual = 0;
let puntaje = 0;

const btnComenzar = document.getElementById("btnComenzar");
const intro = document.getElementById("intro");

btnComenzar.addEventListener("click",()=>{

document.querySelector(".hero").style.display="none";

intro.classList.remove("hidden");

});

document.querySelectorAll(".next").forEach(boton=>{

boton.addEventListener("click",()=>{

const actualID=boton.parentElement.id;

document.getElementById(actualID).classList.add("hidden");

const siguiente=boton.dataset.next;

document.getElementById(siguiente).classList.remove("hidden");

if(siguiente==="quiz"){

mostrarPregunta();

}

});

});

function mostrarPregunta(){

const pregunta=document.getElementById("pregunta");
const opciones=document.getElementById("opciones");
const barra=document.getElementById("barra");

barra.style.width=((actual)/preguntas.length)*100+"%";

pregunta.textContent=preguntas[actual].pregunta;

opciones.innerHTML="";

preguntas[actual].opciones.forEach((texto,index)=>{

const boton=document.createElement("button");

boton.textContent=texto;

boton.onclick=()=>verificar(index);

opciones.appendChild(boton);

});

}

function verificar(respuesta){

if(respuesta===preguntas[actual].correcta){

puntaje+=20;

}

actual++;

if(actual<preguntas.length){

mostrarPregunta();

}else{

terminar();

}

}

function terminar(){

document.getElementById("quiz").classList.add("hidden");

document.getElementById("resultado").classList.remove("hidden");

document.getElementById("puntajeFinal").innerHTML=

`Obtuviste <strong>${puntaje} puntos de 100</strong> 🎉`;

}
