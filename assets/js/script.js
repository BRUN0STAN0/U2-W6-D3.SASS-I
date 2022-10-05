let body = document.querySelector("body");

for (let i = 1; i < 100; i++) {
    let button = body.appendChild(document.createElement("button"))
    button.classList.add("btn", "btn-success", "button-"+i);
    button.setAttribute("onclick", "premiPulsante(event)");
     button.textContent = i
    
}

function premiPulsante(eventoclick) {
    eventoclick.target.classList.toggle("ingrandisci");
}