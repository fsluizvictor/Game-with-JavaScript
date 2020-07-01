class Score {
    constructor() {
        this.point = 0
    }

    show() {
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text(parseInt(this.point), width - 30, 50)
    }

    addScore() {
        this.point += 0.2
    }
}