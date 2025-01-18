// Labels
const talLabel = document.getElementById("talLabel");
const increaseLabel = document.getElementById("increaseLabel");
const increasePerSecLabel = document.getElementById("increasePerSecLabel");

// Buttons
const klikBtn = document.getElementById("klikBtn");
const x1 = document.getElementById("x1");
const x10 = document.getElementById("x10");
const x100 = document.getElementById("x100");
const increaseBtn = document.getElementById("increase1Btn");
const secIncrease1Btn = document.getElementById("secIncrease1Btn");

// Variables
let count = 0;
let increase = 1;
let increaseCost = 50;
let plusIncrease = 1;
let increasePerSec = 0;
let increasePerSecCost = 75;
let plusIncreasePerSec = 5;

// Helper function to update UI
function updateUI() {
    talLabel.textContent = count;
    increaseLabel.textContent = `${increase} per klik`;
    increasePerSecLabel.textContent = `${increasePerSec} per sekund`;
    increaseBtn.textContent = `Køb +${plusIncrease} klik (${increaseCost})`;
    secIncrease1Btn.textContent = `Køb +${plusIncreasePerSec} pr. sekund (${increasePerSecCost})`;
}

// Initial UI setup
updateUI();

// Click event for manual increment
klikBtn.onclick = function () {
    count += increase;
    updateUI();
};

// Multiplicator buttons
x1.onclick = function () {
    increaseCost = 50;
    plusIncrease = 1;
    increasePerSecCost = 75;
    plusIncreasePerSec = 5;
    updateUI();
};

x10.onclick = function () {
    increaseCost = 500;
    plusIncrease = 10;
    increasePerSecCost = 750;
    plusIncreasePerSec = 50;
    updateUI();
};

x100.onclick = function () {
    increaseCost = 5000;
    plusIncrease = 100;
    increasePerSecCost = 7500;
    plusIncreasePerSec = 500;
    updateUI();
};

// Buy more clicks
increaseBtn.onclick = function () {
    if (count >= increaseCost) {
        count -= increaseCost;
        increase += plusIncrease;
        updateUI();
    }
};

// Buy more points per second
secIncrease1Btn.onclick = function () {
    if (count >= increasePerSecCost) {
        count -= increasePerSecCost;
        increasePerSec += plusIncreasePerSec;
        updateUI();
    }
};

// Auto-increment points per second
setInterval(function () {
    count += increasePerSec;
    updateUI();
}, 1000); // Update every second
