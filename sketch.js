let imageScenario
let imageCharacter
let scenario

function preload() {
  imageCharacter = loadImage('./imagens/personagem/correndo.png')
  imageScenario = loadImage('./imagens/cenario/floresta.png')
}

function setup() {
  scenario = new Scenario(imageScenario, 50)
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  scenario.show()
  image(imageCharacter, 0, height - 135, 110, 135, 0, 0, 220, 270)
}

class Scenario {
  constructor(image, speed) {
    this.image = image
    this.speed = speed
  }

  show() {
    image(this.image, -this.speed, 0, width, height)
    image(this.image, width - this.speed + 1, 0, width, height)
  }

}