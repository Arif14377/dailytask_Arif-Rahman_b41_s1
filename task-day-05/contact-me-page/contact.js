function showData() {
    let name = document.getElementById('inputName').value
    let email = document.getElementById('inputEmail').value
    let phone = document.getElementById('phoneNumber').value
    let subject = document.getElementById('selectSubject').value
    let message = document.getElementById('inputMessage').value

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    if(name == '') {
        return alert('Name is required')
    } else if(email == '') {
        return alert('Email is required')
    } else if(phone == '') {
        return alert('Phone Number is required')
    } else if(subject == 0) {
        return alert('Subject is required')
    }

    let emailReceiver = 'arifrahman14377@gmail.com'
    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body= Hello, My Name is ${name}. ${message}. Thanks`
    a.click();
}