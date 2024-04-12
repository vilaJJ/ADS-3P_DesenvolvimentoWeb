function executarQuestao() {
    let numero = Number(prompt("Combinação: Informe o número"));
    let amostra = Number(prompt("Combinação: Informe o valor de amostra"))
    let combinacao = obterCombinacao(numero, amostra);

    alert(`A combinação do número "${numero}" e amostra "${amostra}" é: ${combinacao}.`)
}

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