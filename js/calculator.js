//get values when clicked button
//assign +=
function one() {
    document.getElementById('result').value += '1';
}

function two() {
    document.getElementById('result').value += '2';
}

function three() {
    document.getElementById('result').value += '3';
}

function plus() {
    document.getElementById('result').value += '+';
}

function four() {
    document.getElementById('result').value += '4';
}
function five() {
    document.getElementById('result').value += '5';
}

function six() {
    document.getElementById('result').value += '6';
}

function minus() {
    document.getElementById('result').value += '-';
}

function seven() {
    document.getElementById('result').value += '7';
}

function eight() {
    document.getElementById('result').value += '8';
}

function nine() {
    document.getElementById('result').value += '9';
}

function multiply() {
    document.getElementById('result').value += '*';
}

//clear
function c() {
    document.getElementById('result').value = '';
}

function zero() {
    document.getElementById('result').value += '0';
}

//equal
function equal() {
    document.getElementById('result').value = eval(document.getElementById("result").value);
}

function divide() {
    document.getElementById('result').value += '/';
}