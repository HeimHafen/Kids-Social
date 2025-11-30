// kids-social: erste JS-Zeile 😊

const demoButton = document.getElementById("demoButton");
const demoMessage = document.getElementById("demoMessage");

if (demoButton && demoMessage) {
  demoButton.addEventListener("click", () => {
    demoMessage.textContent =
      "Hi! Hier wird später der sichere Bereich für Kids sein. 🔐";
  });
}