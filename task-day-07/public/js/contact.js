function showData() {
    let name = document.getElementById('projectName').value
    let email = document.getElementById('inputEmail').value
    let phone = document.getElementById('phoneNumber').value
    let subject = document.getElementById('selectSubject').value
    let message = document.getElementById('inputMessage').value

    console.log(name);
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    if(name == '') {
        return alert('name is required')
    }
    if(email == '') {
        return alert('email is required')
    }
    if(phone == '') {
        return alert('phone is required')
    }
    if(subject == 'noSelected') {
        return alert('subject is required')
    }
    if(message == '') {
        return alert('message is required') 
    }

    let emailReceiver = 'arifrahman14377@gmail.com';
    let a = document.createElement('a');

    a.setAttribute('target', '_blank')
    
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`

    a.click()

}