class Animation {
    constructor(mat, imageAnimation, x, widthAnimation, heightAnimation, widhtSprite, heightSprite) {
        this.mat = mat
        this.imageAnimation = imageAnimation
        this.widthAnimation = widthAnimation
        this.heightAnimation = heightAnimation
        this.x = x
        this.y = height - this.heightAnimation
        this.widhtSprite = widhtSprite
        this.heightSprite = heightSprite

        this.frameActual = 0
    }

    show() {
        image
            (
                this.imageAnimation,
                this.x,
                this.y,
                this.widthAnimation,
                this.heightAnimation,
                this.mat[this.frameActual][0],
                this.mat[this.frameActual][1],
                this.widhtSprite,
                this.heightSprite,
            )
        this.go()
    }

    go() {
        this.frameActual++

        if (this.frameActual >= this.mat.length - 1) {
            this.frameActual = 0
        }
    }
}