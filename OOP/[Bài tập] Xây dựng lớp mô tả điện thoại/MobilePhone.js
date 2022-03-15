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
document.querySelector("#phonename1").innerHTML = nokia.phonename;
document.querySelector("#phonebattery1").innerHTML = nokia.showEnergy();

//Turn ON/OFF phone1
document.querySelector("#startphone1").addEventListener("input", () => {
    let check = document.querySelector("#startphone1").checked;
    if (check) {
        document.querySelector("#phone1").setAttribute("disabled", "");
    }
    if (!check) {
        document.querySelector("#phone1").removeAttribute("disabled");
    }
});
//Compose,show sent message on phone1, send message to phone2 and show received message on phone2
document.querySelector("#sendtext1").addEventListener("click",() => {
    let text = document.querySelector("#typetext1").value;
    nokia.composeMessage(text, samsung);
    document.querySelector("#typetext1").value = "";
    document.querySelector("#savesentmessages1").innerHTML=renderMessage(nokia.showSentMessage());
    document.querySelector("#savereceivedmessages2").innerHTML=renderMessage(samsung.showReceivedMessage());
    document.querySelector("#phonebattery1").innerHTML = nokia.showEnergy();
});

function renderMessage(array) {
    const render = array.map((element,index) =>
    `<p>"${element}" <a href="javascrip:;" onclick="deleteMessage(${array},${index})">Delete</a>`);
    return render.join("");
} 

// function deleteMessage(array,index) {
//     array.splice(index,1);
//     renderMessage(array);
// }

samsung.useBattery(pin2);
samsung.useMemory(mem2);
document.querySelector("#phonename2").innerHTML = samsung.phonename;
document.querySelector("#phonebattery2").innerHTML = samsung.showEnergy();

//Turn ON/OFF phone2
document.querySelector("#startphone2").addEventListener("input", () => {
    let check = document.querySelector("#startphone2").checked;
    if (check) {
        document.querySelector("#phone2").setAttribute("disabled", "");
    }
    if (!check) {
        document.querySelector("#phone2").removeAttribute("disabled");
    }
});
//Compose,show sent message on phone2, send message to phone1 and show received message on phone2
document.querySelector("#sendtext2").addEventListener("click",() => {
    let text = document.querySelector("#typetext2").value;
    samsung.composeMessage(text, nokia);
    document.querySelector("#typetext2").value = "";
    document.querySelector("#savesentmessages2").innerHTML=renderMessage(samsung.showSentMessage());
    document.querySelector("#savereceivedmessages1").innerHTML=renderMessage(nokia.showReceivedMessage());
    document.querySelector("#phonebattery2").innerHTML = samsung.showEnergy();
});


// nokia.composeMessage("Hello!", samsung);
// console.log(samsung.showReceivedMessage());
// console.log(nokia.showEnergy());
// nokia.turnOnCharge();
// console.log(nokia.showEnergy());

// samsung.composeMessage("Nice to meet you!", nokia);
// console.log(nokia.showReceivedMessage());
// console.log(samsung.showEnergy());

// console.log(nokia.showEnergy());
// console.log(samsung.showEnergy());