"use strict";
const calculadoraModule=require("./../modules/calculadoraModule.js");
exports.testSumar=function(test){
	test.expect(1);
//arrange
	var a=3;
	var b=4;
//act
	var pruebaUno = calculadoraModule.sumar(a,b);
//assert
	test.equal(pruebaUno,7,"sumando tres mas cuatro");
	test.done();
};
exports.testRestar=function(test){
	test.expect(1);
//arrange
        var a=4;
        var b=3;
//act
        var pruebaUno = calculadoraModule.restar(a,b);
//assert
        test.equal(pruebaUno,1,"restando cuatro menos tres");
	test.done();
};
exports.testMultiplicar=function(test){
        test.expect(1);
//arrange
        var a=4;
        var b=3;
//act
        var pruebaUno = calculadoraModule.multiplicar(a,b);
//assert
        test.equal(pruebaUno,12,"multiplicando cuatro por tres");
	test.done();
};
exports.testDividir=function(test){
        test.expect(1);
//arrange
        var a=10;
        var b=2;
//act
        var pruebaUno = calculadoraModule.dividir(a,b);
//assert
        test.equal(pruebaUno,5,"dividiendo tres entre dos");
	test.done();
};

