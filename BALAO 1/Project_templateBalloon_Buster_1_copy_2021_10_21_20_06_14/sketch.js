var arco , flecha,  cenario;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo;
var grupoAzul,grupoRosa,GRUPOverde, grupoVermelho,Gflecha
var placar = 0;
function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
}




function setup() {
  createCanvas(400, 400);
  background(0)
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
  grupoVermelho= new Group();
  GRUPOverde= new Group();
  grupoAzul= new Group();
  grupoRosa= new Group();
  Gflecha= new Group();
}

function draw() {
 background(0);
   cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
    
  }
  if (grupoVermelho.isTouching(Gflecha)){
    grupoVermelho.destroyEach();
    Gflecha.destroyEach();
    placar=placar+1
  }
  if (grupoAzul.isTouching(Gflecha)){
    grupoAzul.destroyEach();
    Gflecha.destroyEach();
    placar=placar+1
  }
  if (GRUPOverde.isTouching(Gflecha)){
    GRUPOverde.destroyEach();
    Gflecha.destroyEach();
    placar=placar+1
  }
  if (grupoRosa.isTouching(Gflecha)){
    grupoRosa.destroyEach();
    Gflecha.destroyEach();
    placar=placar+1
  }
  //criando balões contínuos
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   if (select_balloon == 1){ 
    balaoVermelho();
  }
  else if (select_balloon == 2){ 
      balaoAzul(); } 
    else if (select_balloon == 3) {
      balaoVerde(); }
     else  {
      balaoRosa(); 
    } 
  } 

  drawSprites();
 text("PONTOS:"+placar,200,300)

}


// Criando flechas para o arco
 function criarFlecha() {
  var flecha = createSprite(100, 100, 60, 10);
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  Gflecha.add(flecha);
}

function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  grupoVermelho.add(vermelho);
  
}

function balaoAzul() {
  var Azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  Azul.addImage(imagem_balaoAzul);
  Azul.velocityX = 3;
  Azul.lifetime = 150;
  Azul.scale = 0.1;
  grupoAzul.add(Azul);
}
function balaoVerde() {
  var Verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  Verde.addImage(imagem_balaoVerde);
  Verde.velocityX = 3;
  Verde.lifetime = 150;
  Verde.scale = 0.1;
  GRUPOverde.add(Verde);
}

function balaoRosa() {
  var Rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  Rosa.addImage(imagem_balaoRosa);
  Rosa.velocityX = 3;
  Rosa.lifetime = 150;
  Rosa.scale = 1; 
grupoRosa.add(Rosa);
}
