const calcular = document.getElementById ('calcular')


function imc() {
    const altura = document.getElementById ('altura')
    const peso = document.getElementById ('peso')
    const resultado = document.getElementById ('resultado')

    if (altura !== '' && peso !=='') {

        const valorIMC = (peso.value/ (altura.value * altura.value)).toFixed(2);
        
        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Baixo peso'
        }else if (valorIMC < 25){
            classificacao = 'Intervalo normal'
        }else if (valorIMC < 30){
            classificacao = 'Sobrepeso'
        }else if (valorIMC < 35){
            classificacao = 'Obesidade classe I'
        }else if (valorIMC < 40){
            classificacao = 'Obesidade classe II'
        }else {
            classificacao = 'Obesidade classe III';
        }

        resultado.textContent = `Seu IMC É ${valorIMC} Seu diagnóstico é ${classificacao}`;
    }else {
        resultado.innerHTML = 'Por favor preencha todos os campos!';
    }

}

calcular.addEventListener('click', imc);
