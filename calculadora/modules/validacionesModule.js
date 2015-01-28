"use strict";
exports.validarOpcion=function(opcionesValidas, opcionSeleccionada)
{
	if(opcionesValidas.indexOf(opcionSeleccionada)!==-1)
	{
		return true;
	}	
	else
	{
		console.error("la opcion " + opcionSeleccionada + " no es valida");
		return false;
	}
}

exports.validarNumero=function(numero)
{
  numero=parseInt(numero);
  if(isNaN(numero))
  {
    console.error(numero + " debe ser un numero");
    return false;
  }
  return true;
}
