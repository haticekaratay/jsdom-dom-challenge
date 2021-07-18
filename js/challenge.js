let timer = 0;
let counter = document.querySelector("#counter")
let plusButton = document.querySelector("#plus")
let minusButton = document.querySelector("#minus")
let heartButton = document.querySelector("#heart")
let likeList = document.querySelector(".likes")
let pauseButton = document.querySelector("#pause")
let form = document.querySelector("#comment-form")
let formInput = document.querySelector("#comment-input")
let timerRunning = true;

const handleSubmit = (event) => {
    event.preventDefault();
    if(formInput.value){
        let p = document.createElement("p");
        p.innerText = formInput.value;
        likeList.appendChild(p);
        formInput = "";
    }
};

const stopButtons = () => {
    let buttons = document.querySelectorAll("button:not(#pause)");
    for (let i = 0; i<buttons.length; i++){
        if(pauseButton.innerText === "resume"){
            buttons[i].disabled = true;
        }else {
            buttons[i].disabled = false;
        }
    }
};

const pauseButtonClick = () => {
    if (timerRunning){
        timerRunning = false
        pauseButton.innerText = "resume"
        window.clearInterval(timeoutID)
        stopButtons()
    }else {
        runTimer()
        pauseButton.innerText = "pause"
        stopButtons() 
    }
};

const likeEvent = () => {
    let li = document.createElement("li");
    li.innerText = `${timer} likes`
    likeList.append(li);
};

const decrementTimer = () => {
    timer--;
    counter.innerText = timer;
};

const incrementTimer = () => {
    timer++;
    counter.innerText = timer;
};

const runTimer = () => {
    timeoutID = window.setInterval(incrementTimer,1000);
};

form.addEventListener("submit",handleSubmit);
pauseButton.addEventListener("click",pauseButtonClick);
heartButton.addEventListener("click",likeEvent);
minusButton.addEventListener('click',decrementTimer);
plusButton.addEventListener('click',incrementTimer);
document.addEventListener("DOMContentLoaded",runTimer);
