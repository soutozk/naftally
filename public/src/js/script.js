function showTextBox() {
  var heartBtn = document.getElementById("heart-btn");
  var textBox = document.getElementById("text-box");
  var click = document.getElementsByClassName("click")[0];
  var supportBox = document.getElementById("support-box"); // Adicionando suporte ao novo box

  // Oculta o botão de coração e o texto "click me"
  heartBtn.style.display = "none";
  click.style.display = "none";

  // Exibe o retângulo com texto com animação
  textBox.style.display = "block";
  textBox.classList.add("animate-text-box");

  // Exibe também o suporte box com animação
  if (supportBox) {
    supportBox.style.display = "block";
    supportBox.classList.add("animate-text-box");
  }
}

