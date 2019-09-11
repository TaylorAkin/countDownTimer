//creating a value for my countDownDate and time
var countDownDate = new Date('April 23, 2020 23:45:00');


//function to execute goal
function countDownTimer() {
    //variable set to current time
    var currentTime = new Date().getTime();
    var difference = countDownDate.getTime() - currentTime;
    var totalmilliseconds = difference;
    var totalseconds = Math.floor(totalmilliseconds / 1000);
    var totalminutes = Math.floor(totalseconds / 60);
    var totalhours = Math.floor(totalminutes / 60);
    var totaldays = Math.floor(totalhours / 24);


    var rmillisec = totalmilliseconds % 1000;
    var rseconds = totalseconds % 60;
    var rminutes = totalminutes % 60;
    var rhours = totalhours % 24;
    
   



    document.getElementById("demo").innerHTML =  totaldays + " Days "  + rhours + " Hour " + rminutes + " Minutes: " + rseconds + " Seconds " +  rmillisec +" Milliseconds ";
}


//setting the interval I want my function for countdown to run at, every second. 
var  countDownInterval = setInterval(countDownTimer, 1000);







    // countDownDate - currentTime
    // display that to html



