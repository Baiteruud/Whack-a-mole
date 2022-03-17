let start = 0
function onClickStart() {
    start ++;
}
function onClickMole() {
    if(start > 0){
        document.getElementsByClassName('score')[0].innerHTML ++
    }
    
}


