const saveInpBtn = document.getElementById('save-inp-btn')
const inputEl = document.getElementById('input-el')
const leadsList = document.getElementById('leads-list')

const myLeads = []

saveInpBtn.addEventListener('click',saveInput)

function saveInput(){
    if(inputEl.value){
        myLeads.push(inputEl.value)
        inputEl.value = ''
    }
    renderLeads(myLeads)
}

function renderLeads(arr){
    let html = ''
    arr.forEach(lead => {
        html += `
            <li><a href="${lead}" target="blank">${lead}</a></li>
        `
    })
    leadsList.innerHTML = html
}