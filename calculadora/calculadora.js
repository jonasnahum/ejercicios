"use strict";

const calculadora=require("./modules/calculadoraModule.js"),
      validaciones=require("./modules/validacionesModule.js");
      

let opcion=process.argv[2],
    a=parseInt(process.argv[3]),
    b=parseInt(process.argv[4]),
    opciones=["--sumar","--restar","--multiplicar","--dividir","--help"];

function help(){
	console.log("uso:");
	console.log("node --harmony calculadora.js --<opcion> a b");
	console.log("opciones: sumar, restar, multiplicar, dividir");
	console.log("a y b deben ser valores numericos");
}
	if(!validaciones.validarOpcion(opciones,opcion))
	{
		  help();
		  process.exit(1);//usuario selecciona una opcion que no esta en la lista.
	}

if(opcion!=="--help")
{
	if(!validaciones.validarNumero(a)||!validaciones.validarNumero(b))
	{
 	  help();
	  process.exit(2);//el usuario puso un valor no numérico.
	}
}

switch(opcion){
	case "--help":
	help();
	process.exit(0);//aquI se termina el programa exitosamente.
	break;
	case "--sumar":
	var total= calculadora.sumar(a,b);
	console.log(total);
	break;
        case "--restar":
        var total= calculadora.restar(a,b);
        console.log(total);
        break;
        case "--multiplicar":
        var total= calculadora.multiplicar(a,b);
        console.log(total);
        break;
        case "--dividir":
        var total= calculadora.dividir(a,b);
        console.log(total);
        break;
}
process.exit(0);//termina el programa bien.

