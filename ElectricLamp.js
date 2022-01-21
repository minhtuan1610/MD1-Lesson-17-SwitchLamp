class ElectricLamp {
    constructor(status) {
        this.status = status;
    }


    turnOnOff() {
        this.status = !this.status;
        if (this.status) {
            console.log("Đèn BẬT");
        } else {
            console.log("Đèn TẮT");
        }
    }
}