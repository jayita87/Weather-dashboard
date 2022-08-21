var textboxEl = document.getElementById("textbox");
var searchBtn = document.getElementById("search");
var forecastEl = document.getElementById("forecast1");
var day1 = document.getElementById("Day1");
var day2 = document.getElementById("Day2");
var day3 = document.getElementById("Day3");
var day4 = document.getElementById("Day4");
var day5 = document.getElementById("Day5");


function displayTime() {
    var rightNow = moment().format('MM/DD/YYYY');
}
  displayTime();
  setInterval(displayTime, 1000);

// variable for API key
var apiKey = 'bfb3545c6cc5780043f409b16e39f353';
// variable for API url
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=phoenix&units=imperial&appid=bfb3545c6cc5780043f409b16e39f353';


console.log(new Date(1660543200 * 1000));
console.log(Math.floor(new Date().getTime() / 1000));

var currentDate = new Date(moment().format());
var futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 1);
futureDate.setHours(5, 00, 00);

console.log("Current Time::" + currentDate);
console.log("Future Time::" + futureDate);

console.log("FutureTime in Unix::" + Math.floor(futureDate.getTime() / 1000));

searchBtn.addEventListener('click', function () {
    var cityName = textboxEl.value;
    console.log(cityName);
    var cityArray = localStorage.getItem('cityname');
    currentWeather(cityName);
    saveCityName(cityName);
    listSavedCity(cityName);
}
)
function saveCityName(cityName) {
    var cityArray = JSON.parse(localStorage.getItem('cityName'));
    console.log(cityArray);

    if(cityArray == null){
        var ctyArray = new Array();
        ctyArray.push(cityName);
        localStorage.setItem("cityName", JSON.stringify(ctyArray));
    }else{
        cityArray.push(cityName);
        localStorage.setItem("cityName", JSON.stringify(cityArray));
    }
}

function listSaveCities(){    
    var cityArray = JSON.parse(localStorage.getItem('cityName'));    
    // var parentEl = document.getElementById("divTextbox");
    
    cityArray.forEach(listSavedCity);
        // var childElement = document.createElement('div');
        // childElement.classList.add("savedCities")
        // childElement.textContent=a;        
        // parentEl.appendChild(childElement);        
    // )    
}

function listSavedCity(cityName){
    var parentEl = document.getElementById("divTextbox");
    var childElement = document.createElement('div');
    childElement.classList.add("savedCities")
    childElement.textContent=cityName;        
    parentEl.appendChild(childElement);        
}

listSaveCities();

document.addEventListener( 'click', (event) =>
{
    if (event.target.className === 'savedCities')
    {
        let cityName = event.target.textContent;
        currentWeather(cityName);
    }
});

var currentDataAPI = "https://api.openweathermap.org/data/2.5/weather?q="
var appIdAndUnit = "&units=imperial&appid=bfb3545c6cc5780043f409b16e39f353"

function currentWeather(cityName) {
    fetch(currentDataAPI + cityName + appIdAndUnit)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);


            var child = document.createElement('div');

            forecastEl.appendChild(child);
            forecastEl.innerHTML =
                `<div>   
   <p>Temp: ${data.main.temp}f</p>
    <p>Highs: ${data.main.temp_max}f. <br> Lows : ${data.main.temp_min}f</p>
    <p>Humidity: ${data.main.humidity}</p>
    <p>feels like: ${data.main.feels_like}f</p>
</div>`
        });
}
function fiveDaysForcast() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=phoenix&units=imperial&appid=bfb3545c6cc5780043f409b16e39f353')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var fivedays = document.createElement('div');
            day1.appendChild(fivedays);
            day1.innerHTML =
                `<div>   
                   <p> ${data.list[0].weather[0].description}</p>
                <p>Date: ${data.list[0].dt}</p>  
     <p>Temp: ${data.list[0].main.temp}f</p>
    <p>Feels like: ${data.list[0].main.feels_like}f</p>
    <p>Humidity: ${data.list[0].main.humidity}%</p>
    <p>Lows: ${data.list[0].main.temp_min}f</p>
    <p>Highs: ${data.list[0].main.temp_max}f</p>
</div>`
;
day2.appendChild(fivedays);
            day2.innerHTML =
                `<div>   
                <p>${data.list[1].weather[0].icon,data.list[1].weather[0].description}</p>
                <p>Date: ${data.list[1].dt}</p>  
     <p>Temp: ${data.list[1].main.temp}f</p>
    <p>Feels like: ${data.list[1].main.feels_like}f</p>
    <p>Humidity: ${data.list[1].main.humidity}%</p>
    <p>Lows: ${data.list[1].main.temp_min}f</p>
    <p>Highs: ${data.list[1].main.temp_max}f</p>
</div>`
day3.appendChild(fivedays);
            day3.innerHTML =
                `<div>  
                 <p>${data.list[2].weather[0].icon,data.list[2].weather[0].description}</p>
                <p>Date: ${data.list[2].dt}</p>  
     <p>Temp: ${data.list[2].main.temp}f</p>
    <p>Feels like: ${data.list[2].main.feels_like}f</p>
    <p>Humidity: ${data.list[2].main.humidity}%</p>
    <p>Lows: ${data.list[2].main.temp_min}f</p>
    <p>Highs: ${data.list[2].main.temp_max}f</p>
</div>`
day4.appendChild(fivedays);
            day4.innerHTML =
                `<div>   
                <p>${data.list[3].weather[0].icon,data.list[3].weather[0].description}</p>
                <p>Date: ${data.list[3].dt}</p>  
     <p>Temp: ${data.list[3].main.temp}f</p>
    <p>Feels like: ${data.list[3].main.feels_like}f</p>
    <p>Humidity: ${data.list[3].main.humidity}%</p>
    <p>Lows: ${data.list[3].main.temp_min}f</p>
    <p>Highs: ${data.list[3].main.temp_max}f</p>
</div>`
day5.appendChild(fivedays);
            day5.innerHTML =
                `<div> 
                <p>${data.list[4].weather[0].icon,data.list[4].weather[0].description}</p>
                <p>Date: ${data.list[4].dt}</p>    
     <p>Temp: ${data.list[4].main.temp}f</p>
    <p>Feels like: ${data.list[4].main.feels_like}f</p>
    <p>Humidity: ${data.list[4].main.humidity}%</p>
    <p>Lows: ${data.list[4].main.temp_min}f</p>
    <p>Highs: ${data.list[4].main.temp_max}f</p>
</div>`
        })

}
fiveDaysForcast();