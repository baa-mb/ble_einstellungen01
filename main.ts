bluetooth.startAccelerometerService()
bluetooth.startLEDService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
	
})
