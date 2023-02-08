// document.getElementById("count-el").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

// var totalTime = 0
// function addTimes(amountOfRaces) {
//     let time;
//     for (let i = 1; i < amountOfRaces + 1; i++){
//         time = parseFloat(window.prompt("What was the time of race " + i + " in seconds?"))
//         totalTime += time
//         console.log(totalTime)
//     }
//     window.alert("The total time was " + totalTime)
// }
// function howManyRaces() {
//     let tempNum = window.prompt("How many races were there?")
//     totalNumber = parseFloat(tempNum)
//     return totalNumber
// }


// addTimes(howManyRaces())


var today;
var date;
var time;
var dateTime;

let count = 0
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")
let saveElOriginal = saveEl.textContent

function increment() {
    count++
    countEl.textContent = count
}

function reset() {
    saveEl.textContent = saveElOriginal

}


function save() {
    if (saveEl.textContent == saveElOriginal){
        saveEl.textContent += " " + count
    }
    else {
        saveEl.textContent += " - " + count
    }
    today = new Date()
    date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + "    " + time;
    console.log(countEl.textContent + " --> " + dateTime)
    count = 0
    countEl.textContent = count
}
function decrement() {
    if (count > 0){
        count--
    }
    countEl.innerText = count
}