const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const ambos = document.getElementById ('ambos')
const estado = document.getElementById ('estado')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function comoEsta(){
    return lamp.src.indexOf('desligada') > -1 
}

function comoEsta2(){
    return lamp.src.indexOf('ligada') > -1 
}

function lampLigada(){
    if(!estaquebrada()){
        lampada.src = "img/ligada.jpg"
    }
    if(comoEsta2()){           
        estado.innerHTML = "A lâmpada está LIGADA"   
    }
}

function lampDesligada(){
    if(!estaquebrada()){
        lampada.src = "img/desligada.jpg"
    }
    if(comoEsta()){
        estado.innerHTML = "A lâmpada está DESLIGADA"
    }
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    estado.innerHTML = "A lâmpada está QUEBRADA"
}

function mult (){
    if(comoEsta()){
        acender()
    }
    else{
        apagar()
    }

}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)
lampada.addEventListener('dblclick',lampQuebrada)

ambos.addEventListener('click', mult)