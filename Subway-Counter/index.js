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


let count = 0

function increment() {
    count++
    document.getElementById("count-el").innerText = count
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = count
}

