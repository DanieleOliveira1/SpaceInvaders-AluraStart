let velocidadeMissil = 5;
let imagemMissil;
let posicoesMisseis = new Array();

function desenhaMisseis(){

     //para cada item da minha lista -> desenhar aquele ator
     for(let posicao of posicoesMisseis){
         image(imagemMissil, posicao.x, posicao.y);
     }
}

function movimentaMisseis(){
    //para cada posicao dentro da lista de posições -> mover o míssil para cima
    for(let i =posicoesMisseis.length -1; i>=0; i--){
      let posicao = posicoesMisseis[i]
        posicao.y = posicao.y - velocidadeMissil;
      if(estaForaDaTela(posicao.y)){
        posicoesMisseis.splice(i,1);
      }
        
    }
}

function verificaColisaoMissil(){
    
    for(let j=posicoesMisseis.length -1; j>=0; j--){
      let posicao = posicoesMisseis[j]
        //se o missil está para esquerda OU (||)  para direita OU  para baixo OU para cima
      for(let i=0; i<quantidadeAliens;i++){
        let posicaoAlienLista = calcularPosicaoAlien(i);
        let numeroFantasia = aliens[i]
        if(alienEstaMorto(numeroFantasia)){
          continue;
        }
          let imagemAlien = imagensAliens[numeroFantasia];
             if(colidiu(posicao, imagemMissil, posicaoAlienLista, imagemAlien)) {
           //o missil não está tocando o alien
            aliens[i] = -1
            pontuacao += 10;
               posicoesMisseis.splice(j,1)
          }      
      }
    }
}