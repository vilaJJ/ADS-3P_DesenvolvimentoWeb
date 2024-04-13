function executarQuestaoAssincrona(milisegundos) {
    new Promise(resolve => setTimeout(resolve, milisegundos)).then(() => {
        let botaoAction = document.getElementById("button_action");
        let texto = document.getElementById("textarea_insercao");

        if (botaoAction.innerHTML == "Parar") {
            let textoModificado = definirUltimaLetraComoPrimeira(texto.value);
            texto.value = textoModificado;
        } 

        executarQuestaoAssincrona(milisegundos);
    });
}

async function alterarEstado() {
    let botaoAction = document.getElementById("button_action");
    let inputTexto = document.getElementById("textarea_insercao");

    if (botaoAction.innerHTML == "Iniciar") {
        botaoAction.innerHTML = "Parar";
        botaoAction.className = "btn btn-secondary botao_questao";
        inputTexto.readOnly = true;
    }
    else {
        botaoAction.innerHTML = "Iniciar";
        botaoAction.className = "btn btn-primary botao_questao";
        inputTexto.readOnly = false;
    }
}

function definirUltimaLetraComoPrimeira(entrada) {
    let texto = String(entrada);

    if (texto.length == 0) {
        return "";
    }
    if (texto.length == 1) {
        return texto;
    }

    let textoSemPrimeiroCaracter = texto.substring(1);
    let textoUltimaLetraComoPrimeira = textoSemPrimeiroCaracter + texto[0];
    
    return textoUltimaLetraComoPrimeira;
}