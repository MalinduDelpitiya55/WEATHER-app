document.getElementById("searchBtn").addEventListener("click", () => {
    let searchVal = document.getElementById("searchTxt").value;
    let reop = {
        method: 'GET'
    };
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=${searchVal}&days=7&aqi=yes&alerts=yes`, reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        // });
// });

        
        
        
        console.log();
        // location details 
        document.getElementById("current-city").innerHTML = data["location"]["name"];
        document.getElementById("current-contry").innerHTML = data["location"]["country"];
        document.getElementById("date&time").innerHTML = data["location"]["localtime"];

        // temprature
        document.getElementById("cur-temparature").innerHTML = data["current"]["temp_c"];
        document.getElementById("cloud-condition").innerHTML = data["current"]["condition"]["text"];
        document.getElementById("feel-temparature").innerHTML = data["current"]["feelslike_c"];
        document.getElementById("high-temparature").innerHTML =`${data.forecast.forecastday[0].day.maxtemp_c}`;
        document.getElementById("low-temparature").innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}`;
        document.getElementById("cloud-condition-icon").src = data["current"]["condition"]["icon"];

        // Current details
        document.getElementById("visibility").innerHTML = data["current"]["vis_km"];
        document.getElementById("dew-point").innerHTML = `${data.forecast.forecastday[0].hour[0].dewpoint_c}`;
        document.getElementById("wind").innerHTML = data["current"]["wind_kph"];
        document.getElementById("humidity").innerHTML = data["current"]["humidity"];
        document.getElementById("cloudiness").innerHTML = data["current"]["cloud"];

        // sunset and sunrise   
        document.getElementById("sun-rise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
        document.getElementById("sun-set").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
                    

        // city tempurature
        document.getElementById("city-1-name").innerHTML = data["location"]["name"];
        document.getElementById("city-1-country").innerHTML = data["location"]["country"];
        document.getElementById("city-1-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-1-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-1-text").innerHTML = data["current"]["condition"]["text"];
        
        document.getElementById("city-2-name").innerHTML = data["location"]["name"];
        document.getElementById("city-2-country").innerHTML = data["location"]["country"];
        document.getElementById("city-2-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-2-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-2-text").innerHTML = data["current"]["condition"]["text"];

        document.getElementById("city-3-name").innerHTML = data["location"]["name"];
        document.getElementById("city-3-country").innerHTML = data["location"]["country"];
        document.getElementById("city-3-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-3-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-3-text").innerHTML = data["current"]["condition"]["text"];

        document.getElementById("city-4-name").innerHTML = data["location"]["name"];
        document.getElementById("city-4-country").innerHTML = data["location"]["country"];
        document.getElementById("city-4-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-4-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-4-text").innerHTML = data["current"]["condition"]["text"];


        // week temprature
        document.getElementById("day-1").src = data["current"]["condition"]["icon"];
        document.getElementById("day-2").src = data["current"]["condition"]["icon"];
        document.getElementById("day-3").src = data["current"]["condition"]["icon"];
        document.getElementById("day-4").src = data["current"]["condition"]["icon"];
        document.getElementById("day-5").src = data["current"]["condition"]["icon"];
        document.getElementById("day-6").src = data["current"]["condition"]["icon"];
        document.getElementById("day-7").src = data["current"]["condition"]["icon"];

})
    
    .then(error => console.log("error",error))
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    let searchVal = document.getElementById("searchTxt").value;
    let reop = {
        method: 'GET'
    };
fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=colombo&days=7&aqi=yes&alerts=yes`, reop)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        
        // location details 
        document.getElementById("current-city").innerHTML = data["location"]["name"];
        document.getElementById("current-contry").innerHTML = data["location"]["country"];
        document.getElementById("date&time").innerHTML = data["location"]["localtime"];

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

        // sunset and sunrise   
        document.getElementById("sun-rise").innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`
        document.getElementById("sun-set").innerHTML = `${data.forecast.forecastday[0].astro.sunset}`
                    

        


        // week temprature
        document.getElementById("day-1").src = data["current"]["condition"]["icon"];
        document.getElementById("day-2").src = data["current"]["condition"]["icon"];
        document.getElementById("day-3").src = data["current"]["condition"]["icon"];
        document.getElementById("day-4").src = data["current"]["condition"]["icon"];
        document.getElementById("day-5").src = data["current"]["condition"]["icon"];
        document.getElementById("day-6").src = data["current"]["condition"]["icon"];
        document.getElementById("day-7").src = data["current"]["condition"]["icon"];

    })
    
    .then(error => console.log("error", error));


    /////////////////////////////////////////////////////////////////////////////////////////////////////

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

        // city tempurature

        document.getElementById("city-2-name").innerHTML = data["location"]["name"];
        document.getElementById("city-2-country").innerHTML = data["location"]["country"];
        document.getElementById("city-2-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-2-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-2-text").innerHTML = data["current"]["condition"]["text"];

    
    })

fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=jaffna&days=7&aqi=yes&alerts=yes`, reop)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // city tempurature

        document.getElementById("city-3-name").innerHTML = data["location"]["name"];
        document.getElementById("city-3-country").innerHTML = data["location"]["country"];
        document.getElementById("city-3-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-3-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-3-text").innerHTML = data["current"]["condition"]["text"];

    })

fetch(`http://api.weatherapi.com/v1/forecast.json?key=ee16cdd2901442cdabd52206240703&q=malabe&days=7&aqi=yes&alerts=yes`, reop)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // city tempurature

        document.getElementById("city-4-name").innerHTML = data["location"]["name"];
        document.getElementById("city-4-country").innerHTML = data["location"]["country"];
        document.getElementById("city-4-forecast").src = data["current"]["condition"]["icon"];
        document.getElementById("city-4-tempurature").innerHTML = data["current"]["temp_c"];
        document.getElementById("city-4-text").innerHTML = data["current"]["condition"]["text"];

    })

