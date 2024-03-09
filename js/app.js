//document.getElementById("searchBtn").addEventListener("click", ()=> {
    let searchVal = document.getElementById("searchTxt").value;
    let reop={
        method:'GET'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=ee16cdd2901442cdabd52206240703&q=kandy`, reop)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        
        document.getElementById("icon").src = data["current"]["condition"]["icon"];
        document.getElementById("icon1").src = data["current"]["condition"]["icon"];
    })
    .then(error => console.log("error",error))
//})
