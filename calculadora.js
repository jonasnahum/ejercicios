const calculadora=require("./calculadoraModule.js");
console.log("bienvenidos a la calculadora");

switch(process.argv[2]){
	case "--sumar":
	var total= calculadora.sumar(process.argv[3],process.argv[4]);
	console.log(total);
	break;
        case "--restar":
        var total= calculadora.restar(process.argv[3],process.argv[4]);
        console.log(total);
        break;
        case "--multiplicar":
        var total= calculadora.multiplicar(process.argv[3],process.argv[4]);
        console.log(total);
        break;
        case "--dividir":
        var total= calculadora.dividir(process.argv[3],process.argv[4]);
        console.log(total);
        break;
}

