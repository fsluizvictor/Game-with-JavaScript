function setup() {
  createCanvas(windowWidth, windowHeight)

  frameRate(40)
  //soundGame.loop()

  game = new Game()
  initScreen = new InitScreen()
  game.setup()
  scenes = {
    game,
    initScreen 
  }
}

function keyPressed() {
  game.keyPressed(key)
}

function draw() {
  scenes[sceneActual]

}

