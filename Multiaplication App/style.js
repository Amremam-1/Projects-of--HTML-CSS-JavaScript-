// let scoreEl = document.getElementById("score");
// let questionEl = document.getElementById("question")
// let formEl = document.getElementById("form");
// let inputEl = document.getElementById("input");

// const num1 = Math.ceil(Math.random()*10);
// const num2 = Math.ceil(Math.random()*10);

// questionEl.innerText =  `What is ${num1} multiply by ${num2}?`;

// const correctAns = num1 * num2;

// let score = JSON.parse(localStorage.getItem("score"));

// if(!score){
//     score = 0;
// }
// scoreEl.innerText = `score: ${score}`;

// formEl.addEventListener("submit" , () =>{
//     let userAns = +inputEl.value;

//     if (userAns === correctAns) {
//         score++
//         updataLocalStorage();
//     }else{
//         score--
//         updataLocalStorage();
//     }
// })

// function updataLocalStorage() {
// localStorage.setItem("score",JSON.stringify(score))
// }
// localStorage.clear();

const scoreEl = document.getElementById("score");;
const question  = document.getElementById("question");
const inputEl = document.getElementById("input");
const informEl = document.getElementById("form");

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

question.innerText = `What is ${num1} multiply by ${num2}`;

let correctAns = num1 * num2 ;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scoreEl.innerText = `score: ${score}`

informEl.addEventListener("submit", ()=>{
    let userAns = +inputEl.value ;

    if (userAns === correctAns){
        score++
        updataLocalStroage() 
    }else{
        score--
        updataLocalStroage() 
    }
})

function updataLocalStroage() {
    localStorage.setItem("score",JSON.stringify(score));
}

localStorage.clear()