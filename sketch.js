var bg, bg_image;



function preload() {
    bg_image = loadImage("bg.jpg");

    // =====PLAYING CHARACTER=====
  

}

function setup() {
    createCanvas(1200, 700);

    bg = createSprite(900, 380);
    bg.addImage(bg_image);
    bg.scale = 0.257;
    // if scale decrease, then other values such as image length increases

   
        
   

}

function draw() {
    background(0);

drawSprites();
   
}