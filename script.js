const modo = document.getElementById("modo");
const palavra = document.getElementById("palavra");
const button = document.getElementById("botao");

button.addEventListener("click", mudarModo);

function mudarModo(){
    if(modo.classList.contains("tema_claro")){
        modo.classList.remove("tema_claro");
        modo.classList.add("tema_escuro");
        palavra.textContent = "Dark";

        button.classList.remove("botao_escuro");
        button.classList.add("botao_claro")
        button.style.justifyContent = "flex-end"
        palavra.style.color = "#505050";


    }else{
        modo.classList.remove("tema_escuro");
        modo.classList.add("tema_claro");
        palavra.textContent = "Light";
        button.classList.remove("botao_claro");
        button.classList.add("botao_escuro");
        button.style.justifyContent = "flex-start"
        palavra.style.color = "#e1ceff"
    }
}