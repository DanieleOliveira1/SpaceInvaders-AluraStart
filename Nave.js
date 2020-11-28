const tempoEntreDisparos = 0.8;
let imagemNave;
let posicaoNave;
let possoAtirar = true
let cronometroRecarregar = tempoEntreDisparos;


function inicializarNave(){
   posicaoNave = createVector(400 , 500);
}

function desenharNave(){
   //desenhar a nave
      image(imagemNave, posicaoNave.x, posicaoNave.y);

}

function movimentarNave(){
     posicaoNave.x = mouseX - imagemNave.width / 2;
     
}

function atirar(){
  if(possoAtirar){
    posicoesMisseis.push(createVector(mouseX - imagemMissil.width / 2, posicaoNave.y ));
    possoAtirar=false
}
  
}

function recarregarMissil(){
  if(!possoAtirar){ //indica o false
    cronometroRecarregar = cronometroRecarregar - deltaTime;
    if(cronometroRecarregar <0){
       possoAtirar = true;
      cronometroRecarregar = tempoEntreDisparos;
}
     
}

}














