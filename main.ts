radio.onReceivedNumber(function (receivedNumber) {
    if (!(receivedNumber == 22)) {
        basic.showIcon(IconNames.Sad)
    }
})
function send_list (list: any[]) {
    count = 0
    send = ""
    for (let index = 0; index < list.length; index++) {
        send = "" + send + convertToText(list[count]) + "|"
        count += 1
    }
    radio.sendString(send)
}
radio.onReceivedString(function (receivedString) {
    list_received = []
    count = 0
    while (count < receivedString.length) {
        send = ""
        while (!(receivedString.charAt(count) == "|")) {
            send = "" + send + receivedString.charAt(count)
            count += 1
        }
        list_received.push(send)
        count += 1
    }
})
function setup () {
    radio.setGroup(22)
    radio.setTransmitSerialNumber(true)
    radio.sendNumber(22)
}
let list_received: string[] = []
let send = ""
let count = 0
setup()
