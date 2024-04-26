"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerIterator = countdownTimer(10);
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = (0, date_fns_1.differenceInSeconds)(countdownTime, now);
        console.log(`Remaining seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000);
    }
    else {
        console.log("Countdown Complete");
    }
}
displayCountdown();
