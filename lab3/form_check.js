
function validate(form){
checkStringAndFocus(form.elements["f_imie"], "Puste pole imię!");
checkStringAndFocus(form.elements["f_nazwisko"], "Puste pole nazwisko!");
checkEmailAndFocus(form.elements["f_email"], "Niewłaściwy email");
checkStringAndFocus(form.elements["f_kod"], "Puste pole kod pocztowy!");
checkStringAndFocus(form.elements["f_ulica"], "Puste pole ulica!");
checkStringAndFocus(form.elements["f_miasto"], "Puste pole miasto!");
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

function isWhiteSpaceOrEmpty(str){
    return /^[\s\t\r\n]*$/.test(str);
}

function showElement(e,z){
    document.getElementById(e).style.visibility = 'visible';
    document.getElementById(z).style.visibility = 'visible';
    
}

function hideElement(e,z){
    document.getElementById(e).style.visibility = 'hidden';
    document.getElementById(z).style.visibility = 'hidden';

}

function alterRows(i,e){
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while( e && e.nodeType!= 1){
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e){
    while(e && e.nodeType != 1){
        e = e.nextSibling;
    }
    return e;
}

function prevNode(e){
    while(e && e.nodeType != 1){
        e = e.previousSibling;
    }
    return e;
}

function swapRows(b){
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize){
    if(form.value.length > maxSize)
        form.value = form.value.substring(0,maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}
