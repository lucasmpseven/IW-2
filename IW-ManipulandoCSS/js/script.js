/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Manipulando CSS - Tema Pokemon'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "black";
titulo.style.color = "black";
titulo.style.backgroundColor = "white";
titulo.style.borderBottom = "2px solid black";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnfogo = document.querySelector('#btfogo')

let btnagua = document.querySelector('#btagua')

let btnplanta = document.querySelector('#btplanta')

let btneletrico = document.querySelector('#bteletrico')

let btnpsiquico = document.querySelector('#btpsiquico')

btnfogo.addEventListener('click', modofogo)
btnagua.addEventListener('click', modoagua)
btnplanta.addEventListener('click', modoplanta)
btneletrico.addEventListener('click', modoeletrico)
btnpsiquico.addEventListener('click', modopsiquico)

function modofogo() {
    event.preventDefault();
    console.log('modo fogo')
    tela.classList.remove("agua");
    tela.classList.remove("planta");
    tela.classList.remove("eletrico");
    tela.classList.remove("psiquico");
    tela.classList.add("fogo");
    imagem.setAttribute('src', 'img/charmander.png')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('border', '5px')
    nomepok.textContent = 'Charmander'
    caracpok.textContent = 'Charmander é um pequeno bípede, semelhante a um lagarto. A maioria de seu corpo é de cor laranja, enquanto a sua barriga é uma cor amarelo claro. Charmander, juntamente com todas as suas formas evoluídos, tem uma chama que está constantemente queimando sobre a extremidade da cauda.'
}

function modoagua() {
    event.preventDefault();
    console.log('modo agua')
    tela.classList.remove("fogo");
    tela.classList.remove("planta");
    tela.classList.remove("eletrico");
    tela.classList.remove("psiquico");
    tela.classList.add("agua");
    imagem.setAttribute('src', 'img/squirtle.png')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('border', '5px')
    nomepok.textContent = 'Squirtle'
    caracpok.textContent = 'Squirtle é um pequeno Pokémon, azul-claro com uma aparência semelhante ao de uma tartaruga. Como tartarugas, Squirtle tem um escudo que cobre seu corpo com orifícios que permitem que seus membros, cauda e cabeça para ser exposto. Ao contrário de uma tartaruga, Squirtle é normalmente bípede.'
}

function modoplanta() {
    event.preventDefault();
    console.log('modo planta')
    tela.classList.remove("fogo");
    tela.classList.remove("agua");
    tela.classList.remove("eletrico");
    tela.classList.remove("psiquico");
    tela.classList.add("planta");
    imagem.setAttribute('src', 'img/bulbasaur.png')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('border', '5px')
    nomepok.textContent = 'Bulbassauro'
    caracpok.textContent = 'Conhecida como a Semente Pokémon, Bulbasaur parece um pequeno dinossauro de cócoras que caminha sobre quatro patas e tem uma grande fábrica bulbo em suas costas que é capaz de atirar sementes de fora. Ele também tem grandes olhos vermelhos e tem dentes muito afiados. Sua pele tem uma cor turquesa clara com manchas verde-escuras. Ele tem três pregos em todas as suas quatro patas. A característica mais notável, contudo, é a lâmpada acima mencionado sobre a sua parte traseira, que como o Dex estados, foi plantada logo depois do nascimento'
}

function modoeletrico() {
    event.preventDefault();
    console.log('modo eletrico')
    tela.classList.remove("fogo");
    tela.classList.remove("agua");
    tela.classList.remove("planta");
    tela.classList.remove("psiquico");
    tela.classList.add("eletrico");
    imagem.setAttribute('src', 'img/pikachu.png')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('border', '5px')
    nomepok.textContent = 'Pikachu'
    caracpok.textContent = 'Pikachu é um pequeno e gordinho, roedor-como Pokémon que é coberta quase completamente pela pele amarela. Tem orelhas amarelas longas que são derrubados com preto. A volta de Pikachu tem duas listras marrons, e sua grande cauda é notável por ser a forma de um raio. Em suas bochechas são duas bolsas vermelhas em forma de círculo usados ​​para armazenar eletricidade, eles tornam-se amarelas e faísca de eletricidade quando o seu ponto de usar um ataque elétrico como Thunderbolt.'
}

function modopsiquico() {
    event.preventDefault();
    console.log('modo psiquico')
    tela.classList.remove("fogo");
    tela.classList.remove("agua");
    tela.classList.remove("planta");
    tela.classList.remove("eletrico");
    tela.classList.add("psiquico");
    imagem.setAttribute('src', 'img/mew.png')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('border', '5px')
    nomepok.textContent = 'Mew'
    caracpok.textContent = 'Mew é normalmente descrito como um Pokémon gato cor de rosa. O cabelo de Mew é tão fino, ele só pode ser visto sob um microscópio. Ele tem uma cauda longa, magra terminando com uma ponta arredondada. Mew tem pernas traseiras grandes e braços curtos, com patas de três dedos. Os pés de Mew são muito grandes com marcas ovais perto de seus três dedos do pé. Mew tem orelhas triangulares e olhos de bebe azuis. Mew é dito que tem o DNA de cada Pokémon contido no seu corpo e é por isso que ele se transforma em qualquer outro tipo de Pokémon. Ele também muitas vezes é representado em uma esfera rosa e olhos meio azuis.'
}


titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}

