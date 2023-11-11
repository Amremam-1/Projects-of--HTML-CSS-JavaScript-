// const containerEl = document.querySelector(".container");

// for (let i = 0; i < 30; i++) {
//   const colorContainerEl = document.createElement("div");
//   colorContainerEl.classList.add("color-container");
//   containerEl.appendChild(colorContainerEl);
// }

// const colorContainerEls = document.querySelectorAll(".color-container");

// generateColors();
// function generateColors() {
//   colorContainerEls.forEach((colorContainerEl) => {
//     const newColorCode = randomColor();
//     colorContainerEl.style.backgroundColor = "#" + newColorCode;
//     colorContainerEl.innerText = "#" + newColorCode;
//   });
// }

// function randomColor() {
//   const chars = "0123456789abcdef";
//   const colorCodeLength = 6;
//   let colorCode = "";

//   for (let i = 0; i < colorCodeLength; i++) {
//     const randomNum = Math.floor(Math.random() * chars.length);
//     colorCode += chars.substring(randomNum, randomNum + 1);
//   }
//   return colorCode;
// }

const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

// Variable All classes
const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newCode = randomCode();
    colorContainerEl.style.backgroundColor = "#" + newCode;
    colorContainerEl.innerText = "#" + newCode;
  });
}

// Function randomCode
function randomCode() {
  const chars = "123456789abcdef";
  const colorCodeLength = 6;
  let codeColor = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    codeColor += chars.substring(randomNum, randomNum + 1);
  }
  return codeColor;
}
