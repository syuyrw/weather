
const forecastOutput = (weatherArray) => {
    weatherArray.forEach(day => {
        if (day.dt_txt.split(" ")[1] == '18:00:00') {

            //create parent article to hold all elements
            let div = document.createElement("div");
            div.setAttribute('class', 'flex-col')

            //create date
            let date = document.createElement("span");
            date.setAttribute('class', 'col-head');
            date.innerText = `${day.dt_txt.split(" ")[0].split("-")[1]}/${day.dt_txt.split(" ")[0].split("-")[2]}`;

            //create icon
            const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
            let icon = document.createElement("img");
            icon.setAttribute('src', imagesrc);
            icon.setAttribute('alt', `${day.weather[0].description}`);

            //create temperature
            let temp = document.createElement("span");
            temp.setAttribute('class', 'data')
            temp.innerText = `${day.main.temp}°F`;

            div.appendChild(date);
            div.appendChild(icon);
            div.appendChild(temp);

            document.querySelector('.flex-forecast').appendChild(div);  
        }
    })
};
fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=4cadfe07aadf6046def4e83e86f84006")
  .then((response) => response.json())
  .then((weatherArray) => {
      console.log(weatherArray.list)
    forecastOutput(weatherArray.list);
  });


//event info
const webJSON = "https://byui-cit230.github.io/weather/data/towndata.json"
async function populateCityInfo(webJSON){
    const response = await fetch(webJSON)
    const townsJSON = await response.json()
    const events = townsJSON.towns[6].events
    let otherevents = document.createElement("div")
    events.forEach(event => {
        let eventelement = document.createElement("p")
        eventelement.textContent = event
        otherevents.appendChild(eventelement)
    });
    document.getElementById("events").appendChild(otherevents)
}
populateCityInfo(webJSON)