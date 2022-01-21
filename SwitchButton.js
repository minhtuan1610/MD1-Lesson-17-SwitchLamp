class SwitchButton {
    constructor(lamp) {
        this.lamp = lamp;
    }

    connectToLamp(electricLamp) {
        this.lamp = electricLamp;
    }

    switchOffOn() {
        this.lamp.turnOnOff();
    }
}
