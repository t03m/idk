edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    edubitMotors.setServoPosition(ServoChannel.S1, -180)
    music.play(music.stringPlayable("C C E E G G C5 C5 ", 120), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    music.play(music.stringPlayable("C5 C5 G G E E C C ", 120), music.PlaybackMode.UntilDone)
})
edubitIrBit.onIrSensorEvent(IrEventType.Fall, function () {
    edubitMotors.setServoPosition(ServoChannel.S1, 90)
})
edubitMotors.setServoPosition(ServoChannel.S1, 90)
