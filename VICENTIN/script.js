const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click',botaoMostraPalavrasChave)

function botaoMostraPalavrasChave(){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave'); 
    const palavraschave = processaTexto(texto);

    campoResultado.textContent = palavraschave.join(", ");
    }

   function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

     let frenquencia = [];
     for(let i of palavras){
 frenquencia [i] = 0;
 for (let j of palavras){
    if (palavras[i]==palavras[j]){
        frenquencia[i]++;
    }
 }
 }

 console.log(frenquencia);


    return palavras;
}