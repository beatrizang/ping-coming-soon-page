const isEmpty = (cadena) => {
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}

function checkEmail() {
    let emptyEmail = 'Email cannot be empty';
    let notEmail = 'Looks like this is not an email';
    let emailFormat = 'email@example/com';

    let email = document.getElementById('email-input').value;
    
    if(isEmpty(email)){
        document.getElementById('email-error').innerHTML = emptyEmail;
        document.getElementById('email-input').style.border = "1px solid var(--light-red)";
    }
    else{
        if(!esEmail(email)){
            document.getElementById('email-input').value = emailFormat;
            document.getElementById('email-input').style.border = "1px solid var(--light-red)";
            document.getElementById('email-error').innerHTML = notEmail;
        }
        else{
            document.getElementById('email-error').innerHTML = '';
            document.getElementById('email-input').style.border = "1px solid var(--pale-blue)";
        }
    }
}