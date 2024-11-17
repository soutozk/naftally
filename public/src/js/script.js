function showTextBox() {
  var heartBtn = document.getElementById("heart-btn");
  var textBox = document.getElementById("text-box");
  var click = document.getElementsByClassName("click")[0];

  // Oculta o botão de coração e o texto "click me"
  heartBtn.style.display = "none";
  click.style.display = "none";

  // Exibe o retângulo com texto com animação
  textBox.style.display = "block";
  textBox.classList.add("animate-text-box");
}
