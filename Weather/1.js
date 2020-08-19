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

    let parent = document.querySelector('#parent');

    console.log(jsonref);

    let temp = jsonref.main.temp;
    let name = jsonref.name;

    parent.children[0].innerHTML = name + " " + temp;

    //parent.append(newele);

}