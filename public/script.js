function showTextBox() {
  var heartBtn = document.getElementById("heart-btn");
  var textBox = document.getElementById("text-box");
  var click = document.getElementsByClassName("click")[0];

  // Oculta o coração
  heartBtn.style.display = "none";
  click.style.display = "none";

  // Exibe o retângulo com texto
  textBox.style.display = "block";
}
