const heigthInput = document.querySelector("#height").value;
const weigthInput = document.querySelector("#weight").value;
const submitButton = document.querySelector("#submit-button");
const messageImc = document.querySelector(".message");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const heigthValue = heigthInput.value / 100;
  const weigthValue = weigthInput.value;

  if (heigthValue === "" || weigthValue === ""){
    alert("preencha todos os campos");
    return;
  }

  function calculaImc(weight, height) {
    const data = weight / (height * height);
    const total = data.toFixed(2);

    let message;

    if (data < 18.5) {
      message = `Seu imc é de ${total} você está abaixo do peso!`;
    } else if (data >= 18.5 && data <= 24.99) {
      message = `Seu imc é de ${total} vocÊ esrtá com o peso saldavel`;
    } else if (data >= 25 && data <= 29.99) {
      message = `Seu imc é de ${total} você está com sobrepeso!`;
    } else if (data >= 30 && data <= 39.99) {
      message = `Seu imc é de ${total} você está acima do peso`;
    } else if (data > 40) {
      message = `Seu imc é de ${total} Cuidado você esta com obesidade grave!`;
    }


    messageImc.innerHTML = console.log(message);
    heigthInput.value = "";
    weigthInput.value = "";
    return;
  }
  calculaImc(weigthValue, heigthValue);
});


