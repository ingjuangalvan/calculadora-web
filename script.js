let pantalla = document.getElementById("pantalla");
let historial = document.getElementById("historial");
let nuevoCalculo = false;


function agregar(valor){

    if(nuevoCalculo){
        pantalla.value = "";
        nuevoCalculo = false;
    }

    pantalla.value += valor;
}

function limpiar(){
    pantalla.value = "";
}

function borrar(){
    pantalla.value = pantalla.value.slice(0,-1);
}

function calcular(){
    try{

        if(pantalla.value.includes("/0")){
            pantalla.value="Error";
            return;
        }

        let resultado = eval(pantalla.value);

        historial.innerHTML += pantalla.value + " = " + resultado + "<br>";

        pantalla.value = resultado;
        nuevoCalculo = true;

    }catch{
        pantalla.value="Error";
    }
}

function modo(){
    document.body.classList.toggle("light");
}

/* soporte teclado */

document.addEventListener("keydown",function(event){

if(event.key >=0 && event.key <=9){
agregar(event.key);
}

if(event.key=="+") agregar("+");
if(event.key=="-") agregar("-");
if(event.key=="*") agregar("*");
if(event.key=="/") agregar("/");

if(event.key=="Enter") calcular();

if(event.key=="Backspace") borrar();

if(event.key=="Escape") limpiar();

});