document.addEventListener("DOMContentLoaded", start)

function start(){
    const element = document.getElementById("tomato");
    let pos = 0;
    let direction = 1;
    let speed = 5;

    myInterval = setInterval(animate, 250);
    function animate(){
        pos +=  direction * speed;
        element.style.top = pos + "px";

        if(pos <= 0 || pos >= 10){
            direction *= -1
        }
    }
}