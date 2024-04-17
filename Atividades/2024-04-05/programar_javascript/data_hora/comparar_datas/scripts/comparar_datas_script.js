function executarQuestao() {
    let continuarPerguntando = true;

    do {
        let retorno = prompt('Informe uma data (formato "00/00/0000"):');

        if (retorno != null) {
            if (validarData(retorno)) {
                informarDiferencaDatas(retorno);
                continuarPerguntando = false;
            }
            else {
                alert('Informe uma data válida, no formato "00/00/0000".');
            }
        }
        else {
            continuarPerguntando = false;
        }
    } while (continuarPerguntando);
}

function validarData(data) {
    const regEx = /^\d{2}\/\d{2}\/\d{4}$/;
    return regEx.test(data);
}

function informarDiferencaDatas(data) {
    let dataArray = String(data).split('/');

    let dataAtual = new Date();
    let dataInformada = new Date(`${dataArray[2]}-${dataArray[1]}-${dataArray[0]} 00:00:00`);

    if ((dataInformada - dataAtual) <= 0) {
        alert("O dia de hoje é maior ou igual que a data informada.")
        return;
    }
    
    let diasDiferenca = obterDiferencaDatasEmDias(dataAtual, dataInformada);
    let mesesDiferenca = obterDiferencaDatasEmMeses(dataAtual, dataInformada);
    let anosDiferenca = obterDiferencaDatasEmAnos(dataAtual, dataInformada);

    let apresentarData = 
    `
    Restam 
    
    ${diasDiferenca} ${diasDiferenca == 1 ? "dia" : "dias"},
    ${mesesDiferenca} ${mesesDiferenca == 1 ? "mês" : "meses"} e
    ${anosDiferenca} ${anosDiferenca == 1 ? "ano" : "anos"}.
    `;

    alert(apresentarData);
}

const obterDiferencaDatasEmDias = (dataInicial, dataFinal) => 
    Math.trunc(
        (dataFinal.getTime() - dataInicial.getTime()) / (1000 * 3600 * 24)
    );

const obterDiferencaDatasEmMeses = (dataInicial, dataFinal) => 
    Math.max(
        (dataFinal.getFullYear() - dataInicial.getFullYear()) * 12 + dataFinal.getMonth() - dataInicial.getMonth(),
        0
    );

const obterDiferencaDatasEmAnos = (dataInicial, dataFinal) => 
    Math.trunc(obterDiferencaDatasEmMeses(dataInicial, dataFinal) / 12);
