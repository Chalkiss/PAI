
function validate(form){
checkStringAndFocus(form.elements["f_imie"], "Puste pole imię!");
checkStringAndFocus(form.elements["f_nazwisko"], "Puste pole nazwisko!");
checkEmailAndFocus(form.elements["f_email"], "Niewłaściwy email");
checkStringAndFocus(form.elements["f_kod"], "Puste pole kod pocztowy!");
checkStringAndFocus(form.elements["f_ulica"], "Puste pole ulica!");
checkStringAndFocus(form.elements["f_miasto"], "Puste pole miasto!");
}

function isWhiteSpaceOrEmpty(str){
    return /^[\s\t\r\n]*$/.test(str);
}

function checkString(s, message){
    if (isWhiteSpaceOrEmpty(s)== true){
        alert(message);
        return false;
    }
    else{
        return true;
    }
}

function checkEmailAndFocus(obj, msg){
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    let str = obj.value;
    let errorFieldName = "e_"+ obj.name.substr(2, obj.name.length);
    if(email.test(str))
        return true;
    else{
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
}

function checkStringAndFocus(obj, msg){
    let str = obj.value;
    let errorFieldName = "e_"+ obj.name.substr(2, obj.name.length);
    if(isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else{
        return true;
    }
}