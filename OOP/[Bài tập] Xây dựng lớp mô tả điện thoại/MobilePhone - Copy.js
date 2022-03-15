class Mobilephone {
    constructor(name) {
        this.phonename = name;
    }
    useBattery(battery) {
        return this.battery = battery;
    }
    useMemory(memory) {
        return this.memory = memory;
    }

    showEnergy() {
        return this.battery.getEnergy();
    }

    receivedMessage(msg) {
        this.memory.saveInboxMessage(msg);
    }
    composeMessage(msg, otherphone) {
        this.memory.saveSentMessage(msg);
        otherphone.receivedMessage(msg);
        this.battery.consumeEnergy();
    }
    showSentMessage() {
        return this.memory.getSentMessage();
    }
    showReceivedMessage() {
        return this.memory.getInboxMessage();
    }

    turnOnCharge() {
        this.battery.chargeBattery();
    }
}


class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }

    consumeEnergy() {
        this.energy -= 2;
    }

    chargeBattery() {
        while (this.energy < 100) {
            this.energy++;
        }
    }
}

class Memory {
    constructor(capacity) {
        this.capacity = capacity;
        this.sent = [];
        this.inbox = [];
    }

    saveInboxMessage(msg) {
        this.inbox.push(msg);
    }
    saveSentMessage(msg) {
        this.sent.push(msg);
    }

    getSentMessage() {
        return this.sent;
    }
    getInboxMessage() {
        return this.inbox;
    }
}

let nokia = new Mobilephone('Nokia');
let pin1 = new Battery(60);
let mem1 = new Memory(300);

let samsung = new Mobilephone('Samsung');
let pin2 = new Battery(80);
let mem2 = new Memory(200);

nokia.useBattery(pin1);
nokia.useMemory(mem1);
samsung.useBattery(pin2);
samsung.useMemory(mem2);

nokia.composeMessage("Hello!", samsung);
console.log(samsung.showReceivedMessage());
console.log(nokia.showEnergy());
nokia.turnOnCharge();
console.log(nokia.showEnergy());

samsung.composeMessage("Nice to meet you!", nokia);
console.log(nokia.showReceivedMessage());
console.log(samsung.showEnergy());

// console.log(nokia.showEnergy());
// console.log(samsung.showEnergy());