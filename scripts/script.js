const btnCriptografar = document.querySelector('.btn-cript')
const btnDescriptografar = document.querySelector('.btn-descript')
const btnCopiar = document.querySelector('.btn-copiar')

const primeiroTexto = document.querySelector('.primeiro-texto')
const textoResult = document.querySelector('.txt-result')


btnCriptografar.addEventListener('click', () => {
    if(primeiroTexto.value != '') {
        criptografar()
        mostraResultado()
    }
})

btnDescriptografar.addEventListener('click', () => {
    descriptografar()
})

btnCopiar.addEventListener('click', () => {
    copy()
})


primeiroTexto.addEventListener('keyup', () => {
    primeiroTexto.value = primeiroTexto.value.toLowerCase()

    if(!primeiroTexto.value) {
        esconderResultado()
    }
})


function criptografar() {
    let texto = document.querySelector('.primeiro-texto').value

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    document.querySelector('.txt-result').value = texto;
}

function descriptografar() {
    let texto = document.querySelector('.txt-result').value

    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");

    document.querySelector('.txt-result').value = texto;
}

function mostraResultado() {
    
    let containerImg = document.querySelector('.container-resultado')
    let containerResult = document.querySelector('.container-result-cript')

    containerImg.style.display = 'none'
    containerResult.style.display = 'flex'
}

function esconderResultado() {
    let containerImg = document.querySelector('.container-resultado')
    let containerResult = document.querySelector('.container-result-cript')

    containerImg.style.display = 'flex'
    containerResult.style.display = 'none'
}

function copy() {
    let copyText = document.querySelector(".txt-result");
    copyText.select();
    document.execCommand("copy");
    alert(`Resultado copiado !!!\n"${copyText.value}"`)
}