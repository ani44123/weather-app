
let temperature = document.getElementById('placetemp');
let weathertype = document.getElementById('weathertype');

function citysubmit() {
    let cityname = document.getElementById('mycity').value;
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=03729336ef4b08f6a411eda01799582b`
    
    document.getElementById('displaycityname').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('city-error').style.display = 'none'
        console.log(data.main.temp);
        weathertype.innerHTML = data.weather[0].main;
        temp = data.main.temp - 273.15;
        temperature.innerHTML = temp.toFixed(2) + ' °C';
        document.getElementById('weathercard').style.display = 'flex'

    })
        .catch((data) => {
            document.getElementById('city-error').style.display = 'flex'
        })


}