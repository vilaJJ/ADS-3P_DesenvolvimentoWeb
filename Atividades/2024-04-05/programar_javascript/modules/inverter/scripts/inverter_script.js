function executarQuestao() {
    let textoInserido = document.getElementById("textarea_insercao").value;
    let textoInvertido = inverter(textoInserido);

    document.getElementById("textarea_invertido").innerHTML = textoInvertido;
    return textoInvertido;
}

function inverter(entrada) {
    let retorno = "";

    for (let index = entrada.length - 1; index >= 0; index--) {
        retorno += entrada[index];
    }

    return retorno;
}