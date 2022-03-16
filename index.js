//MATRICE MULTIDIMENSIONALE
//LAVORI SOLTANTO SULLA MATRICE!!!

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    //FRECCIA SU
    if (e.keyCode == '38') {
        alert("freccia su");
    }
    //FRECCIA GIU
    else if (e.keyCode == '40') {
        alert("freccia giu");
    }
    //FRECCIA SX
    else if (e.keyCode == '37') {
        alert("freccia sx");
    }
    //FRECCIA DX
    else if (e.keyCode == '39') {
        alert("freccia dx");
    }
}