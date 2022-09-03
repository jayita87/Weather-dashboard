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

var currentDate = new Date(moment().format());
var currentDatePlusOne = new Date();
var currentDatePlusTwo = new Date();
var currentDatePlusThree = new Date();
var currentDatePlusFour = new Date();
var currentDatePlusFive = new Date();

currentDatePlusOne.setDate(currentDate.getDate() + 1);
currentDatePlusTwo.setDate(currentDate.getDate() + 2);
currentDatePlusThree.setDate(currentDate.getDate() + 3);
currentDatePlusFour.setDate(currentDate.getDate() + 4);
currentDatePlusFive.setDate(currentDate.getDate() + 5);

currentDatePlusOne.setHours(5, 00, 00);
currentDatePlusTwo.setHours(5, 00, 00);
currentDatePlusThree.setHours(5, 00, 00);
currentDatePlusFour.setHours(5, 00, 00);
currentDatePlusFive.setHours(5, 00, 00);

currentDatePlusOneInUnix = Math.floor(currentDatePlusOne.getTime() / 1000);
currentDatePlusTwoInUnix = Math.floor(currentDatePlusTwo.getTime() / 1000);
currentDatePlusThreeInUnix = Math.floor(currentDatePlusThree.getTime() / 1000);
currentDatePlusFourInUnix = Math.floor(currentDatePlusFour.getTime() / 1000);
currentDatePlusFiveInUnix = Math.floor(currentDatePlusFive.getTime() / 1000);


searchBtn.addEventListener('click', function () {
    var cityName = textboxEl.value.toUpperCase();
    var cityArray = JSON.parse(localStorage.getItem('cityName'));
    currentWeather(cityName);
    fiveDaysForcast(cityName);
    saveCityName(cityName);
    console.log(!cityArray.includes(cityName))
    if(!cityArray.includes(cityName)){
        listSavedCity(cityName);
    }    
}
)
function saveCityName(cityName) {
    var cityArray = JSON.parse(localStorage.getItem('cityName'));

    if (cityArray == null) {
        var ctyArray = new Array();
        ctyArray.push(cityName);
        localStorage.setItem("cityName", JSON.stringify(ctyArray));
    } else {
        console.log(cityArray.includes(cityName));
        if(!cityArray.includes(cityName))
        {
            cityArray.push(cityName);
            localStorage.setItem("cityName", JSON.stringify(cityArray));    
        }
    }
}

function listSaveCities() {
    var cityArray = JSON.parse(localStorage.getItem('cityName'));

    cityArray.forEach(listSavedCity);  
}

function listSavedCity(cityName) {    
        var parentEl = document.getElementById("divTextbox");    
        var childElement = document.createElement('div');
        childElement.classList.add("savedCities")
        childElement.textContent = cityName;
        parentEl.appendChild(childElement);    
}

function listCityInView(cityName){
    if(!cityArray.includes(cityName)){
        listSavedCity(cityName);
    }
}

listSaveCities();

document.addEventListener('click', (event) => {
    if (event.target.className === 'savedCities') {
        let cityName = event.target.textContent;
        currentWeather(cityName);
        fiveDaysForcast(cityName);
    }
});

var currentDataAPI = "https://api.openweathermap.org/data/2.5/weather?q="
var appIdAndUnit = "&units=imperial&appid=bfb3545c6cc5780043f409b16e39f353"

var forecastAPI="https://api.openweathermap.org/data/2.5/forecast?q="

function currentWeather(cityName) {
    fetch(currentDataAPI + cityName + appIdAndUnit)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var child = document.createElement('div');

            forecastEl.appendChild(child);
            forecastEl.innerHTML =
                `<div> 
                <p>${window.moment(data.dt * 1000).format('L')}</p>  
     <img src="http://openweathermap.org/img/wn//${data.weather[0].icon}@2x.png" alt="weather icon" class="w-icon"> 
     <p> ${data.weather[0].description}</p>
     <p>Wind speed: ${data.wind.speed}MPH</p>   
   <p>Temp: ${data.main.temp}F</p>
    <p>Humidity: ${data.main.humidity}%</p>
</div>`
        });
}

function fiveDaysForcast(cityName) {

    fetch(forecastAPI + cityName + appIdAndUnit)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {        
            var fivedays = document.createElement('div');
            day1.appendChild(fivedays);
            data.list.forEach(
                element => {
                    if (element.dt == currentDatePlusOneInUnix) {                        
                        day1.innerHTML =
                            `<div>                           
                            <p>${window.moment(element.dt_txt).format('L')}</p>
                        <img src="http://openweathermap.org/img/wn//${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">                        
                        <p> ${element.weather[0].description}</p>                                                
                    <p>Temp: ${element.main.temp}F</p>
                    <p>Wind speed: ${element.wind.speed}MPH</p>
                    <p>Humidity: ${element.main.humidity}%</p>
                    </div>`;
                    }

                    if (element.dt == currentDatePlusTwoInUnix) {                    
                        day2.innerHTML =
                            `<div>                           
                            <p>${window.moment(element.dt_txt).format('L')}</p>
                        <img src="http://openweathermap.org/img/wn//${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                        
                        <p> ${element.weather[0].description}</p>                                                
                    <p>Temp: ${element.main.temp}F</p>
                    <p>Wind speed: ${element.wind.speed}MPH</p>
                    <p>Humidity: ${element.main.humidity}%</p>
                    </div>`;
                    }

                    if (element.dt == currentDatePlusThreeInUnix) {                        
                        day3.innerHTML =
                            `<div>                           
                            <p>${window.moment(element.dt_txt).format('L')}</p>
                        <img src="http://openweathermap.org/img/wn//${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                        
                        <p> ${element.weather[0].description}</p>                                                
                    <p>Temp: ${element.main.temp}F</p>
                    <p>Wind speed: ${element.wind.speed}MPH</p>
                    <p>Humidity: ${element.main.humidity}%</p>
                    </div>`;
                    }

                    if (element.dt == currentDatePlusFourInUnix) {                        
                        day4.innerHTML =
                            `<div>                           
                            <p>${window.moment(element.dt_txt).format('L')}</p>
                        <img src="http://openweathermap.org/img/wn//${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                        
                        <p> ${element.weather[0].description}</p>                                                
                    <p>Temp: ${element.main.temp}F</p>
                    <p>Wind speed: ${element.wind.speed}MPH</p>
                    <p>Humidity: ${element.main.humidity}%</p>
                    </div>`;
                    }


                    if (element.dt == currentDatePlusFiveInUnix) {                        
                        day5.innerHTML =
                            `<div>                           
                            <p>${window.moment(element.dt_txt).format('L')}</p>
                        <img src="http://openweathermap.org/img/wn//${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                        
                        <p> ${element.weather[0].description}</p>                                                
                    <p>Temp: ${element.main.temp}F</p>
                    <p>Wind speed: ${element.wind.speed}MPH</p>
                    <p>Humidity: ${element.main.humidity}%</p>
                    </div>`;
                    }


                }
            );
        })

}

function addElementsToView(day1, dataMonday) {
    return
    `<div>   
    <img src="http://openweathermap.org/img/wn//${dataMonday.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
       <p> ${dataMonday.weather[0].description}</p>
    <p>Date: ${dataMonday.dt_txt}</p>  
<p>Temp: ${dataMonday.main.temp}f</p>
<p>Humidity: ${dataMonday.main.humidity}%</p>
</div>`;
}
