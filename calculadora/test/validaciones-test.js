"use strict";
const validador=require("./../modules/validacionesModule.js");

exports.opcionPresenteEnElArray=function(test)
{
  test.expect(1);
//arrage
  let opciones=["uno","dos","tres"];
  let opcionSeleccionada="dos";
//act
  let resultado=validador.validarOpcion(opciones,opcionSeleccionada);
//assert
  test.equal(resultado, true);
  test.done();  
}

exports.opcionNoPresenteEnElArray=function(test)
{
  test.expect(1);
//arrage
  let opciones=["uno","dos","tres"];
  let opcionSeleccionada="cuatro";
//act
  let resultado=validador.validarOpcion(opciones,opcionSeleccionada);
//assert
  test.equal(resultado, false);
  test.done();

}

exports.numeroValido=function(test)
{
  test.expect(1);
//arrange
  let numero=5;
//act
  let resultado=validador.validarNumero(numero);
//assert
  test.equal(resultado,true);
  test.done();
}

exports.numeroIsNaN=function(test)
{
  test.expect(1);
//arrange
  let numero="k";
//act
  let resultado=validador.validarNumero(numero);
//assert
  test.equal(resultado,false);
  test.done();
}

