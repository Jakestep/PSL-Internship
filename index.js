const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    var myLeads = leadsFromLocalStorage
} else {
    var myLeads = []
}
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'> " + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }

    ulEL.innerHTML = listItems
}
render(myLeads)
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = null
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})


clearBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    // console.log(window.location.href)
    myLeads.push(window.location.href)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})