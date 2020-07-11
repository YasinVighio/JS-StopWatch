var msecCounter = document.getElementById("msecond");
var secCounter = document.getElementById("second");
var minCounter = document.getElementById("minute");
var hrCounter = document.getElementById("hour");
var records = document.getElementById("records")
var stbt= document.getElementById("strtbt");
var rstbt= document.getElementById("resetbt");
var interval;

function start()
{
    interval=setInterval(updateTime, 1);
    stbt.disabled=true;
    resetbt.disabled=true;
}


function pause()
{
    stbt.disabled=false;
    resetbt.disabled=false;
    clearInterval(interval);
    msecCounter.style.animation="none";
    secCounter.style.animation="none";
    minCounter.style.animation="none";
    hrCounter.style.animation="none";

}

function reset()
{
    var record = hrCounter.textContent + "Hrs:" + minCounter.textContent + "Mins:" + secCounter.textContent + "Secs:" + msecCounter.textContent + "Ms";
    records.innerHTML+="<br>" + record;
    var counter=0;
    msecCounter.innerHTML=counter;
    secCounter.innerHTML=counter;
    minCounter.innerHTML=counter;
    hrCounter.innerHTML=counter;
}


function updateTime()
{
    var counterVal = Number(msecCounter.textContent);
    counterVal+=4;
    msecCounter.style.animation="slideup 1ms ease-in-out infinite"
    if(counterVal>=1000)
        {
        counterVal=0;
        var secCounterVal = Number(secCounter.textContent);
        secCounterVal+=1;
        secCounter.style.animation="slideup 1s ease-in-out infinite"
        secCounter.innerHTML=secCounterVal;
        if(secCounterVal>=60)
        {
            secCounterVal=0;
            var minCounterVal = Number(minCounter.textContent);
            minCounterVal+=1;
            minCounter.style.animation="slideup-middle 1s ease-in-out"
            minCounter.innerHTML=minCounterVal;
            if(minCounterVal>=60)
            {
                minCounterVal=0;
                var hrCounterVal = Number(hrCounter.textContent);
                hrCounterVal+=1;
                hrCounter.style.animation="slideup-middle 1s ease-in-out"
                hrCounter.innerHTML=hrCounterVal;
            }
            minCounter.innerHTML=minCounterVal;
        }
        secCounter.innerHTML=secCounterVal;
        }
    msecCounter.innerHTML=counterVal;
}

