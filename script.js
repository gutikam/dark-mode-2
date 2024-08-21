let toggle = document.getElementById("container");
let body = document.querySelector("body");

toggle.addEventListener("click", function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    
});