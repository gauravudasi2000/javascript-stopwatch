var interval;
var displayHour = 0;
var displayMin = 0;
var displaySec = 0;
const restartBtn = document.createElement("BUTTON");
restartBtn.innerText = "Restart";
restartBtn.style.marginLeft = '5px';
const inputMin = document.querySelector("#minute");
const inputSec = document.querySelector("#second");
const inputHour = document.querySelector("#hour");
const timeDisplay = document.querySelector(".time");
const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");


function stopWatch(){
    interval = setInterval(getTime, 1000);
    function getTime(){
        timeDisplay.innerText = displayHour + ":" + displayMin + ":" + displaySec;
        displaySec++;
        inputSec.value = displaySec;
        if(displaySec <= 9){
        displaySec = '0'  + displaySec;
        }
        if(displaySec > 9){
            displaySec = displaySec;
        }
        if(displaySec > 59){
            displayMin++;
            if(displayMin <= 9){
            displayMin = '0' + displayMin;
            }if(displayMin > 9){
                displayMin = displayMin;
            }
            inputMin.value = '0' + displayMin;
            displaySec = 0;
            displaySec = '0' + 0;   
        }
        if(displayMin == 59 && displaySec == 59){
            displayHour++;
            if(displayHour <= 9){
            displayHour = '0' + displayHour;
            }if(displayHour > 9){
                displayHour = displayHour;
            }
            inputHour.value = '0' + displayHour;
            displayMin = 0;
            displaySec = 0;
        }
    }     
    startBtn.disabled = true;
}
let i=0;
startBtn.addEventListener("click", () => {
    while(i==0){
    displaySec = '0'  + displaySec;
    displayMin = '0' + displayMin;
    displayHour = '0' + displayHour;
    i++;
    }
    
    stopWatch();
})

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.innerText = "Resume";  
    stopBtn.after(restartBtn);
})
restartBtn.addEventListener("click", () => {
    window.location.reload();
});
