let degrees = 0
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, 360)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(500)
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
