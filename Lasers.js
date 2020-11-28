let imagemLaser
let lasers = new Array();
let velocidadeLasers = 5;

function verificaColisaoLaser(){
  for(let laser of lasers){
    if(colidiu(laser, imagemLaser, posicaoNave, imagemNave)){
      //ir para cena de derrota
      cenaAtual = cenas.derrota;
    }
  }
}

function desenhaLasers(){
  for(let laser of lasers){
    image(imagemLaser, laser.x, laser.y)
  }
}

function movimentaLasers(){
  for(let i = lasers.length-1; i>=0; i--){
    let laser = lasers[i];
    laser.y = laser.y  + velocidadeLasers;
    if(estaForaDaTela(laser.y) == true){
      lasers.splice(i, 1);
    }
  }
}








