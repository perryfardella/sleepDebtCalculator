/*
    File name: sleepDebt.js
    Purpose: calculates whether the user is currently operating with a sleep debt or surplus
    Author: Perry Fardella
*/

// Hard code the number of hours sleep you get a night here.
function getSleepHours (day) {
    if (day === 'Monday') {
        return 9;
    } else if (day === 'Tuesday') {
        return 8;
    } else if (day === 'Wednesday') {
        return 7;
    } else if (day === 'Thursday') {
        return 7;
    } else if (day === 'Friday') {
        return 7;
    } else if (day === 'Saturday') {
        return 7;
    } else if (day === 'Sunday') {
        return 7;
    } else {
        console.log("Incorrect day entered.");
    }
};

// Function to total the amount of sleep you get in a week
function getActualSleepHours() {
    var total = 0;
    total += getSleepHours('Monday');
    total += getSleepHours('Tuesday');
    total += getSleepHours('Wednesday');
    total += getSleepHours('Thursday');
    total += getSleepHours('Friday');
    total += getSleepHours('Saturday');
    total += getSleepHours('Sunday');
    return total;
}

// Hard code how many hours ideally you'd like to get a night here
function getIdealSleepHours() {
    return 7*7;
}

// Function to calculate the sleep debt/surplus
function calculateSleepDebt() {
    if (getIdealSleepHours() === getActualSleepHours()) {
        console.log('There is no sleep debt!')
    } else if (getIdealSleepHours() < getActualSleepHours()) {
        console.log('You have a sleep surplus of ' + (getActualSleepHours() - getIdealSleepHours()) + ' hours.')
    } else if (getIdealSleepHours() > getActualSleepHours()) {
        console.log('You have a sleep debt of ' + (getIdealSleepHours() - getActualSleepHours()) + ' hours.')
    } else {
        console.log('The fuck have you done bruv?');
    }
};

calculateSleepDebt();