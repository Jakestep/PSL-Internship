function addOne(id) {
    let count = document.getElementById(id).textContent
    count++
    document.getElementById(id).innerText = count
}