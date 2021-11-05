let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;


function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    if(count > 0) {
        count--;
    }
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

