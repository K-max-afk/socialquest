// ==========================================
// SOCIALQUEST
// Parte 1
// ==========================================

// ---------- LECCIONES ----------

const lecciones = [

{
titulo:"🌍 ¿Qué es la Economía Mundial?",

imagen:"https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800",

texto:"La economía mundial es el conjunto de actividades económicas realizadas por todos los países del planeta. Incluye la producción, distribución, intercambio y consumo de bienes y servicios.",

dato:"💡 Dato curioso: Más de 190 países participan diariamente en el comercio internacional."
},

{
titulo:"🚢 Comercio Internacional",

imagen:"https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800",

texto:"El comercio internacional consiste en el intercambio de productos y servicios entre diferentes países para satisfacer necesidades y promover el desarrollo económico.",

dato:"💡 Gracias al comercio internacional podemos consumir productos provenientes de otros continentes."
},

{
titulo:"📦 Exportaciones e Importaciones",

imagen:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",

texto:"Exportar significa vender productos a otros países. Importar significa comprar productos provenientes del extranjero.",

dato:"💡 Ecuador exporta principalmente banano, cacao, camarón y petróleo."
},

{
titulo:"🏦 Organismos Internacionales",

imagen:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",

texto:"Organizaciones como la OMC, el FMI y el Banco Mundial ayudan a regular y apoyar las relaciones económicas entre países.",

dato:"💡 La OMC significa Organización Mundial del Comercio."
},

{
titulo:"🇪🇨 Ecuador y el Comercio",

imagen:"https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=800",

texto:"Ecuador mantiene relaciones comerciales con numerosos países exportando productos agrícolas, pesqueros y petroleros.",

dato:"💡 El banano ecuatoriano es uno de los más exportados del mundo."
}

];

// ---------- VARIABLES ----------

let pagina = 0;
let preguntaActual = 0;
let puntaje = 0;

// ---------- BOTONES ----------

const comenzar = document.getElementById("comenzar");
const iniciar = document.getElementById("iniciarLeccion");
const siguiente = document.getElementById("siguiente");

// ---------- EVENTO INICIO ----------

comenzar.onclick = ()=>{

document.getElementById("pantallaInicio").classList.add("oculto");

document.getElementById("mapa").classList.remove("oculto");

};

// ---------- ENTRAR A LECCIÓN ----------

iniciar.onclick = ()=>{

document.getElementById("mapa").classList.add("oculto");

document.getElementById("contenido").classList.remove("oculto");

mostrarLeccion();

};

// ---------- MOSTRAR LECCIONES ----------

function mostrarLeccion(){

document.getElementById("titulo").textContent=

lecciones[pagina].titulo;

document.getElementById("imagen").src=

lecciones[pagina].imagen;

document.getElementById("texto").textContent=

lecciones[pagina].texto;

document.getElementById("datoCurioso").textContent=

lecciones[pagina].dato;

}

// ---------- SIGUIENTE ----------

siguiente.onclick=()=>{

pagina++;

if(pagina<lecciones.length){

mostrarLeccion();

}else{

document.getElementById("contenido").classList.add("oculto");

document.getElementById("quiz").classList.remove("oculto");

mostrarPregunta();

}

};
