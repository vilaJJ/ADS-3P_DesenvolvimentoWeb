function obterFatorial(valor) {
    if (valor <= 0) {
        return 1;
    }

    return valor * obterFatorial(valor - 1);
}

function obterCombinacao(numero, amostra) {
    var retorno = obterFatorial(numero) / (obterFatorial(amostra) * obterFatorial(numero - amostra));
    return retorno;
}