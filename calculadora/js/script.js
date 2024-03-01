var n1 = document.getElementById('n1')
var n1 = document.getElementById('n2')
var resultado = document.getElementById('resultado')

function soma(){
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function sub(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function mult(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function div(){

    if (n1.value === 0) {
        resultado.innerHTML = "Erro, número 0 não divide!";
    } else{
        resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
    }

}

function limpar(){
    n1.value = "";
    n2.value = "";
    resultado.innerHTML = "";
}