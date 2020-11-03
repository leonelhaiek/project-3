/*** Name ***/
function nameFocus() {
    var msg = document.getElementsByName("error-name")[0];
    msg.classList.replace("error", "none");
}

function nameBlur(e) {
    var val = e.target.value;
    var nameFor = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/; 
    if (val.length > 6 && val.match(nameFor)) {

    }else {
        var msg = document.getElementsByName("error-name")[0];
        msg.classList.replace("none", "error");
    }
}   

/*** Email ***/
function mailFocus() {
    var msg = document.getElementsByName("error-email")[0];
    msg.classList.replace("error", "none");
}

function mailBlur(e) {
    var val = e.target.value;
    var mailForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(val && val.match(mailForm)) {

    }else {
        var msg = document.getElementsByName("error-email")[0];
        msg.classList.replace("none", "error");
    }
}

/*** Pass ***/
function passFocus() {
    var msg = document.getElementsByName("error-pass")[0];
    msg.classList.replace("error", "none");
}

function passBlur(e){
    var val = e.target.value;
    var passFor = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if (regularPhrase.test(value)(passFor)) {
    
    }else {
        var msg = document.getElementsByName("error-pass")[0];
        msg.classList.replace("none", "error");
    }
}

/*** Confirm-Password ***/
function cpassFocus(){
    var msg = document.getElementsByName("error-cpass")[0];
    msg.classList.replace("error", "none");
}

function cpassBlur(e){
    var val = e.target.value;
    var pass = document.getElementById('pass');
    if(val === pass.value) {
        var msg = document.getElementsByName("error-cpass")[0];
        msg.classList.replace("none", "error");
    }
}

/*** Age ***/
function ageFocus() {
    var msg = document.getElementsByName("error-age")[0];
    msg.classList.replace("error", "none");
}

function ageBlur(e){
    var val = e.target.value;
    val = Number(val);
    console.log(val)


    if(Number.isInteger(val)) {
        if(val>=18) {
        
    }else {
        var msg = document.getElementsByName("error-age")[0];
        msg.classList.replace("none", "error");
    }
    }else {
        var msg = document.getElementsByName("error-age")[0];
        msg.classList.replace("none", "error");
    }
}


/*** Phone ***/
function phoneFocus() {
    var msg = document.getElementsByName("error-phone")[0];
    msg.classList.replace("error", "none");
}

function phoneBlur(e) {
    var val = e.target.value;
    if(val.length<7 || val.includes(" ") || val.includes("(") || val.includes(")") || val.includes("-") || val.includes("_")) {
        var msg = document.getElementsByName("error-phone")[0];
        msg.classList.replace("none", "error");
    }
}

/*** Adress ***/
function adrrFocus() {
    var msg = document.getElementsByName("error-adress")[0];
    msg.classList.replace("error", "none");
}

function adrrBlur(e) {
    var val = e.target.value;
    var adrrForm = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/; 
    if(val.length>=5 && val.match(adrrForm)) {

    }else {
        var msg = document.getElementsByName("error-adress")[0];
        msg.classList.replace("none", "error");
    }
    msg.addEventListener("blur", adressEvent)
}

/*** City ***/
function cityFocus() {
    var msg = document.getElementsByName("error-city")[0];
    msg.classList.replace("error", "none");
}

function cityBlur(e) {
    var val = e.target.value;
    var cityForm = /^[a-zA-Z]+$/;
    if (val.length>=3 && val.match(cityForm)) {

    }else {
        var msg = document.getElementsByName("error-city")[0];
        msg.classList.replace("none", "error");
    }

}

/*** Postal ***/
function postalFocus() {
    var msg = document.getElementsByName("error-postal")[0];
    msg.classList.replace("error", "none");
}

function postalBlur(e) {
    var val = e.target.value;
    var postalForm = /^[a-zA-Z0-9]+$/;
    if (val.length>=3 && val.match(postalForm)) {

    }else {
        var msg = document.getElementsByName("error-postal")[0];
        msg.classList.replace("none", "error");
    }
}

/*** Postal ***/
function dniFocus() {
    var msg = document.getElementsByName("error-dni")[0];
    msg.classList.replace("error", "none");
}

function dniBlur(e) {
    var val = e.target.value;
    var dniForm = /^\d{7,8}(?:[-\s]\d{4})?$/;
    if (val.match(dniForm)) {

    }else {
        var msg = document.getElementsByName("error-dni")[0];
        msg.classList.replace("none", "error");
    }
}


/*** Button ***/
function butclick(){
    var error = document.getElementsByClassName('error');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var adress = document.getElementById('adress').value;
    var city = document.getElementById('city').value;
    var postal = document.getElementById('postal').value;
    var dni = document.getElementById('dni').value;
    var flag = 0;
    var arr = [name,email,pass,cpass,age,phone,adress,city,postal,dni];
    for (var i=0;i<9;i++){
        if (arr[i] == "") {
            flag = 1
        }
    }
    if (error.length == 0 && flag == 0) {
        alert("Registry Successful!\n" + 
                "Name: "+name +" - Phone: "+ phone + "\n" +"Email: "+ email +" - Adress: "+ adress + "\n" + 
                "Password: " +pass +" - City: "+ city + "\n" +"Confirm Password: "+ cpass +" - Postal Code: "+ postal+ "\n" + 
                "Age: " + age +" - DNI: "+ dni)
        
    }else {
        for (var i=0;i<error.length;i++) {
        alert(error[i].textContent);
        }
    }
}


window.onload = function() {
    var name = document.getElementById('name');
    var but = document.getElementById('button');
    var mail = document.getElementById('email');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('cpass');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');
    var adrr = document.getElementById('adress');
    var city = document.getElementById('city');
    var postal = document.getElementById('postal');
    var dni = document.getElementById('dni');

    /*** Name ***/
    name.onfocus = nameFocus;
    name.onblur = nameBlur;

    /*** Email ***/
    mail.onfocus = mailFocus;
    mail.onblur = mailBlur;
    
    /*** Password ***/
    pass.onfocus = passFocus;
    pass.onblur = passBlur;

    /*** Confirm-Password ***/
    cpass.onfocus = cpassFocus;
    cpass.onblur = cpassBlur;
    
    /*** Age ***/
    age.onfocus = ageFocus;
    age.onblur = ageBlur;

    /*** Phone ***/
    phone.onfocus = phoneFocus;
    phone.onblur = phoneBlur;

    /*** Adress ***/
    adrr.onfocus = adrrFocus;
    adrr.onblur = adrrBlur;

    /*** City ***/
    city.onfocus = cityFocus;
    city.onblur = cityBlur;

    /*** Postal ***/
    postal.onfocus = postalFocus;
    postal.onblur = postalBlur;

    /*** DNI ***/
    dni.onfocus = dniFocus;
    dni.onblur = dniBlur;

    but.onclick = butclick;  
}