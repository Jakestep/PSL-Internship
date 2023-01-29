




function addOne(id) {
    let count = document.getElementById(id).textContent
    count = parseInt(count)
    count += 1
    document.getElementById(id).innerText = count
}
function addTwo(id) {
    let count = document.getElementById(id).textContent
    count = parseInt(count)
    count += 2
    document.getElementById(id).innerText = count
}
function addThree(id) {
    let count = document.getElementById(id).textContent
    count = parseInt(count)
    count += 3
    document.getElementById(id).innerText = count
}

function reset() {
    document.getElementById("homeScore").textContent = 0
    document.getElementById("awayScore").textContent = 0
}