input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xff8000)
    basic.showString("D")
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xff0000)
    basic.showString("C")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xffff00)
    basic.showString("E")
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xff9da5)
    basic.showString("F")
})
