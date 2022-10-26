function showData() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == '') {
        return alert('Name is required');
    }
    if (email == '') {
        return alert('Email is required');
    }
    if (phone == '') {
        return alert('Phone Number is required')
    }
    if (message == '') {
        return alert('Message is required');
    }

    let emailReceiver = 'arifrahman14377@gmail.com'
    let a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject:${subject}&body= Hello, My Name is ${name}. ${message};`
    a.click();
}

/* https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message} */
// a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=Hello%20my%name%20is${name},\\%20Let's%20Talk,%20Let's%20talk%20with%20me%20asap.${message};`