let imageScenario
let imageCharacter
let imageEnemy

let scenario
let soundGame
let character
let ememy

this.matCharacter = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matEnemy = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
]

function preload() {
  imageCharacter = loadImage('./imagens/personagem/correndo.png')
  imageScenario = loadImage('./imagens/cenario/floresta.png')
  soundGame = loadSound('./sons/trilha_jogo.mp3')
  imageEnemy = loadImage('./imagens/inimigos/gotinha.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  scenario = new Scenario(imageScenario, 3)
  character = new Character(
    matCharacter,
    imageCharacter,
    0,
    110,
    135,
    220,
    270
  )
  enemy = new Enemy(
    matEnemy,
    imageEnemy,
    width - 52,
    52,
    52,
    104,
    104,
  )
  frameRate(40)
  //soundGame.loop()
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump()
  }
}

function draw() {
  scenario.show()
  scenario.move()

  character.show()
  character.appGravity()

  enemy.show()
  enemy.move()

  if (character.isCollide(enemy)) {
    noLoop()
  }

}

