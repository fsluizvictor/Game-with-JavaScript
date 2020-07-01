class Character extends Animation {
    constructor(mat, imageAnimation, x, variationY, widthAnimation, heightAnimation, widhtSprite, heightSprite) {
        super(mat, imageAnimation, x, variationY, widthAnimation, heightAnimation, widhtSprite, heightSprite)

        this.variationY = variationY
        this.yInit = height - this.heightAnimation
        this.y = this.yInit

        this.speedJump = 0
        this.frameActual = 0
        this.gravity = 4

        this.heightJump = -50

        this.jumps = 0
    }

    jump() {
        if (this.jumps < 3) {
            this.speedJump = this.heightJump
            this.jumps++
        }
    }

    appGravity() {
        this.y += this.speedJump
        this.speedJump += this.gravity

        if (this.y > this.yInit) {
            this.y = this.yInit
            this.jumps = 0
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