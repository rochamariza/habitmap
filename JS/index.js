const btn = document.getElementById("btn")
const input = document.getElementById("escrever")
const habitos = document.querySelector(".habitos")
let index = 0
function lista(){
    return `<div class="habitos">
                <h1><span>${index} - </span>${input.value}</h1>
            </div>`
}
function criar(){
    let opa = document.createElement("div")
    opa.insertAdjacentElement("afterend", opa)
    index++;
    opa.innerHTML = lista();
    habitos.appendChild(opa)
}
