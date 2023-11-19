const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calcularIdade() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date").value);

    let mesAniver, diaAniver, anoAniver;

    let aniverDetalhes = {
        data: inputDate.getDate(),
        mes: inputDate.getMonth()+1,
        ano: inputDate.getFullYear()
    }

    let anoAtual = today.getFullYear();
    let mesAtual = today.getMonth();
    let diaAtual = today.getDate();

    leapChecker (anoAtual);

    if (aniverDetalhes.ano > anoAtual || (aniverDetalhes.mes > mesAtual && aniverDetalhes.ano == anoAtual) || aniverDetalhes.date > diaAtual && aniverDetalhes.mes == mesAtual && aniverDetalhes.ano == anoAtual) {
        alert("Algo deu errado!");
        return;
    }

    anoAniver = anoAtual - aniverDetalhes.ano;
    mesAniver = mesAtual - aniverDetalhes.mes;
    diaAniver = diaAtual - aniverDetalhes.dia;
};

function leapChecker(ano) {
    if(ano % 4 == 0 || (ano % 100 == 0 && ano % 400 == 0)) {
        meses[1] = 29;
    } else {
        meses[1] = 28;
    }

}