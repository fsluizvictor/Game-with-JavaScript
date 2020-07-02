let imageScenario
let imageCharacter
let imageEnemy
let imageBigEnemy
let imageEnemyFly
let imageGameOver

let scenario
let soundGame
let character
let ememy
let bigEnemy
let flyEnemy
let enemyActual = 0

let score

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

const matBigEnemy = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matEnemyFly = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const enemys = []

function preload() {
  imageCharacter = loadImage('./imagens/personagem/correndo.png')
  imageScenario = loadImage('./imagens/cenario/floresta.png')
  soundGame = loadSound('./sons/trilha_jogo.mp3')
  imageEnemy = loadImage('./imagens/inimigos/gotinha.png')
  imageBigEnemy = loadImage('./imagens/inimigos/troll.png')
  imageEnemyFly = loadImage('./imagens/inimigos/gotinha-voadora.png')
  imageGameOver = loadImage('./imagens/assets/game-over.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  scenario = new Scenario(imageScenario, 3)

  score = new Score()

  character = new Character(
    matCharacter,
    imageCharacter,
    0,
    30,
    110,
    135,
    220,
    270
  )
  const enemy = new Enemy(
    matEnemy,
    imageEnemy,
    width - 52,
    30,
    52,
    52,
    104,
    104,
    10,
    100,
  )

  const bigEnemy = new Enemy(
    matBigEnemy,
    imageBigEnemy,
    width * 2,
    0,
    200,
    200,
    400,
    400,
    10,
    100,
  )

  const flyEnemy = new Enemy(
    matEnemyFly,
    imageEnemyFly,
    width - 52,
    200,
    100,
    75,
    200,
    150,
    10,
    100,
  )

  enemys.push(enemy)
  enemys.push(bigEnemy)
  enemys.push(flyEnemy)

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

  score.show()
  score.addScore()

  character.show()
  character.appGravity()

  const enemyUn = enemys[enemyActual]
  const enemyVisible = enemyUn.x < -enemyUn.widthAnimation
  console.log(enemyUn.widthAnimation, enemyUn.x, enemyVisible)

  enemyUn.show()
  enemyUn.move()

  if (enemyVisible) {
    enemyActual++
    if (enemyActual > 2) {
      enemyActual = 0
    }
    enemyUn.speed = parseInt(random(10, 30))
  }

  if (character.isCollide(enemyUn)) {
    image(imageGameOver, width / 2 - 200, height / 3)
    noLoop()
  }
}

