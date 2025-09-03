const title = document.getElementById("title");
const buttons = document.querySelectorAll(".color-buttons button");

function changeColor(color) {
  document.body.style.backgroundColor = color;
  title.innerText = `Background is now ${color.toUpperCase()}!`;

  buttons.forEach(btn => btn.classList.remove("active"));
  const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase() === color);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function resetColor() {
  document.body.style.backgroundColor = "white";
  title.innerText = "Background reset to WHITE!";
  buttons.forEach(btn => btn.classList.remove("active"));
}
