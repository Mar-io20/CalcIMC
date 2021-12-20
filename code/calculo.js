//Selecionar o elemento da dom

const nameInput = document.querySelector("#name");
const heigthInput = document.querySelector("#heigth");
const weigthInput = document.querySelector("#weigth");
const submitButton = document.querySelector("#submit-button");
const messageImc = document.querySelector(".message");

// Adicionar Evento no click do button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const nameValue = nameInput.value;
  const heigthValue = heigthInput.value / 100;
  const weigthValue = weigthInput.value;

  if (nameValue === "" || heigthValue === "" || weigthValue === "") {
    alert("Preencha todos os campos");
    return;
  }

  function calculaImc(weigth, heigth) {
    const data = weigth / (heigth * heigth);
    const total = data.toFixed(2);

    let message;

    if (data < 18.5) {
      message = `${nameValue} seu imc é de ${total} você está abaixo do peso!`;
    } else if (data >= 18.5 && data <= 24.99) {
      message = `${nameValue} seu imc é de ${total} você está com o peso saudável!`;
    } else if (data >= 25 && data <= 29.99) {
      message = `${nameValue} seu imc é de ${total} você está com sobrepeso!`;
    } else if (data >= 30 && data <= 39.99) {
      message = `${nameValue} seu imc é de ${total} você está obeso!`;
    } else if (data > 40) {
      message = `${nameValue} seu imc é de ${total} você está com obesidade grave!`;
    }

    messageImc.innerHTML = message;
    nameInput.value = "";
    heigthInput.value = "";
    weigthInput.value = "";
    return;
  }
  calculaImc(weigthValue, heigthValue);
});