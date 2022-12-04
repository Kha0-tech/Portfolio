const btn_start = document.getElementsByClassName('btn-start')[0];
const btn_stop = document.getElementsByClassName('btn-stop')[0];
const btn_continue = document.getElementsByClassName('btn-continue')[0];
const btn_restart = document.getElementsByClassName('btn-restart')[0];
const stopWatch = document.querySelector(".stopWatch")

let hour=0;
let minute =0;
let second =0;

const startTime = () => {
    second += 1
    if(second === 60){

        minute +=1;
        second =0;

        if(minute === 60){

            hour +=1;
            minute = 0;

            if( 24 < hour){
                hour = 1;
            }
        }
    }
    const secondText = second < 10 ? "0"+second.toString() : second;
    const minuteText = minute < 10 ? "0"+minute.toString() : minute;
    const hourText = hour < 10 ? "0"+hour.toString() : hour;
    stopWatch.textContent = hourText + " : " + minuteText + " : " + secondText;
    
}

let setTime;
console.log(second)

btn_start.addEventListener('click',() => {
    clearInterval(setTime)
    setTime=setInterval(startTime,1000);
});

btn_stop.addEventListener('click',() => {
    clearInterval(setTime);
})

btn_continue.addEventListener('click',() => {
    clearInterval(setTime);
    setTime=setInterval(startTime,1000)
})
btn_restart.addEventListener('click',() => {
    
    second = 0; minute =0; hour = 0;
    clearInterval(setTime);
    setTime=setInterval(startTime,1000)
})