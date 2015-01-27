const saludo=require("./saludoModule.js");
console.log("bienvenido al programa de saludo");

switch(process.argv[2]){
        case "--nombre":
        var result= saludo.saludar(process.argv[3],process.argv[4]);
        console.log(result);
        break;
}

