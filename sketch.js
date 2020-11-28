let trilhaSonora;
let pontuacao = 0;
let cenaAtual = 0;
let deltaTime = 0;
let ultimaChamada = 0;
let cenas = {
  jogo: 0,
  vitoria:1,
  derrota:2
}

function preload(){
    // carregando imagens
    trilhaSonora = loadSound("sons/Trilha.mp3");
    imagemNave = loadImage("imagens/Nave.png");
    imagensAliens.push(loadImage("imagens/Alien1.png"));
    imagensAliens.push(loadImage("imagens/Alien2.png"));
    imagensAliens.push(loadImage("imagens/Alien3.png"));
    imagemMissil = loadImage("imagens/Missil.png");
    imagemLaser = loadImage("imagens/laser.png")
}

function setup() {

    trilhaSonora.loop();
    createCanvas(900, 600);
     inicializarNave()
     inicializarAliens()
}

function calcularDeltaTime(){
  let tempoAtual = millis();
  deltaTime = tempoAtual - ultimaChamada
  ultimaChamada = tempoAtual
  deltaTime = deltaTime/1000
}

function draw() {
    // pintar o fundo do palco de cinza
    background(100);
    calcularDeltaTime();
    if(cenaAtual == cenas.jogo){
      desenhaCenaJogo();
    }
    else if(cenaAtual == cenas.vitoria){
      desenhaCenaVitoria();
    }if(cenaAtual == cenas.derrota){
      desenhaCenaDerrota();
    }
}

function desenhaCenaVitoria(){
      textSize(80)
      textAlign(CENTER)
      text("Parabéns", width/2,height/2);
}

function desenhaCenaDerrota(){
      textSize(80)
      textAlign(CENTER)
      text("Game Over", width/2,height/2);
}

function desenhaCenaJogo(){
  if(todosAliensEstaoMortos() == true){
        cenaAtual = cenas.vitoria;
      }
      
      movimentaMisseis();
      //centralizando a posição da nave
       movimentarNave()
        desenharNave();
      fill(255);
      textSize(30);
      textAlign(LEFT)
      text ("Pontuação: "+ pontuacao,10,53);

      verificaColisaoMissil();
      verificaColisaoLaser();
      adicionarDisparosDosAliens();
      desenhaLasers();
      movimentarAlien();
      movimentaLasers();
      desenhaAlien();
      desenhaMisseis();
  recarregarMissil();
}

//quando o mouse for pressionado
function mousePressed(){
  if(cenaAtual == cenas.jogo){
    atirar()
  }else{
    reiniciar();
  } 
  

}

function colidiu(posicaoObjeto, imagemObjeto, posicaoOutro, imagemOutro){
  
  if(posicaoObjeto.x + imagemObjeto.width < posicaoOutro.x ||
              posicaoObjeto.x  >posicaoOutro.x + imagemOutro.width ||
              posicaoObjeto.y > posicaoOutro.y + imagemOutro.height ||
              posicaoObjeto.y +  imagemObjeto.height < posicaoOutro.y){
        return false
  }
  return true;
}

function reiniciar(){
  cenaAtual = cenas.jogo
  lasers = new Array();
  posicoesMisseis = new Array();
  aliens = new Array;
  inicializarAliens();
  pontuacao = 0;
}

function estaForaDaTela(posicaoY){
  if(posicaoY<0 || posicaoY > height ) {
    return true
  }
  return false
}






