const moles = document.querySelectorAll(".mole")
const score = document.querySelector(".score")

function resetAnimation(mole){
    mole.style.animationName = "Placeholder"
}

function resetMole(mole){
    mole.style.animationName="hide"
    setTimeout(resetAnimation, 310+325, mole)
}

function resetScore(){
    score.innerHTML = 0
}

function mainHandler(int, lastint){
    if(int < 32){
        let rand = Math.floor(Math.random()*6)
        while(rand == lastint){
            rand = Math.floor(Math.random()*6)
        }
        let randomTimer = Math.random()
        moles[rand].style.animationName="show"
        setTimeout(resetMole, 310+randomTimer*325, moles[rand])
        setTimeout(mainHandler, 310+randomTimer*325, int+1)
    }else{
        resetScore()
    }
}

function start(){
    mainHandler(0, -1)
}


function addPoint(mole){
    if (mole.firstElementChild.style.animationName == "show" || mole.firstElementChild.style.animationName == "hide"){
        score.innerHTML = Number(score.innerHTML) + 1
        let randomTimer = Math.random()
        setTimeout(resetMole, 310+325, mole)
        setTimeout(resetAnimation, 310+325, mole)
    }
}