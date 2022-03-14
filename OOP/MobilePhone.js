class Mobilephone {
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
    }
    showSentMessage() {
        return this.memory.getSentMessage();
    }
    showReceivedMessage() {
        return this.memory.getInboxMessage();
    }
}


class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
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

let nokia = new Mobilephone();
let pin1 = new Battery(100);
let mem1 = new Memory(300);

let samsung = new Mobilephone();
let pin2 = new Battery(80);
let mem2 = new Memory(200);

nokia.useBattery(pin1);
nokia.useMemory(mem1);
samsung.useBattery(pin2);
samsung.useMemory(mem2);

nokia.composeMessage("Hello!",samsung);
console.log(samsung.showReceivedMessage());

samsung.composeMessage("Nice to meet you!",nokia);
console.log(nokia.showReceivedMessage());
// console.log(nokia.showEnergy());
// console.log(samsung.showEnergy());