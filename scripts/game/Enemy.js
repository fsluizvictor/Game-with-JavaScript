class Enemy extends Animation {
    constructor(mat, imageAnimation, x, widthAnimation, heightAnimation, widhtSprite, heightSprite) {
        super(mat, imageAnimation, x, widthAnimation, heightAnimation, widhtSprite, heightSprite)
        this.speed = 10
    }

    move() {
        this.x = this.x - this.speed

        if (this.x < -this.widthAnimation) {
            this.x = width
        }
    }

}