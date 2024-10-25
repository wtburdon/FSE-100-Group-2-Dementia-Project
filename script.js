let bg1, bg2, bg3;
let backgroundImage;

let gImage;
let lid1, lid2, lid3;
let pDish;

let gameIndex = 0;
let game;

let backImage;
let shapeImages;

function preload(){
  backgroundImage = loadImage('assets/output.jpg');
  gImage = loadImage('assets/wallpaper.png');
  pDish = loadImage('assets/pickDish.png');
  
  backImage = loadImage('assets/CardBack.png');
  
  shapeImages = {
    "circle": loadImage('assets/circle.png'),
    "diamond": loadImage('assets/diamond.png'),
    "donut": loadImage('assets/donut.png'),
    "heart": loadImage('assets/heart.png'),
    "hexagon": loadImage('assets/hexagon.png'),
    "Lshape": loadImage('assets/Lshape.png'),
    "pentagon": loadImage('assets/pentagon.png'),
    "spade": loadImage('assets/spade.png'),
    "trapezoid": loadImage('assets/trapezoid.png'),
    "square": loadImage('assets/square.png'),
    "triangle": loadImage('assets/triangle.png'),
    "star": loadImage('assets/star.png')
  };

  
  //SoundFormats('mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  mainMenu();
}

function draw() {
  if(gameIndex == 0){
    
  }else if(gameIndex == 1){ // Card Match Game
    game.drawCards();
  }else if(gameIndex == 2){

  }else if(gameIndex == 3){

  }
  
}

function mousePressed(){
  if(gameIndex == 1){
    game.handleMousePressed();
  }
}

function mainMenu() {
  removeElements();

  image(backgroundImage, 0, 0, windowWidth, windowHeight);
  image(pDish, windowWidth/2 - 100, windowHeight/2 - 100, 200, 200);
  
  lid1 = createImg('assets/closedlid.png', '');

  lid1.position(windowWidth/5, (3*windowHeight)/5);
  lid1.size(windowWidth/5, windowHeight/5);
  lid1.mousePressed(game1);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/placeholder.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/closedlid.png'));

  lid2 = createImg('assets/closedlid.png', '');

  lid2.position(windowWidth/5 + windowWidth/5, 3*windowHeight/5);
  lid2.size(windowWidth/5, windowHeight/5);
  lid2.mousePressed(game2);
  lid2.mouseOver(() => lid2.attribute('src', 'assets/placeholder.png'));
  lid2.mouseOut(() => lid2.attribute('src', 'assets/closedlid.png'));

  lid3 = createImg('assets/closedlid.png', '');

  lid3.position(windowWidth/5 + 2*windowWidth/5, 3*windowHeight/5);
  lid3.size(windowWidth/5, windowHeight/5);
  lid3.mousePressed(game3);
  lid3.mouseOver(() => lid3.attribute('src', 'assets/placeholder.png'));
  lid3.mouseOut(() => lid3.attribute('src', 'assets/closedlid.png'));
}

function game1() {
  removeElements();

  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(() => game1Start(0));

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 + 125);
  bg2.mousePressed(() => game1Start(1));

  lid1 = createImg('assets/rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/rMenu.png'));

  
}

function game1Start(difficulty){
  removeElements();
  game = new CardMatchingGame(difficulty);
  
  gameIndex = 1;
}

function game2() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(gameStart(0));

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 + 125);
  bg2.mousePressed(gameStart(1));

  lid1 = createImg('assets/rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/rMenu.png'));

  function gameStart(difficulty){
    //game = new CardMatchingGame(difficulty);
    gameIndex = 2;
  }
}

function game3() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);

  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(gameStart(0));

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 +125);
  bg2.mousePressed(gameStart(1));

  lid1 = createImg('assets/rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/rMenu.png'));


  function gameStart(difficulty){
    //game = new CardMatchingGame(difficulty);
    gameIndex = 3;
  }
}


class CardMatchingGame {
  constructor(difficulty) {
    this.difficulty = difficulty; 
    
    this.cardSize = 100;
    this.cards = [];
    this.selectedCards = [];
    this.matches = 0;
    this.attempts = 0;

    this.shapeImages = {};
    this.backImage = loadImage('assets/CardBack.png');


    if(this.difficulty == 0){
      this.numCards = 12;
      this.shapeImages["circle"] = loadImage('assets/circle.png');
      this.shapeImages["diamond"] = loadImage('assets/diamond.png');
      this.shapeImages["donut"] = loadImage('assets/donut.png');
      this.shapeImages["heart"] = loadImage('assets/heart.png');
      this.shapeImages["hexagon"] = loadImage('assets/hexagon.png');
      this.shapeImages["Lshape"] = loadImage('assets/Lshape.png');
      
    }else{
      this.numCards = 24;
      this.shapeImages["circle"] = loadImage('assets/circle.png');
      this.shapeImages["diamond"] = loadImage('assets/diamond.png');
      this.shapeImages["donut"] = loadImage('assets/donut.png');
      this.shapeImages["heart"] = loadImage('assets/heart.png');
      this.shapeImages["hexagon"] = loadImage('assets/hexagon.png');
      this.shapeImages["Lshape"] = loadImage('assets/Lshape.png');
      this.shapeImages["pentagon"] = loadImage('assets/pentagon.png');
      this.shapeImages["spade"] = loadImage('assets/spade.png');
      this.shapeImages["trapezoid"] = loadImage('assets/trapezoid.png');
      this.shapeImages["square"] = loadImage('assets/square.png');
      this.shapeImages["triangle"] = loadImage('assets/triangle.png');
      this.shapeImages["star"] = loadImage('assets/star.png');
    }
    
    //this.incorrectSound = loadSound('assets/incorrect.mp3');
    //this.correctSound = loadSound('assets/correct.mp3');
    
    this.createCards();
    this.shuffleCards();
    this.arrangeCards();
  }

  createCards() {
    let values = [];
    let shapeKeys = Object.keys(this.shapeImages);
    
    for (let i = 0; i < this.numCards / 2; i++) {
      let shapeIndex = i % shapeKeys.length;
      values.push(shapeKeys[shapeIndex]); 
      values.push(shapeKeys[shapeIndex]); 
    }

    for (let i = 0; i < this.numCards; i++) {
      let card = {
        value: values[i],
        faceUp: false,
        x: 0,
        y: 0
      };
      this.cards.push(card);
    }
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  arrangeCards() {
    let x = 50;
    let y = 50;
    for (let i = 0; i < this.numCards; i++) {
      this.cards[i].x = x;
      this.cards[i].y = y;
      x += this.cardSize + 20;
      if (x > width - this.cardSize) {
        x = 50;
        y += this.cardSize + 20;
      }
    }
  }

  drawCards() {
    for (let i = 0; i < this.numCards; i++) {
      let card = this.cards[i];

      fill(255);
      stroke(0);
      
      image(this.backImage, card.x, card.y, this.cardSize, this.cardSize);
      

      if (card.faceUp) {
        let img = this.shapeImages[card.value];
        if (img) {
          image(img, card.x, card.y, this.cardSize, this.cardSize);
        }
      }
    }
  }

  isGameOver() {
    console.log("Matches:", this.matches, "Total Pairs:", this.numCards / 2);
    return this.matches === this.numCards / 2;
  }

  displayEndScreen() {
    background(255);
    textSize(32);
    fill(0);
    textAlign(CENTER);
    text(`Game Over!`, width / 2, height / 2 - 50);
    text(`Attempts: ${this.attempts}`, width / 2, height / 2);

    let returnBtn = createImg('assets/rMenu.png', 'Return to Menu');
    returnBtn.position(width / 3, height / 2 + 50);
    returnBtn.size(width / 2, height / 4);
    returnBtn.mousePressed(() => {
      returnBtn.remove();
      mainMenu();
    });
    returnBtn.mouseOver(() => returnBtn.attribute('src', 'assets/rMenuHover.png'));
    returnBtn.mouseOut(() => returnBtn.attribute('src', 'assets/rMenu.png'));
  }

  
  handleMousePressed() {
    console.log("Mouse pressed, current matches:", this.matches);
    
    for (let i = 0; i < this.numCards; i++) {
      let card = this.cards[i];
      if (dist(mouseX, mouseY, card.x + this.cardSize / 2, card.y + this.cardSize / 2) < this.cardSize / 2) {
        if (!card.faceUp && this.selectedCards.length < 2) {
          card.faceUp = true;
          this.selectedCards.push(card);
        }
      }
    }

    if (this.selectedCards.length === 2) {
      this.attempts++;
      
      setTimeout(() => {
        if (this.selectedCards[0].value === this.selectedCards[1].value) {
          this.matches++;
          this.selectedCards[0].faceUp = true;
          this.selectedCards[1].faceUp = true;
          //this.correctSound.play();
        } else {
          this.selectedCards[0].faceUp = false;
          this.selectedCards[1].faceUp = false;
          //this.incorrectSound.play();
        }
        this.selectedCards = [];

        if (this.isGameOver()) {
          this.displayEndScreen();
        }
      }, 1000);
    }
  }
}



class WordGame {
  constructor(difficulty){
    if(difficulty == 0){
      this.lives = 5;
    }else{
      this.lives = 3;
    }

    
    
  }


  
}