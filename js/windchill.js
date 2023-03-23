
let temp = 49
let speed = 3.6
buildWC(speed, temp);


function buildWC(speed, temp) {
    let windChill = document.getElementById("windChill");
    
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,
        0.16);
    document.write("Feels like: " + Math.round(wc));
    }