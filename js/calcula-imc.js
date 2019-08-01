var text = document.querySelector(".titulo_1");


var dia = new Date();
var dia_1 = dia.getDate();

if((dia_1 % 2) == 0){
        text.textContent = "Vegarecida Par :" + dia_1;
} else {
    text.textContent = "Vegarecida ImPar : " + dia_1;
}

var pacientes = document.querySelectorAll(".paciente");



console.log(pacientes.classList);

for(var i = 0; i < pacientes.length; i++){
    var pesoValido = true;
    var alturaValida = true;
    var paciente = pacientes[i];
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");

    if(peso < 0 || peso > 200){
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Peso inválido!";
    } else if (altura < 0 || altura > 3){
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Altura inválida!";
    } 
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
       
}

// text.addEventListener("click",function(){
//     alert("These violent delights has violent ends...");
// });

// function mostraMsg() {
//     alert("Deixa a bichinha em paz...");
// }

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2); 
}