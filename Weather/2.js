let weather = function () {
    
    //creating the object
    let xhr = new XMLHttpRequest();

    let city = document.querySelector('#txt').value;

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
    let name = document.querySelector('#city-name');
     name.innerHTML = jsonref.name;
   

    //Temprature
    let temp = jsonref.main.temp;
    parent.children[0].children[1].innerHTML = temp;
    

    //Humidity
    let humidity = jsonref.main.humidity;
    parent.children[1].children[1].innerHTML = humidity;


    //Preassure
    let pressure = jsonref.main.pressure;
    parent.children[2].children[1].innerHTML = pressure;    
      
    document.querySelector('#txt').value = "";

    

}