function Splash_screen () {
    indicex = 0
    indicey = 0
    for (let indicex = 0; indicex <= 4; indicex++) {
        led.plot(indicex, indicey)
        basic.pause(50)
    }
}
input.onButtonPressed(Button.A, function () {
    if (inputnumber > 0) {
        inputnumber = inputnumber - 1
        basic.showNumber(inputnumber)
    } else {
        inputnumber = maxrange
        basic.showNumber(inputnumber)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (inputnumber == randomresult) {
        basic.showString("Win!")
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(500)
        basic.showString("" + (attempts))
    } else {
        if (inputnumber < randomresult) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . # .
                . . . . #
                `)
            basic.pause(1000)
        } else {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . # . . .
                # . . . .
                `)
            basic.pause(1000)
        }
        basic.showNumber(inputnumber)
        attempts = attempts + 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (inputnumber < maxrange) {
        inputnumber = inputnumber + 1
        basic.showNumber(inputnumber)
    } else {
        inputnumber = 0
        basic.showNumber(inputnumber)
    }
})
let indicey = 0
let indicex = 0
let inputnumber = 0
let randomresult = 0
let maxrange = 0
let attempts = 0
Splash_screen()
attempts = 1
maxrange = 5
randomresult = randint(0, maxrange)
inputnumber = 0
basic.showNumber(inputnumber)
basic.forever(function () {
	
})
