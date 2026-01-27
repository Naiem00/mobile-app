"use strict";

const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let timeoutId;
let stopTime = 0;

const startSound = document.getElementById("startSound");
const stopSound = document.getElementById("stopSound");
const resetSound = document.getElementById("resetSound");
const perfectSound = document.getElementById("perfectSound");

setButtonStateInitial();

start.addEventListener("click", function () {
  setButtonStateRunning();
  startTime = Date.now();
  countUp();
  startSound.currentTime = 0;
  startSound.play();
});

stop.addEventListener("click", function () {
  clearTimeout(timeoutId);
  setButtonStateStopped();
  stopTime += Date.now() - startTime;
  stopSound.currentTime = 0;
  stopSound.play();

  const elapsed = stopTime / 1000;
  if (Math.abs(elapsed - 10.0) < 0.05) {
    perfectSound.currentTime = 0;
    perfectSound.play();
    timer.textContent += " 🎯 PERFECT!";
  }
});

reset.addEventListener("click", function () {
  clearTimeout(timeoutId);
  setButtonStateInitial();
  timer.textContent = "00:00.000";
  stopTime = 0;
  resetSound.currentTime = 0;
  resetSound.play();
});

function countUp() {
  const d = new Date(Date.now() - startTime + stopTime);
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  timer.textContent = `${m}:${s}.${ms}`;
  timeoutId = setTimeout(countUp, 10);
}

function setButtonStateInitial() {
  start.classList.remove("js-inactive", "js-unclickable");
  stop.classList.add("js-inactive", "js-unclickable");
  reset.classList.add("js-inactive", "js-unclickable");
}

function setButtonStateRunning() {
  timer.classList.add("timer-fontColor_hidden");
  start.classList.add("js-inactive", "js-unclickable");
  stop.classList.remove("js-inactive", "js-unclickable");
  reset.classList.add("js-inactive", "js-unclickable");
}

function setButtonStateStopped() {
  timer.classList.remove("timer-fontColor_hidden");
  timer.classList.add("timer_appear");
  start.classList.add("js-inactive", "js-unclickable");
  stop.classList.add("js-inactive", "js-unclickable");
  reset.classList.remove("js-inactive", "js-unclickable");
}
