
function turnBlue(){
    document.getElementById('myBody').style.backgroundColor = 'LightBlue'
}

function darkMode(){
    document.getElementById('myBody').style.backgroundColor = "#181818";
    var myMultipleTexts = document.getElementsByName('mt');

    for (var i = 0, max = myMultipleTexts.length; i < max; i++) {
        myMultipleTexts[i].style.color = 'white';
    }
}

function lightMode(){
    document.getElementById('myBody').style.backgroundColor = 'white';
    var myMultipleTexts = document.getElementsByName('mt');

    for (var i = 0, max = myMultipleTexts.length; i < max; i++) {
        myMultipleTexts[i].style.color = 'black';
    }
}

function bulbON(){
    document.getElementById('myBulb').src = 'pic_bulbon.gif';
}

function bulbOFF(){
    document.getElementById('myBulb').src = 'pic_bulboff.gif';
}