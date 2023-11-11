const textEl = document.querySelector("#textarea");
const spanOne = document.querySelector("#total-counter");
const spanTwo = document.querySelector("#remaining-counter");


textEl.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter()

function updateCounter() {
    spanOne.innerText = textEl.value.length;
    spanTwo.innerText = textEl.getAttribute("maxLength") - spanOne.innerText;
}

let btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (event) =>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    btnEl.style.setProperty("--xPos" , x + "px");
    btnEl.style.setProperty("--yPos" , y + "px");
})