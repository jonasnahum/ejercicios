"use strict";
const saludoModule=require("./../saludoModule.js");
exports.testSaludar=function(test){
        test.expect(1);
//arrange
        var nombre="jonas";
        var apellido="jimenez";
        var saludo= "hola que tal: ";
//act
        var pruebaUno = saludoModule.saludar(nombre,apellido);
//assert
        test.equal(pruebaUno,"hola que tal: jonasjimenez","saludando jonas jimenez");
        test.done();
};
