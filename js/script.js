const DOMStrings = {
    btn: '#btn-solicitar',
    adicionaLivro: '#adiciona-livro',
    tabelaLivro: '#tabela-livro',
}

document.querySelector(DOMStrings.btn).addEventListener('click', function (e) {
    e.preventDefault();
    let form = document.querySelector(DOMStrings.adicionaLivro);
    if (form.vinculo.value === 'Selecione vínculo') {
        return alert('Opção inválida! Selecione um opção.')
    }
    else if (form.tituloLivro.value === '' || form.autor.value === '') {
        return alert('É necessário preencher os campos título e autor.');
    }
    else if (form.ano.value < 1899 || form.ano.value > 2020) {
        return alert('Ano não permitido! Informe novamente.');
    }
    else {
        let livro = criaLivro(form);

        var livroTr = document.createElement("tr");
        var vinculoTd = document.createElement("td");
        var tituloTd = document.createElement("td");
        var autorTd = document.createElement("td");
        var edicaoTd = document.createElement("td");
        var issnTd = document.createElement("td");
        var anoTd = document.createElement("td");
        var editoraTd = document.createElement("td");

        vinculoTd.textContent = livro.vinculo;
        tituloTd.textContent = livro.tituloLivro;
        autorTd.textContent = livro.autor;
        edicaoTd.textContent = livro.edicao;
        issnTd.textContent = livro.issn;
        anoTd.textContent = livro.ano;
        editoraTd.textContent = livro.editora;

        livroTr.appendChild(vinculoTd);
        livroTr.appendChild(tituloTd);
        livroTr.appendChild(autorTd);
        livroTr.appendChild(edicaoTd);
        livroTr.appendChild(issnTd);
        livroTr.appendChild(anoTd);
        livroTr.appendChild(editoraTd);

        var tabelaLivro = document.querySelector(DOMStrings.tabelaLivro);
        tabelaLivro.appendChild(livroTr);

        form.reset();
    }
})

function criaLivro(form) {
    let livro = {
        vinculo: form.vinculo.value,
        tituloLivro: form.tituloLivro.value,
        autor: form.autor.value,
        edicao: form.edicao.value,
        issn: form.issn.value,
        ano: form.ano.value,
        editora: form.editora.value
    }
    return livro;
}

function desabilitarCampos() {
    var vinculo = document.getElementById('vinculo');
    var tituloLivro = document.getElementById('tituloLivro');
    var autor = document.getElementById('autor');
    var edicao = document.getElementById('edicao');
    var issn = document.getElementById('issn');
    var ano = document.getElementById('ano');
    var editora = document.getElementById('editora');

    vinculo.disabled = 'true';
    tituloLivro.disabled = 'true';
    autor.disabled = 'true';
    edicao.disabled = 'true';
    issn.disabled = 'true';
    ano.disabled = 'true';
    editora.disabled = 'true';
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var time = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(time);
            desabilitarCampos();
        }
    }, 1000);
}
window.onload = function iniciarTimer() {
    var duration = (60*60) - 1; // Define quanto tempo dura
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
}
