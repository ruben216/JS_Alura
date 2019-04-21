var text = document.querySelector(".titulo_1");
var botaoAdd = document.querySelector("#adicionar-paciente");

var dia = new Date();
var dia_1 = dia.getDate();

if((dia_1 % 2) == 0){
        text.textContent = "Vegarecida Par";
} else {
    text.textContent = "Vegarecida ImPar";
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
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2); 
    }
       
}

text.addEventListener("click",function(){
    alert("These violent delights has violent ends...");
});

function mostraMsg() {
    alert("Deixa a bichinha em paz...");
}

botaoAdd.addEventListener("click",function (event){
    event.preventDefault();
    console.log("olá...");
    var form = document.querySelector("#form_add");
    let nome = form.nome.value;
    let altura = form.altura.value;
    let peso = form.peso.value;
    let gordura = form.gordura.value;
    
    console.log(altura+nome+peso+gordura);

    var pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome; 
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura
    imcTd.textContent = (peso/(altura*altura));

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


} );


let linhas = document.querySelectorAll("#tabela-pacientes");
for(let i=0;i<linhas.length;i++){
    linhas[i].classList.add("teste_css");
    i++;
}


var inputFrase = document.querySelector('.frase');
var obotao = document.querySelector('.obotao');
var copia = document.querySelector('.copia');
obotao.addEventListener("click", botaoHandler);

    function botaoHandler() {
        copia.textContent = inputFrase.value;
        inputFrase.value = "";
        
    }

    

