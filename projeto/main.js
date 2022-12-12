
function openCloseSidebar(){
    menu = document.getElementById("sidebar-lav");
    const disp = window.getComputedStyle(menu).display;

    if(disp === "none"){
        document.getElementById("sidebar-lav").style.display = "block";
        document.getElementById("sidebar-main2").style.display = "none";
    }else{
        document.getElementById("sidebar-lav").style.display = "none";
        document.getElementById("sidebar-main2").style.display = "block";    
    }

}

function openDrop(id){
    drop = document.getElementById(id);
    //Os childNodes server para pegar as tags dentro de uma
    if(drop.childNodes[7].className === "dropdown-lol-oculto"){
        //muda a classe para o dropDown abrir
        drop.childNodes[7].className = "dropdown-lol";
        //muda o icone da flecha
        drop.childNodes[3].childNodes[1].childNodes[1].className = "fa-sharp fa-solid fa-chevron-down";
    }else{
        drop.childNodes[7].className = "dropdown-lol-oculto";
        drop.childNodes[3].childNodes[1].childNodes[1].className = "fa-sharp fa-solid fa-chevron-up";
    }
}

function addRemPecaRoupa(acao){
    let lista = document.getElementById("listaPeca");

    if(acao === 'add'){
        let clone = lista.childNodes[1].cloneNode(true);
        let num = lista.childElementCount + 1;
        clone.id = "peca" + num;

        clone.childNodes[1].childNodes[1].childNodes[1].textContent = 
            lista.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent.replace(1,num);

        let idpeca = clone.childNodes[1].childNodes[3].childNodes[1];
        let qtdepeca = clone.childNodes[3].childNodes[3].childNodes[3];
        
        idpeca.setAttribute("name", "peca[peca" + num + "][id]");
        qtdepeca.setAttribute("name", "peca[peca" + num + "][qtde]");
        qtdepeca.value = "1";

        let buttonMenos = clone.childNodes[3].childNodes[1];
        let buttonMais = clone.childNodes[3].childNodes[5];

        buttonMais.setAttribute("onclick", "qtdePecaRoupa('+', 'peca"+num+"')");
        buttonMenos.setAttribute("onclick", "qtdePecaRoupa('-', 'peca"+num+"')");
        
        lista.appendChild(clone);
    }else if(acao === 'rem' && lista.childElementCount > 1){
        lista.removeChild(lista.lastChild);
    }
}

function qtdePecaRoupa(acao, id){
    let peca = document.getElementById(id);
    let input = peca.childNodes[3].childNodes[3].childNodes[3];
    
    if(isNaN(parseInt(input.value))){
        input.value = 0;
    }else if(acao === '+'){
        input.value = parseInt(input.value) + 1;
    }else if(acao === '-' && parseInt(input.value) > 1){
        input.value = parseInt(input.value) - 1;
    }
}

function manPeca(acao){
    let input = document.getElementById("manPecaId");

    if(isNaN(parseInt(input.value))){
        input.value = 0;
    }else if(acao === '+'){
        input.value = parseInt(input.value) + 1;
    }else if(acao === '-' && parseInt(input.value) > 1){
        input.value = parseInt(input.value) - 1;
    }
}