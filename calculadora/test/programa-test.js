"use strict";
const fork=require("child_process").fork,
      file="calculadora.js";

exports.usuarioPoneTodosLosDatosBien=function(test)
{
  test.expect(1);
  let programaCalculadora=fork(file,["--sumar","1","2"]);//fork ejecuta un programa de nodejs.
  programaCalculadora.on("exit",function(code){//handler de cuando el programa termina
  test.equal(code,0);//0 es que no hay erroes.
  test.done();

});
}

exports.usuarioPoneOpcionQueNoExiste=function(test)
{
  test.expect(1);
  let programaCalculadora=fork(file,["--brincar","1","2"]);

  programaCalculadora.on("exit",function(code){
  test.equal(code,1);
  test.done();

});
}
 
exports.usuarioPoneMala=function(test)
{
  test.expect(1);
  let programaCalculadora=fork(file,["--sumar","hola","2"]);

  programaCalculadora.on("exit",function(code){
  test.equal(code,2);
  test.done();

});
}

exports.usuarioPoneMalb=function(test)
{
  test.expect(1);
  let programaCalculadora=fork(file,["--sumar","1","hola"]);

  programaCalculadora.on("exit",function(code){
  test.equal(code,2);
  test.done();
});
}

exports.usuarioPideHelp=function(test)
{
  test.expect(1);
  let programaCalculadora=fork(file,["--help"]);

  programaCalculadora.on("exit",function(code){
  test.equal(code,0);
  test.done();
});
}

