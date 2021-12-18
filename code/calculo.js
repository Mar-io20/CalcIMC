let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let valorPeso = Number(peso.value);
  let valorAltura = Number(altura.value);
  let imc = valorPeso / (valorAltura * valorAltura);
  console.log(imc.toFixed(2));


});
