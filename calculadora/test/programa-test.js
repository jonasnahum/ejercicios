"use strict";
const programa=require("./../calculadora.js"),
      validaciones=require("./../modules/validacionesModule.js");
exports.LaOpcionInvalidaEsFalse=function(test)
{
        test.expect(1);
//arrange
	let opcionMalaEnviada = programa.jonasInput("--raiz");
        let opciones=["--sumar","--restar","--multiplicar","--dividir","--help"];
	let expected=false;
//act
        let actual = validaciones.validarOpcion(opciones,opcionMalaEnviada);
//assert
        test.equal(actual,expected);
        test.done();
}

