
const navbarEl = document.querySelector(".navbar");
const textAreaEl = document.querySelector(".text-area");

// console.log(navbarEl.offsetHeight)
// console.log(textAreaEl.offsitTop)

window.addEventListener("scroll" , () => {
    if (window.scrollY > textAreaEl.offsetTop - navbarEl.offsetHeight -50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})