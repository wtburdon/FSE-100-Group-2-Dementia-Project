let bg1, bg2, bg3;
let backgroundImage;
let difficulty;

let gImage;
let lid1, lid2, lid3;
let pDish;
let gameStates = [0, 1, 2, 3];
let gameIndex = 0;

function preload(){
  backgroundImage = loadImage('output.jpg');
  gImage = loadImage('wallpaper.png');
  pDish = loadImage('pickDish.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  mainMenu();
}

function draw() {
  if(gameStates[gameIndex] == 0){
    
  }else if(gameStates[gameIndex] == 1){
    
  }else if(gameStates[gameIndex] == 2){

  }else if(gameStates[gameIndex] == 3){

  }
  
}

function mainMenu() {
  removeElements();


  
  
  image(backgroundImage, 0, 0, windowWidth, windowHeight);
  image(pDish, windowWidth/2 - 100, windowHeight/2 - 100, 200, 200);
  
  lid1 = createImg('closedlid.png', '');

  lid1.position(windowWidth/5, (3*windowHeight)/5);
  lid1.size(windowWidth/5, windowHeight/5);
  lid1.mousePressed(game1);
  lid1.mouseOver(() => lid1.attribute('src', 'assets/placeholder.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'closedlid.png'));

  lid2 = createImg('closedlid.png', '');

  lid2.position(windowWidth/5 + windowWidth/5, 3*windowHeight/5);
  lid2.size(windowWidth/5, windowHeight/5);
  lid2.mousePressed(game2);
  lid2.mouseOver(() => lid2.attribute('src', 'assets/placeholder.png'));
  lid2.mouseOut(() => lid2.attribute('src', 'closedlid.png'));

  lid3 = createImg('closedlid.png', '');

  lid3.position(windowWidth/5 + 2*windowWidth/5, 3*windowHeight/5);
  lid3.size(windowWidth/5, windowHeight/5);
  lid3.mousePressed(game3);
  lid3.mouseOver(() => lid3.attribute('src', 'assets/placeholder.png'));
  lid3.mouseOut(() => lid3.attribute('src', 'closedlid.png'));
}

function game1() {
  removeElements();

  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(mainMenu);

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 + 125);
  bg2.mousePressed(mainMenu);

  lid1 = createImg('rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'rMenu.png'));
}

function game2() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);
  
  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(mainMenu);

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 + 125);
  bg2.mousePressed(mainMenu);

  lid1 = createImg('rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'rMenu.png'));
}

function game3() {
  removeElements();
  
  image(gImage, 0, 0, windowWidth, windowHeight);

  bg1 = createButton('Normal');
  bg1.position(windowWidth/2, windowHeight/4 + 100);
  bg1.mousePressed(mainMenu);

  bg2 = createButton('Hard');
  bg2.position(windowWidth/2, windowHeight/4 +125);
  bg2.mousePressed(mainMenu);

  lid1 = createImg('rMenu.png', '');

  lid1.position(windowWidth/3, windowHeight/4 + 150);
  lid1.size(windowWidth/2, windowHeight/4);
  lid1.mousePressed(mainMenu);
  lid1.mouseOver(() => lid1.attribute('src', 'rMenuHover.png'));
  lid1.mouseOut(() => lid1.attribute('src', 'rMenu.png'));
}


class CardMatchingGame {
  constructor(numCards = 16, cardSize = 100) {
    this.numCards = numCards;
    this.cardSize = cardSize;
    this.cards = [];
    this.selectedCards = [];
    this.matches = 0;

    this.createCards();
    this.shuffleCards();
    this.arrangeCards();
  }

  createCards() {
    let values = [];
    for (let i = 0; i < this.numCards / 2; i++) {
      values.push(i);
      values.push(i);
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

  draw() {
    background(220);
    this.drawCards();

    if (this.matches === this.numCards / 2) {
      textSize(32);
      fill(0);
      text("You Win!", width / 2, height / 2);
    }
  }

  drawCards() {
    for (let i = 0; i < this.numCards; i++) {
      let card = this.cards[i];

      fill(255);
      stroke(0);
      rect(card.x, card.y, this.cardSize, this.cardSize);

      if (card.faceUp) {
        textSize(32);
        fill(0);
        text(card.value, card.x + this.cardSize / 2, card.y + this.cardSize / 2);
      }
    }
  }

  handleMousePressed() {
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
      setTimeout(() => {
        if (this.selectedCards[0].value === this.selectedCards[1].value) {
          this.matches++;
          this.selectedCards[0].faceUp = true;
          this.selectedCards[1].faceUp = true;
        } else {
          this.selectedCards[0].faceUp = false;
          this.selectedCards[1].faceUp = false;
        }
        this.selectedCards = [];
      }, 1000);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new CardMatchingGame();
}

function draw() {
  game.draw();
}

function mousePressed() {
  game.handleMousePressed();
}