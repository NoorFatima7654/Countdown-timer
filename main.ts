#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
import { DifferenceInSecondsOptions } from "date-fns/differenceInSeconds";

// step : 1 function for countdown second



function * countdownTimer(second: number) {
    while (second > 0){
        yield second;
        second--;
    }
}
//step :2 counter initilization

let timerIterator = countdownTimer(10);

// function to create a count down timer

function displayCountdown() {
    // value below 10
    let result =timerIterator.next();

    // if -else condition apply


    if (!result.done) {
        // current date and time calls
        const now = new Date();
//calculate minutes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000))

      // calculate  remaining seconds in time
        const remainingSeconds = differenceInSeconds (countdownTime , now)
            console.log( `Remaining seconds: ${remainingSeconds}`)
setTimeout(displayCountdown, 1000)
        
    } else {
        console.log("Countdown Complete");
        
    }
}
displayCountdown();