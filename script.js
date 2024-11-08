let bg1, bg2, bg3;
let backgroundImage;
let instructionBackground;
let instructionButton;
let ant;
let butterfly;
let fakeScore;

let gImage;
let lid1, lid2, lid3;
let pDish;
let homeButton;

let gameIndex = 0;
let game;

let backImage;
let shapeImages;

let correctSound;
let incorrectSound;

let score = 0;
let time = 5;
let player;
let object;
let bug;
let difficulty = 0;

let game2bg2;

let timeTaken = 0;

let cupbg;
let arr = ['flour', 'sugar', 'butter', 'eggs', 'salt', 'yeast', 'milk', 'vanilla', 'chocolate', 'baking powder', 'baking soda', 'cinnamon', 'honey', 'cream', 'icing', 'almonds', 'walnuts', 'pecans', 'oats', 'raisins', 'blueberries', 'strawberries', 'raspberries', 'cherries', 'whipped cream', 'pastry cream', 'custard', 'jam', 'maple syrup', 'molasses', 'bread', 'croissants', 'muffins', 'cookies', 'brownies', 'cakes', 'cupcakes', 'donuts', 'eclairs', 'tarts', 'macarons', 'scones', 'danishes', 'bagels', 'pretzels', 'frosting', 'ganache', 'pie crust', 'shortbread', 'ladyfingers', 'madeleines'];
let seen = [];
let choice;
let lives;

function preload(){ //Most images made by Alec
  backgroundImage = loadImage('assets/output.jpg');
  gImage = loadImage('assets/wallpaper.png');
  pDish = loadImage('assets/pickDish.png');
  game1background = loadImage('assets/game1bg.png');
  instructionBackground = loadImage('assets/InstructionBackground.png');
  
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

  
  
  correctSound = loadSound('assets/correct.mp3');
  incorrectSound = loadSound('assets/incorrect.mp3');

  game1background = loadImage('assets/game1bg.png');

  bug = loadImage('assets/ant.png');
  
  game2bg2 = loadImage('assets/game2bg.png');
  
  neww = loadImage('assets/NewWord.png')
  oldw = loadImage('assets/OldWord.png')
  cupbg = loadImage('assets/game3bg.png')
  
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
    g2Draw();
  }else if(gameIndex == 3){
    game3Draw();
  }
  
}

function mousePressed(){
  if(gameIndex == 1){
    game.handleMousePressed();
  }
}

//Billy
function mainMenu() {
  removeElements();
  gameIndex = 0;

  image(backgroundImage, 0, 0, windowWidth, windowHeight);
  image(pDish, windowWidth/2 - 100, windowHeight/2 - 100, 200, 200);
  
  lid1 = createImg('assets/closedlid.png', '');

  lid1.position(windowWidth/5, (3*windowHeight)/5);
  lid1.size(windowWidth/5, windowHeight/5);
  lid1.mousePressed(game1);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/game1Lid.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/closedlid.png'));

  lid2 = createImg('assets/closedlid.png', '');

  lid2.position(windowWidth/5 + windowWidth/5, 3*windowHeight/5);
  lid2.size(windowWidth/5, windowHeight/5);
  lid2.mousePressed(game2);
  lid2.mouseOver(() => lid2.attribute('src', 'assets/game2Lid.png'));
  lid2.mouseOut(() => lid2.attribute('src', 'assets/closedlid.png'));

  lid3 = createImg('assets/closedlid.png', '');

  lid3.position(windowWidth/5 + 2*windowWidth/5, 3*windowHeight/5);
  lid3.size(windowWidth/5, windowHeight/5);
  lid3.mousePressed(game3);
  lid3.mouseOver(() => lid3.attribute('src', 'assets/game3Lid.png'));
  lid3.mouseOut(() => lid3.attribute('src', 'assets/closedlid.png'));
}

//Alec
function homeButtonSetup() {
  
  homeButton = createImg('assets/homeSymbol.png', '');

  homeButton.position(windowWidth-75, windowHeight-75);
  homeButton.size(70, 70);
  homeButton.mousePressed(mainMenu);
  homeButton.mouseOver(() => homeButton.attribute('src', 'assets/homeSymbolHovered.png'));
  homeButton.mouseOut(() => homeButton.attribute('src', 'assets/homeSymbol.png'));
  
}
//Alec
function game1() {
  removeElements();

  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createImg('assets/NormalButton.png', '');                  
  bg1.position(windowWidth/3-125, windowHeight/4-60);
  bg1.size(285, 120);
  bg1.mousePressed(() => game1Start(0));
  bg1.mouseOver(() => bg1.attribute('src', 'assets/NormalButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/NormalButton.png'));

  bg2 = createImg('assets/HardButton.png', '');                    
  bg2.position(windowWidth/3, windowHeight/2-75);
  bg2.size(285, 120);
  bg2.mousePressed(() => game1Start(1));
  bg2.mouseOver(() => bg2.attribute('src', 'assets/HardButtonHovered.png'));
  bg2.mouseOut(() => bg2.attribute('src', 'assets/HardButton.png'));

  lid1 = createImg('assets/MenuButton.png', '');

  lid1.position(windowWidth/2-247.5, windowHeight-150);
  lid1.size(495, 120);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));

  instructionButton = createImg('assets/InstructionsButton.png', '');                  
  instructionButton.position(windowWidth/3-75, windowHeight/2+55);
  instructionButton.size(285, 120);
  instructionButton.mousePressed(() => game1Instructions());
  instructionButton.mouseOver(() => instructionButton.attribute('src', 'assets/InstructionsButtonHovered.png'));
  instructionButton.mouseOut(() => instructionButton.attribute('src', 'assets/InstructionsButton.png'));
  
}

function game1Start(difficulty){
  removeElements();
  image(game1background, 0, 0, windowWidth, windowHeight);
  homeButtonSetup();
  game = new CardMatchingGame(difficulty);
  
  gameIndex = 1;
}
//Alec
function game2() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createImg('assets/NormalButton.png', '');                  
  bg1.position(windowWidth/3-125, windowHeight/4-60);
  bg1.size(285, 120);
  bg1.mousePressed(() => {difficulty = 0; game2Start();});
  bg1.mouseOver(() => bg1.attribute('src', 'assets/NormalButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/NormalButton.png'));

  bg2 = createImg('assets/HardButton.png', '');                    
  bg2.position(windowWidth/3, windowHeight/2-75);
  bg2.size(285, 120);
  bg2.mousePressed(() => {difficulty = 1; game2Start();});
  bg2.mouseOver(() => bg2.attribute('src', 'assets/HardButtonHovered.png'));
  bg2.mouseOut(() => bg2.attribute('src', 'assets/HardButton.png'));
  
  lid1 = createImg('assets/MenuButton.png', '');

  lid1.position(windowWidth/2-247.5, windowHeight-150);
  lid1.size(495, 120);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));

  instructionButton = createImg('assets/InstructionsButton.png', '');
  
  instructionButton.position(windowWidth/3-75, windowHeight/2+55);
  instructionButton.size(285, 120);
  instructionButton.mousePressed(() => game2Instructions());
  instructionButton.mouseOver(() => instructionButton.attribute('src', 'assets/InstructionsButtonHovered.png'));
  instructionButton.mouseOut(() => instructionButton.attribute('src', 'assets/InstructionsButton.png'));
  
}
//Alec
function game3() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createImg('assets/NormalButton.png', '');                  
  bg1.position(windowWidth/3-125, windowHeight/4-60);
  bg1.size(285, 120);
  bg1.mousePressed(() => {difficulty = 0; game3Start();});
  bg1.mouseOver(() => bg1.attribute('src', 'assets/NormalButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/NormalButton.png'));

  bg2 = createImg('assets/HardButton.png', '');                    
  bg2.position(windowWidth/3, windowHeight/2-75);
  bg2.size(285, 120);
  bg2.mousePressed(() => {difficulty = 1; game3Start();});
  bg2.mouseOver(() => bg2.attribute('src', 'assets/HardButtonHovered.png'));
  bg2.mouseOut(() => bg2.attribute('src', 'assets/HardButton.png'));
  
  lid1 = createImg('assets/MenuButton.png', '');

  lid1.position(windowWidth/2-247.5, windowHeight-150);
  lid1.size(495, 120);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));
  
  instructionButton = createImg('assets/InstructionsButton.png', '');
  
  instructionButton.position(windowWidth/3-75, windowHeight/2+55);
  instructionButton.size(285, 120);
  instructionButton.mousePressed(() => game3Instructions());
  instructionButton.mouseOver(() => instructionButton.attribute('src', 'assets/InstructionsButtonHovered.png'));
  instructionButton.mouseOut(() => instructionButton.attribute('src', 'assets/InstructionsButton.png'));
  
}
//Alec
function game1Instructions(){ // Card Match
  
  removeElements();
  image(instructionBackground, 0, 0, windowWidth, windowHeight);
  
  bg1 = createImg('assets/BackButton.png', '');

  bg1.position(windowWidth/2-142.5, windowHeight-150);
  bg1.size(285, 120);
  bg1.mousePressed(game1);
  bg1.mouseOver(() => bg1.attribute('src', 'assets/BackButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/BackButton.png'));
  
}
//Alec
function game2Instructions(){ // Bug Game
  
  removeElements();
  image(instructionBackground, 0, 0, windowWidth, windowHeight);
  fakeScore = 0;
  
  bg1 = createImg('assets/BackButton.png', '');

  bg1.position(windowWidth/2-142.5, windowHeight-150);
  bg1.size(285, 120);
  bg1.mousePressed(game2);
  bg1.mouseOver(() => bg1.attribute('src', 'assets/BackButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/BackButton.png'));
  
  rect(450,275, 60, 30);
  textSize(32);
  fill('rgb(202,121,255)');
  stroke(0);
  text('Score:', 350, 300);
  text(fakeScore, 455, 300);
  
  
  ant = createImg('assets/ant.png', '');
  ant.position(75, 75);
  ant.size(150, 150);
  ant.mousePressed(() => {
    correctSound.play();
    fakeScore ++;
    fill('white');
    rect(450,275, 60, 30);
    textSize(32);
    fill('rgb(202,121,255)');
    stroke(0);
    text(fakeScore, 455, 300);
  });
  
  butterfly = createImg('assets/butterfly.png', '');
  butterfly.position(75, 375);
  butterfly.size(150, 150);
  butterfly.mousePressed(() => {
    incorrectSound.play();
    fakeScore --;
    fill('white');
    rect(450,275, 60, 30);
    textSize(32);
    fill('rgb(202,121,255)');
    stroke(0);
    text(fakeScore, 455, 300);
  });
  
}
//Alec
function game3Instructions(){ // Word Game
  
  removeElements();
  image(instructionBackground, 0, 0, windowWidth, windowHeight);
  
  bg1 = createImg('assets/BackButton.png', '');

  bg1.position(windowWidth/2-142.5, windowHeight-150);
  bg1.size(285, 120);
  bg1.mousePressed(game3);
  bg1.mouseOver(() => bg1.attribute('src', 'assets/BackButtonHovered.png'));
  bg1.mouseOut(() => bg1.attribute('src', 'assets/BackButton.png'));
  
}

//Billy
class CardMatchingGame {
  constructor(difficulty) {
    this.difficulty = difficulty; 
    this.cardSize = 100;
    this.cards = [];
    this.selectedCards = [];
    this.matches = 0;
    this.attempts = 0;
    this.gameOver = false;
    
    this.timeTaken = 0;

    this.shapeImages = {};
    this.backImage = loadImage('assets/CardBack.png');

    this.correctSound = loadSound('assets/correct.mp3');
    this.incorrectSound = loadSound('assets/incorrect.mp3');
    
    if (this.difficulty == 0) {
      this.numCards = 12;
      this.shapeImages["circle"] = loadImage('assets/circle.png');
      this.shapeImages["diamond"] = loadImage('assets/diamond.png');
      this.shapeImages["donut"] = loadImage('assets/donut.png');
      this.shapeImages["heart"] = loadImage('assets/heart.png');
      this.shapeImages["hexagon"] = loadImage('assets/hexagon.png');
      this.shapeImages["Lshape"] = loadImage('assets/Lshape.png');
    } else {
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
    this.timeTaken += 1/60;
    
    if (this.gameOver) {
      return; 
    }

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
    this.gameOver = (this.matches === this.numCards / 2);
    return this.gameOver;
  }

  displayEndScreen() {
    background(255);
    image(gImage, 0, 0, windowWidth, windowHeight);
    textSize(32);
    fill(0);
    textAlign(CENTER);
    
    let gameMessage;
    if(this.difficulty == 0){
      if(this.timeTaken <= 15){
        gameMessage = "Wow that was fast, great job!";
      }else if(this.timeTaken <= 30){
        gameMessage = "You are doing great! Keep it up!";
      }else if(this.timeTaken <= 50){
        gameMessage = "You're on your way there!";
      }else if(this.timeTaken <= 75){
        gameMessage = "Keep Trying!";
      }else{
        gameMessage = "Please consider talking to your doctor";
      }
    }else{
      if(this.timeTaken <= 30){
        gameMessage = "Wow that was fast, great job!";
      }else if(this.timeTaken <= 60){
        gameMessage = "You are doing great! Keep it up!";
      }else if(this.timeTaken <= 80){
        gameMessage = "You're on your way there!";
      }else if(this.timeTaken <= 100){
        gameMessage = "Keep Trying!";
      }else{
        gameMessage = "Please consider talking to your doctor";
      }
    }
    
    
    text(`Game Over!`, width / 2, height / 2 - 150);
    text(`Attempts: ${this.attempts}`, width / 2, height / 2 - 100);
    text(`Time Taken: ${this.timeTaken.toFixed(2)} seconds`, width / 2, height / 2 - 50);
    text(`${gameMessage}`, width / 2, height / 2);

    lid1 = createImg('assets/MenuButton.png', '');                 
  lid1.position(windowWidth/2-247.5, windowHeight-150);            
  lid1.size(495, 120);                                             
  lid1.mousePressed(mainMenu);                                     
  lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));                                          
  lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));
                                                                   
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
          
          this.correctSound.play();
        } else {
          this.selectedCards[0].faceUp = false;
          this.selectedCards[1].faceUp = false;
          
          this.incorrectSound.play();
        }
        this.selectedCards = [];

        if (this.isGameOver()) {
          this.displayEndScreen();
        }
      }, 1000);
    }
  }
}

//Erim
function game2Start(){
  removeElements();
  
  g2Setup();
  gameIndex = 2;
}
//Erim
function g2Setup(){
  
  timeTaken = 0;
  
  time = 5;
  score = 0;
  bug = createImg('assets/ant.png', '');
  bug.position(random(width-20), random(height-20));
  bug.size(30/400 * windowWidth, 30/400 * windowHeight);
  bug.mousePressed(() => bugPress());
  
  if(difficulty == 1){
    bbug = createImg('assets/butterfly.png', '');
    bbug.position(random(width-20), random(height-20));
    bbug.size(40/400 * windowWidth, 40/400 * windowHeight);
    bbug.mousePressed(() => bbugPress());
  }
}
//Erim
function bugPress(){
  correctSound.play();
  
  if(difficulty == 0){
    bug.position(random(width-20), random(height-20));
    score++;
  }
  else if(difficulty == 1){
    bug.position(random(width-20), random(height-20));
    bbug.position(random(width-20), random(height-20));
    score++;
  }
  if(score > 1){
    if(difficulty == 0){
      time += 1;
    }
    else if(difficulty == 1){
      time += 0.75;
    }
  }
}
//Erim
function bbugPress(){
  incorrectSound.play();
  score--;
  bug.position(random(width-20), random(height-20));
  bbug.position(random(width-20), random(height-20));
}
//Erim
function g2Draw(){
  image(game2bg2, 0, 0, windowWidth, windowHeight);
  textSize(20);
  text("Score: ", 50/400 * windowWidth, 50/400 * windowHeight);
  text(score, 110/400 * windowWidth, 50/400 * windowHeight)
  
  timeTaken += 1 / 60;
  time -= 1 / 60;
  if(time <= 0 || timeTaken >= 50){
    removeElements();
    let gameMessage;
    
    if(difficulty == 0){
      if(timeTaken <= 10){
        gameMessage = "Please consider talking to your doctor";
      }else if(timeTaken <= 20){
        gameMessage = "Keep Trying!";
      }else if(timeTaken <= 30){
        gameMessage = "You're on your way there!";
      }else if(timeTaken <= 40){
        gameMessage = "You are doing great! Keep it up!";
      }else{
        gameMessage = "Congrats! You protected the pie!"; 
      }
    }else{
      if(timeTaken <= 10){
        gameMessage = "Please consider talking to your doctor";
      }else if(timeTaken <= 20){
        gameMessage = "Keep Trying!";
      }else if(timeTaken <= 30){
        gameMessage = "You're on your way there!";
      }else if(timeTaken <= 40){
        gameMessage = "You are doing great! Keep it up!";
      }else{
        gameMessage = "Congrats! You protected the pie!"; 
      }
    }
    
    
    time = 0;
    textSize(20);
    text("Game over!", 200/400 * windowWidth, 200/400 * windowHeight);
    text(`${gameMessage}`, 200/400 * windowWidth, 200/400 * windowHeight - 20);
    gameIndex = 0;
    lid1 = createImg('assets/MenuButton.png', '');

    lid1.position(windowWidth/2-247.5, windowHeight-150);
    lid1.size(495, 120);
    lid1.mousePressed(mainMenu);
    lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));
    lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));
  }
  let timer = map(time, 0, 5, 0, 200);
  rect(20/400 * windowWidth, 20/400 * windowHeight, 10, timer);
}

function game3Start(){
  removeElements();
  
  if(difficulty==0){
    lives = 5;
  }else{
    lives = 3;
  }
  
  game3Setup();
  gameIndex = 3;
}

//Tara
function game3Setup(){
  
  background(220);
  
  image(cupbg, 0, 0, windowWidth, windowHeight);
  
  textSize(30);
  fill(30);
  text("Score:", 40, 100);
  text(score, 140, 100);
  
  text("Lives:", 40, 130);
  text(lives, 140, 130);
  
  
  let neww = createImg('assets/NewWord.png', '');
  neww.size(200, 200);
  neww.position(windowWidth/10, windowHeight/2);
  neww.mousePressed(handleNewWordPressed);
  neww.mouseOver(() => neww.attribute('src', 'assets/NewWordHovered.png'));
  neww.mouseOut(() => neww.attribute('src', 'assets/NewWord.png'));
  
  
  let oldw = createImg('assets/OldWord.png', '');
  oldw.size(200, 200);
  oldw.position(6*windowWidth/10, windowHeight/2);
  oldw.mousePressed(handleOldWordPressed);
  oldw.mouseOver(() => oldw.attribute('src', 'assets/OldWordHovered.png'));
  oldw.mouseOut(() => oldw.attribute('src', 'assets/OldWord.png'));
  
  timer = map(time, 0, 5, 0, 200);
  
  word();
}

function game3Draw(){
  if(lives <= 0){
    removeElements();
    let gameMessage;
    
    
    if(score <= 10){
      gameMessage = "Please consider talking to your doctor";
    }else if(score <= 15){
      gameMessage = "Keep Trying!";
    }else if(score <= 20){
      gameMessage = "You're on your way there!";
    }else if(score <= 25){
      gameMessage = "You are doing great! Keep it up!";
    }else{
      gameMessage = "You mastered the recipe!"; 
    }
    
    textSize(20);
    text("Game over!", 200/400 * windowWidth, 200/400 * windowHeight);
    text(`${gameMessage}`, 200/400 * windowWidth, 200/400 * windowHeight - 20);
    gameIndex = 0;
    lid1 = createImg('assets/MenuButton.png', '');

    lid1.position(windowWidth/2-247.5, windowHeight-150);
    lid1.size(495, 120);
    lid1.mousePressed(mainMenu);
    lid1.mouseOver(() => lid1.attribute('src', 'assets/MenuButtonHovered.png'));
    lid1.mouseOut(() => lid1.attribute('src', 'assets/MenuButton.png'));
  }
  
}

//Tara
function word() {
  choice = random(arr);
  fill(30);
  textSize(25);
  text(choice, windowWidth/2, 180);
}

//Tara
function handleNewWordPressed(){
  if(checkIfNew() == true){
    correctSound.play();
    score++;
  }else{
    incorrectSound.play();
    lives--;
  }
  removeElements();
  game3Setup();
  time = 5;
}
//Tara
function handleOldWordPressed(){
  if(checkIfOld() == true){
    correctSound.play();
    score++;
    console.log(score);
  }else{
    incorrectSound.play();
    lives--;
  }
  removeElements();
  game3Setup();
  time = 5;
}

//Tara
function checkIfOld(){
  for(const w of seen){
    if(w == choice){
      return true;
    }
  }
  seen.push(choice);
  return false;
}

//Tara
function checkIfNew(){
  for(const w of seen){
    if(w == choice){
      return false;
    }
  }
  seen.push(choice);
  return true;
  
}
