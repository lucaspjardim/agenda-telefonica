const form = document.getElementById('form-agenda')
let lines =''
let formIsValid = false
let contactCount = 0
const contacts = []
const telNumbers = []

function nameValidation(nameContact) {
    const nameArray = nameContact.split(' ')
    return nameArray.length >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    addLines()
    updateLines()
})

function addLines() {

    const nameContact = document.getElementById('name-contact')
    const telContact = document.getElementById('tel-contact')
    const errorM = "Por favor preencha com Nome e Sobrenome"
    const warningM = `O numero ${telContact.value} já esta na sua agenda!`
    
    formIsValid = nameValidation(nameContact.value)

    if (formIsValid === false) {
        const errorMessage = document.querySelector('.error')
        errorMessage.innerHTML = errorM
        errorMessage.style.display = 'block'
        
        setTimeout(function() {
            errorMessage.style.display = 'none'
        }, 5000)
        
    } else if (telNumbers.includes(parseFloat(telContact.value))){
        const warningMessage = document.querySelector('.warning')
        warningMessage.innerHTML = warningM
        warningMessage.style.display = 'block'
        
        setTimeout(function() {
            warningMessage.style.display = 'none'
        }, 5000)
    } else {

        telNumbers.push(parseFloat(telContact.value))

        let line = '<tr>'
        line += `<td>${nameContact.value}</td>`
        line += `<td>${telContact.value}</td>`
        line += '</tr>'

        lines += line
        contactCount++
        
    }
}
function updateLines () {

        const tableBody = document.querySelector('tbody')
        tableBody.innerHTML = lines

        const footerCount = document.querySelector('footer')
        footerCount.innerHTML = `Total de contatos na agenda: ${contactCount}`
        footerCount.style.display = 'block'
}