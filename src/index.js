"use strict";

let hrs = 0;
let min = 0;
let sec = 0;

let intervalId = undefined;

const hrs_display = document.querySelector('.hours');
const min_display = document.querySelector('.mins');
const sec_display = document.querySelector('.secs');

function handletime() {
 sec=sec + 1;
 sec_display.innerText = sec;
 min_display.innerText = min;
 hrs_display.innerText = hrs;
 
 if (sec > 59) {
  sec = 0;
  min = min+1;
 }
 if (sec < 10) {
   sec_display.innerText = '0' + sec;
 }

 if (min > 59) {
  min = 0;
  hrs = hrs+1;;
 }
 if (min < 10) {
  min_display.innerText = '0' + min;
 }

 if (hrs < 10) {
  hrs_display.innerText = '0' + hrs;
 }
}

function startTimer() {
  if (!intervalId) { 
    intervalId = setInterval(handletime, 1000);
  }
}

function pause() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
}

function reset() {
  hrs = 0;
  min = 0;
  sec = 0;

  sec_display.innerText = '0' + sec;
  min_display.innerText = '0' + min;
  hrs_display.innerText = '0' + hrs;

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
}


document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', pause);
document.querySelector('#reset').addEventListener('click', reset);
