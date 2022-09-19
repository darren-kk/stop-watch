"use strict";
let hrs = 0
let min = 0
let sec = 0
let sec_display = document.querySelector('.secs')
let min_display = document.querySelector('.mins')
let hrs_display = document.querySelector('.hours')

function handletime() {
 sec=sec + 1
 sec_display.innerText = sec 
 min_display.innerText = min
 hrs_display.innerText = hrs
 
 if(sec > 59){
  sec = 0
  min = min+1
 }
 if(sec < 10){
   sec_display.innerText = '0' + sec 
 }
 if(min > 59){
  min = 0
  hrs = hrs+1
 }
 if(min < 10){
  min_display.innerText = '0' + min
 }
 if(hrs < 10){
  hrs_display.innerText = '0' + hrs
 }
}

function stopwatch() {
  setInterval(handletime, 1000)
}

document.querySelector('#start').addEventListener('click', stopwatch)