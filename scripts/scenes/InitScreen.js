class InitScreen {
    constructor() {
    }

    draw() {
        this._background()
        this._text()
    }

    _background() {
        image(imageInitScreen, 0, 0, width, height)
    }

    _text() {
        textFont(font)
        texSize(50)
        textAlign(CENTER)
        text('The adventures of', width / 2, 100)
        text('Rick', width / 2, 1500)
    }
}