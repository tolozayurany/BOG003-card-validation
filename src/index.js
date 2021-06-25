import validator from './validator.js';    

console.log(validator);

function showPage2() {
    document.getElementById("pag1").style.display = "none";
    document.getElementById("pag2").removeAttribute("hidden");
    document.getElementById("pag2").style.display = "block";
}


function showPage1() {
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag1").style.display = "block";
}
