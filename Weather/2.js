let weather = function () {
    
    //creating the object
    let xhr = new XMLHttpRequest();

    let city = document.querySelector('#txt').value || "Delhi";

    let url = "http://api.openweathermap.org/data/2.5/weather?appid=4c24bd22a911ec1121356dbbbf90b704&units=metric&q=" + city;

    //console.log(url);

    //initializing the object
    xhr.open("GET", url );

    //open and send the request
    xhr.send();

    xhr.onload = function (){
        //console.log(xhr.responseText);
        let jsonref  = JSON.parse(xhr.responseText);

        jsondomlogic(jsonref);
    }

}

let jsondomlogic = (jsonref) => {


    console.log(jsonref);

    let parent = document.querySelector('#info-block');
    parent.style.visibility = "Visible";
    
    //City Name

    //day chart
    let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    var today = new Date();
    var day = today.getDay();
    var time = today.getHours() + ":" + today.getMinutes();

    let name = document.querySelector('#city-name');
     name.children[0].innerHTML = jsonref.name;
     name.children[1].innerHTML = days[day] + " " + time;
   

    //Temprature
    let temp = jsonref.main.temp;
    parent.children[0].children[1].innerHTML = temp + "&#8451";

    //Feels Like
    let temp_like = jsonref.main.feels_like;
    parent.children[1].children[1].innerHTML = temp + "&#8451";
    

    //Humidity
    let humidity = jsonref.main.humidity;
    parent.children[2].children[1].innerHTML = humidity + "%";


    //Rain
    let rain = jsonref.weather[0].description;
    parent.children[3].children[1].innerHTML = rain;  
    
    //wind speed
    let wind = jsonref.wind.speed;
    parent.children[4].children[1].innerHTML = wind + " km/h"; 
    
    //Visibility
    let visible = jsonref.visibility;
    parent.children[5].children[1].innerHTML = visible/1000 + " km/h"; 

    document.querySelector('#txt').value = "";

}