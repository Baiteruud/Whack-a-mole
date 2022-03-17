const moles = [
    '.mole1',
    '.mole2',
    '.mole3',
    '.mole4',
    '.mole5',
    '.mole6',
]

let start = 0;
function onClickStart() {
    start++;
    let x = moles[Math.floor(Math.random()*5)];
    let x1 = x;
    document.querySelector(x).classList.add('up');
    setTimeout(() => {
        document.querySelector(x1).classList.remove('up');
        onClickStart();
    }, 500);
    
}
function onClickMole() {
    if(start > 0){
        document.getElementsByClassName('score')[0].innerHTML ++;
    }
}