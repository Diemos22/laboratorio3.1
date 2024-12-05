// Paso 1 declaracion de variables
let num1, num2;
let operacion;

//paso 2 funcion para realizar operacion

function realizaroperacion(num1,num2,operacion){ //inicializacion de variable y funciones
 if(operacion === "suma"){ //condicional para la suma
    return num1 + num2; //operacion para sumar

 } else if (operacion === "resta"){
    return num1 - num2;


} else if (operacion === "multiplicacion"){
    return num1 * num2;

}else if (operacion === "Division"){
    if(num2 == 0){
        return "este numero no esta permitido"
    }
    return num1 / num2;

}else {
    return "operacion no valida";
} 

}

//paso 3 : Bucle para realizar multiples operaciones

while(true){
    //solicitar al usuario que ingrese el primer numero
    num1 = parseFloat(prompt("ingrese el primer numero (o escriba salir para terminar) "));
// si la entrada no es un numero entonces este termine el bucle

if(isNaN(num1)){
    console.log("Adios");
    break;

}

 //solicitar al usuario que ingrese el segundo numero
 
    //solicitar al usuario que ingrese el segundo numero
    num2 = parseFloat(prompt("ingrese el segundo numero"));

    // si el segundo numero no es valido
if(isNaN(num2)){
 console.log("por favor ingrese un numero valido");
 continue; //regresa al inicio del bucle

}

    //Solicitar al usuario que ingrese la operacion deseada

    operacion = prompt ("ingrese la operacion(suma,resta,multiplicacion,division)");

    // si el usuario ingresa "salir" terminar bucle

    if(operacion === "salir"){
        console.log("Adios");
        break;

    }
//llama la funcion operaciones con los datos proporcionados
const resultado =realizaroperacion(num1,num2,operacion.toLocaleLowerCase());

console.log(`resultado: ${resultado}`);

 }


