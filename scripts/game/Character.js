class Character extends Animation {
    constructor(mat, imageAnimation, x, widthAnimation, heightAnimation, widhtSprite, heightSprite) {
        super(mat, imageAnimation, x, widthAnimation, heightAnimation, widhtSprite, heightSprite)

        this.yInit = height - this.heightAnimation
        this.y = this.yInit

        this.speedJump = 0
        this.frameActual = 0
        this.gravity = 3
    }

    jump() {
        this.speedJump = -30
    }

    appGravity() {
        this.y += this.speedJump
        this.speedJump += this.gravity

        if (this.y > this.yInit) {
            this.y = this.yInit
        }
    }

    isCollide(Enemy) {
        const precision = 0.7
        return collideRectRect(
            this.x,
            this.y,
            this.widthAnimation * precision,
            this.heightAnimation * precision,
            Enemy.x,
            Enemy.y,
            Enemy.widthAnimation * precision,
            Enemy.heightAnimation * precision,
        )
    }
}