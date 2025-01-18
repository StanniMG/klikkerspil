// Labels
const talLabel = document.getElementById("talLabel");
const increaseLabel = document.getElementById("increaseLabel");
const increasePerSecLabel = document.getElementById("increasePerSecLabel");

// Buttons
const klikBtn = document.getElementById("klikBtn");
const x1 = document.getElementById("x1");
const x10 = document.getElementById("x10");
const x100 = document.getElementById("x100");
const x1000 = document.getElementById("x1000");
const x10000 = document.getElementById("x10000");
const x100000 = document.getElementById("x100000");
const x1000000 = document.getElementById("x1000000");
const x10000000 = document.getElementById("x10000000");
const x100000000 = document.getElementById("x100000000");
const x1000000000 = document.getElementById("x1000000000");
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

// Helper function to format numbers with a dot every three zeros
function formatNumber(number) {
    return number.toLocaleString('da-DK'); // Danish locale for "." as thousand separator
}

// Helper function to update UI
function updateUI() {
    talLabel.textContent = formatNumber(count);
    increaseLabel.textContent = `${formatNumber(increase)} per klik`;
    increasePerSecLabel.textContent = `${formatNumber(increasePerSec)} per sekund`;
    increaseBtn.textContent = `Køb +${formatNumber(plusIncrease)} per klik (${formatNumber(increaseCost)})`;
    secIncrease1Btn.textContent = `Køb +${formatNumber(plusIncreasePerSec)} per sekund (${formatNumber(increasePerSecCost)})`;
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

x1000.onclick = function () {
    increaseCost = 50000;
    plusIncrease = 1000;
    increasePerSecCost = 75000;
    plusIncreasePerSec = 5000;
    updateUI();
};
x10000.onclick = function () {
    increaseCost = 500000;
    plusIncrease = 10000;
    increasePerSecCost = 750000;
    plusIncreasePerSec = 50000;
    updateUI();
};
x100000.onclick = function () {
    increaseCost = 5000000;
    plusIncrease = 100000;
    increasePerSecCost = 7500000;
    plusIncreasePerSec = 500000;
    updateUI();
};
x1000000.onclick = function () {
    increaseCost = 50000000;
    plusIncrease = 1000000;
    increasePerSecCost = 75000000;
    plusIncreasePerSec = 5000000;
    updateUI();
};
x10000000.onclick = function () {
    increaseCost = 500000000;
    plusIncrease = 10000000;
    increasePerSecCost = 750000000;
    plusIncreasePerSec = 50000000;
    updateUI();
};
x100000000.onclick = function () {
    increaseCost = 5000000000;
    plusIncrease = 100000000;
    increasePerSecCost = 7500000000;
    plusIncreasePerSec = 500000000;
    updateUI();
};
x1000000000.onclick = function () {
    increaseCost = 50000000000;
    plusIncrease = 1000000000;
    increasePerSecCost = 75000000000;
    plusIncreasePerSec = 5000000000;
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
