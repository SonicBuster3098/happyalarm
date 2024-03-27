var ringing = false;
var alarm = "";
const display = document.getElementById("display");
const emoji = document.getElementById("emoji");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

//37.707572, -122.049180


main();

function main(){

    getSunTimes();
    
    display.value = getCurrentTime(0);


    if(isDay()){

        document.body.style.backgroundImage = "linear-gradient(white, rgb(0, 255, 251), rgb(0, 213, 255))";
        display.style.color = "black";
        emoji.src = "images/happy.png"

    }else{

        document.body.style.backgroundImage = "linear-gradient(rgb(0, 115, 255),rgb(0, 4, 255))";
        display.style.color = "white";
        emoji.src = "images/sleepy.webp"

    }
}

function getCurrentTime(increment){
    const date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes() + increment;

    const format = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutes + ' ' + format;

    console.log(time);



    return time;


}

function isDay(){
    const hours = new Date().getHours();

    if(hours > 6 && hours < 20){
        return true;
    }
    
    return 
}

async function getSunTimes(){
    const response = await fetch('https://api.sunrisesunset.io/json?lat=37.706258&lng=-122.050253');
    const result = await response.json();
    console.log(result);

    sunrise.value = "☀️" + result.results.sunrise;
    sunset.value = "🌑" + result.results.sunset;


}



