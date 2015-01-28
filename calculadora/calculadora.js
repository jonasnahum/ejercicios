"use strict";

const calculadora=require("./modules/calculadoraModule.js"),
      validaciones=require("./modules/validacionesModule.js"),
      programa=require("./calculadora.js");

exports.jonasInput=function(opcion){
let opcionEntrada=opcion,
    a=process.argv[3],
    b=process.argv[4],
    opciones=["--sumar","--restar","--multiplicar","--dividir","--help"];
    programa.jonasProbarOpcion(opciones,opcionEntrada)
}


function help(){
	console.log("uso:");
	console.log("node --harmony calculadora.js --<opcion> a b");
	console.log("opciones: sumar, restar, multiplicar, dividir");
	console.log("a y b deben ser valores numericos");
}

exports.jonasProbarOpcion=function(opciones,opcionEntrada){
	var opciones=opciones;
	var opcion=opcionEntrada;
	var jonasResult=validaciones.validarOpcion(opciones,opcion);
	if(!jonasResult)
	{
		  help();
		  return;
	}
}

if(programa.jonasProbarOpcion.opcion!=="--help")
{
	if(!validaciones.validarNumero(programa.jonasInput.a)||!validaciones.validarNumero(programa.jonasInput.b))
	{
 	  help();
	  return;
	}
}

switch(programa.jonasInput.opcionEntrada){
	case "--help":
	help();
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

