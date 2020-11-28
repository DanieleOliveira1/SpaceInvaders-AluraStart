let aliens = new Array();
let imagensAliens = new Array();
let deslocamentoAlien = 0;
let velocidadeAlien = 2;
let quantidadeAliens = 10;
let chanceDeAtirar = 0.005
let colunas = 5;
const tamanhoAlien =100
const distanciaTopo = 75

function inicializarAliens(){
   
  for(let numeroAliens = 0;numeroAliens<quantidadeAliens; numeroAliens++){
     let numeroFantasia = Math.floor(random(imagensAliens.length));
     aliens.push(numeroFantasia)
  }
}


function movimentarAlien(){
  deslocamentoAlien = deslocamentoAlien+ velocidadeAlien;
  let indiceUltimoAlien = Math.min(colunas-1, quantidadeAliens - 1)
  let posicaoUltimoAlien = calcularPosicaoAlien(indiceUltimoAlien);
  let posicaoPrimeiroAlien = calcularPosicaoAlien(0);
  let imagemUltimoAlien = imagensAliens[0]
    if(posicaoUltimoAlien.x + imagemUltimoAlien.width > 900 || posicaoPrimeiroAlien.x < 0){
        velocidadeAlien = velocidadeAlien * -1;
    }
}


function desenhaAlien(){
    //se o alien esta vivo, eu devo desenhar ele
  
  for(let i = 0; i<quantidadeAliens;i = i+1){
    let numeroFantasia = aliens[i]
    if(alienEstaMorto(numeroFantasia) == false){
      let posicao = calcularPosicaoAlien(i);
      image(imagensAliens[numeroFantasia],posicao.x, posicao.y)
    }
     
  }
}

function calcularPosicaoAlien(indiceAlien){
  let posicao = createVector();
  let linha = Math.floor(indiceAlien/colunas)
  let coluna = indiceAlien % colunas;
  
  posicao.x = coluna*tamanhoAlien + distanciaTopo + deslocamentoAlien;
  posicao.y = linha * tamanhoAlien + distanciaTopo;
  return posicao;
}


function adicionarDisparosDosAliens(){
  for(let i=0; i<quantidadeAliens; i++){
    if(alienEstaMorto(aliens[i]) == true){
      continue; //se for verdadeiro, pega o próximo item do array
    }
    
    if(deveAtirar()){
       let posicaoAlien = calcularPosicaoAlien(i);
      lasers.push(posicaoAlien);
    }
    
  }
  
}

function deveAtirar(){
  return Math.random() < chanceDeAtirar;
}

function alienEstaMorto(fantasia){
  
  return fantasia == -1
  
}

function todosAliensEstaoMortos() {
    for (let alien of aliens) {
        if (alienEstaMorto(alien) == false) {
            return false;
        }
    }
    return true;
}
