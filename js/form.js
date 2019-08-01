
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click",function (event){
    event.preventDefault();
    console.log("olá...");
    var form = document.querySelector("#form_add");
    //cria objeto a partir do Form
    var paciente = obtemObjetoForm(form);
    console.log(paciente);
   
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

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

function obtemObjetoForm(form) {
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}    

function montaTr(paciente) {
    
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome,"info-nome");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado,classe){

    let dadoTd = document.createElement("td");
    dadoTd.textContent = dado;
    dadoTd.classList.add(classe);

    return dadoTd;

}