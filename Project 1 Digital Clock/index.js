let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("second");
let ampmEl = document.getElementById("ampm");

function uddateData() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am";

    
    if( h > 12 ) {
        h -= 12; // h = h - 12
        ampm = "Pm";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(() => {
        uddateData();
    },1000)
}

uddateData()