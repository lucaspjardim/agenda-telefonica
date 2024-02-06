const form = document.getElementById('form-agenda')
let lines =''
let formisValid = false

function nameValidation(nameContact) {
    const nameArray = nameContact.split(' ')
    return nameArray.length >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nameContact = document.getElementById('name-contact')
    const telContact = document.getElementById('tel-contact')

    const warningMessage = "Por favor preencha com Nome e Sobrenome"

    formisValid = nameValidation(nameContact.value)
    if (formisValid) {

        let line = '<tr>'
        line += `<td>${nameContact.value}</td>`
        line += `<td>${telContact.value}</td>`
        line += '</tr>'

        lines += line

        const tableBody = document.querySelector('tbody')
        tableBody.innerHTML = lines
    } else {
        const errorMessage = document.querySelector('.warning')
        errorMessage.innerHTML = warningMessage
        errorMessage.style.display = 'block'
        
        setTimeout(function() {
            errorMessage.style.display = 'none'
        }, 5000)
    }
    
})