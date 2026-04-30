'use strict'
//botao ocultar e mostrar exercicio 1
document.getElementById("botaoOcultar").addEventListener("click", function() {
  document.getElementById("ocultar").style.display = "none";
});

document.getElementById("botaoMostrar").addEventListener("click", function() {
  document.getElementById("ocultar").style.display = "block";
});

//exercicio 2
//botão de trocar o texto do parágrafo
document.getElementById("botaoTrocar").addEventListener("click", function() {

  //criação da variavel para receber o valor do campo de texto
  let novoTexto = document.getElementById("campoTexto");

  //alteração do texto do parágrafo para o valor do campo de texto
  document.getElementById("conteudo").innerHTML = novoTexto.value;
});
//botão de limpar o campo de texto
document.getElementById("botaoLimpar").addEventListener("click",function(){

  document.getElementById("campoTexto").value = "";
  document.getElementById("conteudo").innerHTML = "";
});

//exercicio 3
//verificação formulario
document.getElementById("botaoVerificar").addEventListener("click", function() {

  if(document.getElementById("opcao4").checked){
    alert("Você errou.");
  }else if(document.getElementById("opcao1").checked && 
           document.getElementById("opcao2").checked && 
           document.getElementById("opcao3").checked){
    alert("Você acertou!!!");
  }else{
    alert("Você errou.");
  }
});

//exercicio 4
//adicionar item a lista de tarefas
document.getElementById("botaoAdicionar").addEventListener("click", function() {

  //criação da variavel para receber o valor do campo de texto
  const textoDigitado = document.getElementById("novaTarefa").value; //value recebe o valor

  //criação de um li na lista, um outro item
  const novoItem = document.createElement("li");

  //cria um novo item contendo o conteudo do texto digitado
  novoItem.textContent = textoDigitado;

  //adiciona o conteudo à lista
  document.getElementById("listaTarefas").appendChild(novoItem);
});

//exercício 5
//Conversor de temperatura
document.getElementById("botaoConverter").addEventListener("click",function(){

  //variavel que recebe o valor em Celsius
  let numero = Number(document.getElementById("numeroCelsius").value)

  //cálculo
  const F = Number(1.8 * numero + 32);
  
  //debbug no console
  console.log(F);

  //formatando, se usa crase como se fosse aspas
  //${} número a ser formatado
  document.getElementById("resultadoTemp").textContent = `${numero}°C = ${F}°F`;
});

//exercício 6
//simulador de semaforo

//vermelho
document.getElementById("botaoVermelho").addEventListener("click",function(){
  document.getElementById("circuloVermelho").style.backgroundColor = "red"
});
//amarelo
document.getElementById("botaoAmarelo").addEventListener("click",function(){
  document.getElementById("circuloAmarelo").style.backgroundColor = "yellow"
});
//verde
document.getElementById("botaoVerde").addEventListener("click",function(){
  document.getElementById("circuloVerde").style.backgroundColor = "green"
});

//exercicio 7
//gerador de tabuada

document.getElementById("botaoTabuada").addEventListener("click",function(){
  //leitura da variavel x pelo input do usuario
  let x = parseInt(document.getElementById("numeroTabuada").value)

  //para let i começa com 1, vai até 10, de um em um
  for(let i = 1; i <= 10; i++){
    let resTabuada = x * i; 
    console.log(resTabuada); //vendo se ta certo
    //colocando na lista html
    const outroNumero = document.createElement("li");
    outroNumero.textContent = resTabuada
    document.getElementById("tabuada").appendChild(outroNumero);
  }

  
});

