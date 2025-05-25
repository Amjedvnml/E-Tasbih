let count = 0
let savedCount = []


let display = document.getElementById("display")
let saveButton = document.getElementById("save")
let resetButton = document.getElementById("reset")
let countButton = document.getElementById("count")
let savedDisplay = document.getElementById("saved")

display.value = count

function addCount() {
    count += 1
    display.value = count
}
function saveCount() {
    savedCount.push(count);
    savedDisplay.textContent ='Saved Counts: ' + savedCount.join(", ");
    display.value = count ;
}
function resetCount() {
    count = 0;
    display.value = count;
    savedCount = [];
    savedDisplay.textContent = 'Saved Counts: ';
}