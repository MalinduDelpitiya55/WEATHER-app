////////////////////////////////////////////////////////////////////////    date & time        /////////////////////////////////////////////////////////

// Function to update the clock every second
function updateClock() {

    var currentDate = new Date();
    var localMonth = currentDate.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var localMonthName = months[localMonth];
    var localDay = currentDate.getDate();
    var localWeekDay = currentDate.getDay();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var localWeekDayName = weekDays[localWeekDay];
    var localHour = currentDate.getHours();
    var localMinute = currentDate.getMinutes();
    var localSecond = currentDate.getSeconds();

    // Add leading zeros before 10

    localDay = localDay < 10 ? "0" + localDay : localDay;
    localHour = localHour < 10 ? "0" + localHour : localHour;
    localMinute = localMinute < 10 ? "0" + localMinute : localMinute;
    localSecond = localSecond < 10 ? "0" + localSecond : localSecond;

    // Create a string with the local date and time

    var localDateTimeString = localWeekDayName + ", " + localMonthName + " " + localDay + " " + localHour + ":" + localMinute + ":" + localSecond;

    // Target the HTML element with id "localDateTime" and set its content to the local date and time string

    document.getElementById("date-time").textContent = localDateTimeString;
}

// Call updateClock function initially to set the clock without delay
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);

/////////////////////////////////////////////////////////////////////       Search      ///////////////////////////////////////////////////////////////////



//==========================================location data=================================================================================//



function locationData() {

    let reop = {
        method: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=colombo&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);


            // location details 
            document.getElementById("current-city").innerHTML = data["location"]["name"];
            document.getElementById("current-country").innerHTML = data["location"]["country"];
            // document.getElementById("date&time").innerHTML = ;

            // temprature
            document.getElementById("cur-temparature").innerHTML = data["current"]["temp_c"];
            document.getElementById("cloud-condition").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("feel-temparature").innerHTML = data["current"]["feelslike_c"];
            document.getElementById("high-temparature").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;
            document.getElementById("low-temparature").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}`;
            document.getElementById("cloud-condition-icon").src = data["current"]["condition"]["icon"];

            // Current details
            document.getElementById("visibility").innerHTML = data["current"]["vis_km"];
            document.getElementById("dew-point").innerHTML = `${data.forecast.forecastday[0].hour[0].dewpoint_c}`;
            document.getElementById("wind").innerHTML = data["current"]["wind_kph"];
            document.getElementById("humidity").innerHTML = data["current"]["humidity"];
            document.getElementById("cloudiness").innerHTML = data["current"]["cloud"];
            var rainChance = `${data.forecast.forecastday[0].day.daily_chance_of_rain}`;
            document.getElementById("rainChance").innerHTML = rainChance;

            if (rainChance > 49) {
                document.getElementById("umbrella-required").innerHTML = "Umbrella Required";
            }
            else {
                document.getElementById("umbrella-required").innerHTML = "No Umbrella Required";
            }

            // sunset and sunrise   
            document.getElementById("sun-rise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
            document.getElementById("sun-set").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;







        })

        .then(error => console.log("error", error));
}


//===========================================================city data=========================================================///

function cityData() {
    let reop = {
        method: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=kandy&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // city tempurature
            document.getElementById("city-1-name").innerHTML = data["location"]["name"];
            document.getElementById("city-1-country").innerHTML = data["location"]["country"];
            document.getElementById("city-1-forecast").src = data["current"]["condition"]["icon"];
            document.getElementById("city-1-tempurature").innerHTML = data["current"]["temp_c"];
            document.getElementById("city-1-text").innerHTML = data["current"]["condition"]["text"];


        })

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=nuwaraeliya&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            //========================= city tempurature  =========================

            document.getElementById("city-2-name").innerHTML = data["location"]["name"];
            document.getElementById("city-2-country").innerHTML = data["location"]["country"];
            document.getElementById("city-2-forecast").src = data["current"]["condition"]["icon"];
            document.getElementById("city-2-tempurature").innerHTML = data["current"]["temp_c"];
            document.getElementById("city-2-text").innerHTML = data["current"]["condition"]["text"];


        })

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=jaffna&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {

            //============================== city tempurature =========================

            document.getElementById("city-3-name").innerHTML = data["location"]["name"];
            document.getElementById("city-3-country").innerHTML = data["location"]["country"];
            document.getElementById("city-3-forecast").src = data["current"]["condition"]["icon"];
            document.getElementById("city-3-tempurature").innerHTML = data["current"]["temp_c"];
            document.getElementById("city-3-text").innerHTML = data["current"]["condition"]["text"];

        })

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=malabe&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {

            //============================== city tempurature ==============================

            document.getElementById("city-4-name").innerHTML = data["location"]["name"];
            document.getElementById("city-4-country").innerHTML = data["location"]["country"];
            document.getElementById("city-4-forecast").src = data["current"]["condition"]["icon"];
            document.getElementById("city-4-tempurature").innerHTML = data["current"]["temp_c"];
            document.getElementById("city-4-text").innerHTML = data["current"]["condition"]["text"];

        })
}

//======================================================== weekly data ==============================================
function pastThreeDays() {
    const startDate = new Date();
    let currentDay1 = new Date(startDate);

    for (let i = 3; i > 0; i--) {

        currentDay1.setDate(currentDay1.getDate() - 1);
        //hethuw blann toISOString, split
        let formattedDate = currentDay1.toISOString().split('T')[0];

        fetch(`http://api.weatherapi.com/v1/history.json?key=ee16cdd2901442cdabd52206240703&q=London&dt=${formattedDate}&days=7`)
            .then(response => response.json())
            .then(data => {
                var dateString = new Date(`${data.forecast.forecastday[0].date}`);
                var date = new Date(dateString);
                var day = date.getDate();
                var weekdayNumber = date.getDay();
                var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                var weekdayName = weekdays[weekdayNumber];
                document.getElementById(`p-day-${i}`).innerHTML = weekdayName + "(" + day + ")";
                document.getElementById(`p-day${i}-img`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                document.getElementById(`p-day${i}-date-max`).innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;
                document.getElementById(`p-day${i}-date-min`).innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;

            })
            .catch(error => {
                console.error("Error:", error);
            });

    }

    let currentDay2 = new Date(startDate);
    for (let i = 0; i < 7; i++) {
        //hethuw blann toISOString, split
        currentDay2.setDate(currentDay2.getDate() + 1);
        const formattedDate = currentDay2.toISOString().split('T')[0];

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=London&days=7&aqi=yes&alerts=yes&dt=${formattedDate}`)
            .then(response => response.json())
            .then(data => {
                // Define the date using the api
                var dateString = new Date(`${data.forecast.forecastday[0].date}`);
                var date = new Date(dateString);
                var day = date.getDate();
                var weekdayNumber = date.getDay();
                var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                var weekdayName = weekdays[weekdayNumber];
                document.getElementById(`f-day-${i + 1}`).innerHTML = weekdayName + "(" + day + ")";
                document.getElementById(`f-day${i + 1}-icon`).src = `${data.forecast.forecastday[0].day.condition.icon}`;
                document.getElementById(`f-day${i + 1}-date-max`).innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;
                document.getElementById(`f-day${i + 1}-date-min`).innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
}


pastThreeDays();
cityData();
locationData();

//============================================= Search =========================================================//

function search() {
    console.log("hghgdg");
    let searchVal = document.getElementById("searchTxt").value;
    let reop = {
        method: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=${searchVal}&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // location details 
            document.getElementById("current-city").innerHTML = data["location"]["name"];
            document.getElementById("current-contry").innerHTML = data["location"]["country"];
            // document.getElementById("date&time").innerHTML = ;

            // temprature
            document.getElementById("cur-temparature").innerHTML = data["current"]["temp_c"];
            document.getElementById("cloud-condition").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("feel-temparature").innerHTML = data["current"]["feelslike_c"];
            document.getElementById("high-temparature").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;
            document.getElementById("low-temparature").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}`;
            document.getElementById("cloud-condition-icon").src = data["current"]["condition"]["icon"];

            // Current details
            document.getElementById("visibility").innerHTML = data["current"]["vis_km"];
            document.getElementById("dew-point").innerHTML = `${data.forecast.forecastday[0].hour[0].dewpoint_c}`;
            document.getElementById("wind").innerHTML = data["current"]["wind_kph"];
            document.getElementById("humidity").innerHTML = data["current"]["humidity"];
            document.getElementById("cloudiness").innerHTML = data["current"]["cloud"];
            var rainChance = `${data.forecast.forecastday[0].day.daily_chance_of_rain}`;
            document.getElementById("rainChance").innerHTML = rainChance;

            if (rainChance > 49) {
                document.getElementById("umbrella-required").innerHTML = "Umbrella Required";
            }
            else {
                document.getElementById("umbrella-required").innerHTML = "No Umbrella Required";
            }

            // sunset and sunrise   
            document.getElementById("sun-rise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
            document.getElementById("sun-set").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
        })
        .then(error => console.log("error", error))
}

// =============================     theme    ================================

document.getElementById('theme').addEventListener(
    "click",
    () => {
        if (document.getElementById('darkmode-toggle').checked) {
            document.body.setAttribute("data-bs-theme", "light");
        } else {
            document.body.setAttribute("data-bs-theme", "dark");
        }
    }
);


// =============================     unit     ================================

const checkbox = document.getElementById('check-unit');
const currentUnit = document.getElementById('current-unit');
const changingUnit = document.getElementById('Changing-unit');

checkbox.addEventListener('change', function () {
    let reop = {
        method: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=colombo&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (this.checked) {
                // Checkbox is checked, switch to Fahrenheit
                currentUnit.textContent = '°F';
                changingUnit.textContent = '°C';
                document.getElementById("cur-temparature").innerHTML = data["current"]["temp_f"];
                document.getElementById("feel-temparature").innerHTML = data["current"]["feelslike_f"];
                document.getElementById("high-temparature").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}`;
                document.getElementById("low-temparature").innerHTML = `${data.forecast.forecastday[0].day.mintemp_f}`;

            } else {
                // Checkbox is unchecked, switch to Celsius
                currentUnit.textContent = '°C';
                changingUnit.textContent = '°F';
                document.getElementById("cur-temparature").innerHTML = data["current"]["temp_c"];
                document.getElementById("feel-temparature").innerHTML = data["current"]["feelslike_c"];
                document.getElementById("high-temparature").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}`;
                document.getElementById("low-temparature").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}`;
            }
        });
});



//===================================   map =============================


