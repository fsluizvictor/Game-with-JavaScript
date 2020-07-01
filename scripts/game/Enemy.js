class Enemy extends Animation {
    constructor(mat, imageAnimation, x, variationY, widthAnimation, heightAnimation, widhtSprite, heightSprite, speed, delay) {
        super(mat, imageAnimation, x, variationY, widthAnimation, heightAnimation, widhtSprite, heightSprite)

        this.speed = speed
        this.delay = delay
        this.x = width + this.delay
    }

    move() {
        this.x = this.x - this.speed

        if (this.x < -this.widthAnimation - this.delay) {
            this.x = width
        }
    }

}