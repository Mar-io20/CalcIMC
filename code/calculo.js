let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
const btn = document.querySelector(".btn");
const messageImc = document.querySelector(".message");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let valorPeso = Number(peso.value);
  let valorAltura = Number(altura.value);
  let imc = valorPeso / (valorAltura * valorAltura);
  const calculo = console.log(imc.toFixed(2));

  let resultado = document.querySelector(".span");
  resultado = calculo 
  
});
