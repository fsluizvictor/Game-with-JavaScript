class Game {
    constructor() {
        this.enemyActual = 0

    }

    setup() {

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

    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            character.jump()
        }
    }

    draw() {
        scenario.show()
        scenario.move()

        score.show()
        score.addScore()

        character.show()
        character.appGravity()

        const enemyUn = enemys[this.enemyActual]
        const enemyVisible = enemyUn.x < -enemyUn.widthAnimation
        console.log(enemyUn.widthAnimation, enemyUn.x, enemyVisible)

        enemyUn.show()
        enemyUn.move()

        if (enemyVisible) {
            this.enemyActual++
            if (this.enemyActual > 2) {
                this.enemyActual = 0
            }
            enemyUn.speed = parseInt(random(10, 30))
        }

        if (character.isCollide(enemyUn)) {
            image(imageGameOver, width / 2 - 200, height / 3)
            noLoop()
        }

    }
}