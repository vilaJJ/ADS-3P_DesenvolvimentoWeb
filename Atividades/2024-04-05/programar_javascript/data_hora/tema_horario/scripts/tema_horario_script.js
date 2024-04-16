setInterval(executarQuestao);

function executarQuestao() {
    let dataHoraAtual = new Date();

    let horaAtual = dataHoraAtual.getHours();
    let minutoAtual = dataHoraAtual.getMinutes();
    let segundoAtual = dataHoraAtual.getSeconds();

    exibirHorario(horaAtual, minutoAtual, segundoAtual);
    definirCores(horaAtual);
}

function exibirHorario(hora, minuto, segundo) {
    let horaExibir = hora < 10 ? `0${hora}` : hora;
    let minutoExibir = minuto < 10 ? `0${minuto}` : minuto;
    let segundoExibir = segundo < 10 ? `0${segundo}` : segundo;

    let horario = `${horaExibir}:${minutoExibir}:${segundoExibir}`;

    let relogio = document.getElementById("relogio");
    relogio.innerHTML = horario;
}

function definirCores(horaAtual) {
    let corFundo, corTexto;

    if (horaAtual >= 0 && horaAtual < 6) {
        corFundo = "blue";
        corTexto = "white";
    } 
    else if (horaAtual >= 6 && horaAtual < 12) {
        corFundo = "white";
        corTexto = "black";
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        corFundo = "yellow";
        corTexto = "black";
    }
    else /* horaAtual >= 18 && horaAtual < 24 */ {
        corFundo = "black";
        corTexto = "white";
    }

    let body = document.getElementsByTagName("body")[0];
    body.style = `background-color: ${corFundo}; color: ${corTexto}`;
}