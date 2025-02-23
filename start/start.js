// Initialize display
document.getElementById("Timer").innerHTML = "25:00";

let myInterval;
let time;

function countdown() {
    if(time == 0){
        clearInterval(myInterval);
        document.getElementById("Timer").innerHTML = "00:00";
        alert("TIME OUT!!!!!!!!!!!");
        return;
    }
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("Timer").innerHTML = min + ":" + sec;
    time--;
}

function start() {
    var minute = 25;
    time = minute * 60;
    myInterval = setInterval(countdown, 1000)
}

function time_edit(){
    var popup = document.getElementById("stop");
    popup.classList.toggle("New time: ");
}

