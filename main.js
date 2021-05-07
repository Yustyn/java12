let $email = document.querySelector('input.email'),
    $button = document.querySelector('button.ok'),
    $passw = document.getElementById('passw'),
    $confpassw = document.getElementById('confpassw'),
    $fname = document.getElementById('fname'),
    $lname = document.getElementById('lname')

let True

$button.addEventListener('click', () => {
    if ($email.value.includes('@') && $email.value.includes('.')) {
        $email.style.border = '2px solid green'
    } else {
        $email.style.border = '2px solid red'
        True = false
    }
    if ($passw.value.length > 7) {
        $passw.style.border = '2px solid green'
    } else {
        $passw.style.border = '2px solid red'
        True = false
    }
    if ($passw.value === $confpassw.value) {
        $confpassw.style.border = '2px solid green'
    } else {
        $confpassw.style.border = '2px solid red'
        True = false
    }
    if (True != false && True == undefined) {
        alert('Привіт ' + $fname.value + ' ' + $lname.value + '!')
    }
    console.log(True)
})