//creating a value for my countDownDate and time
var countDownDate = new Date('April 23, 2020 23:45:00');


//function to execute goal
function countDownTimer() {
    //variable set to current time
    var currentTime = new Date().getTime();

    //difference is all the milliseconds, from getTime, between currentime and countDownDate
    var difference = countDownDate.getTime() - currentTime;

    //finding total amount for each unit of time
    var totalmilliseconds = difference;
    var totalseconds = Math.floor(totalmilliseconds / 1000);
    var totalminutes = Math.floor(totalseconds / 60);
    var totalhours = Math.floor(totalminutes / 60);
    var totaldays = Math.floor(totalhours / 24);

//findind the remainder left for each unit of time
    var rmillisec = totalmilliseconds % 1000;
    var rseconds = correctNumbers(totalseconds % 60);
    var rminutes = correctNumbers(totalminutes % 60);
    var rhours = correctNumbers(totalhours % 24);
    
   


// plugging the reaminders for each unit into the demo id of the html. Also concatinating the strings to name each number
    document.getElementById("demo").innerHTML =  totaldays + " : "  + rhours + " : " + rminutes + " : " + rseconds;
}

function correctNumbers(n){
    // get the number, see if it is less than 10
    // if so return "0" + n
    if(n < 10){
        return "0" + n;
    } else {
        return n;
    }
}

//setting the interval I want my function for countdown to run at, every second. (This is seen by javascript before it runs the function)
var  countDownInterval = setInterval(countDownTimer, 1000);