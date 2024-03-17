'use strict'

const imgSrc = 'http://openweathermap.org/img/w/10d.png'
const server = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19'
const wrapper = document.querySelector('#wrapper');
const getInfoButton = document.querySelector('#getInfo');

function showData(el) {

    const location = document.createElement('p')
    const infoTemperature = document.createElement('p');
    const infoPressure =document.createElement('p');
    const descr = document.createElement('p');
    const infoHumidity=document.createElement('p');
    const windSpeed =document.createElement('p');
    const degrees =document.createElement('p');
    const icon = document.createElement('img')

    location.textContent = `City: ${el.name}`
    infoTemperature.textContent = `Temperature: ${el.main.temp}`
    infoPressure.textContent = `Pressure: ${el.main.pressure}`
    descr.textContent = `Description: ${el.weather[0].description}`
    infoHumidity.textContent = `Humidity: ${el.main.humidity}`
    windSpeed.textContent = `Speed: ${el.wind.speed}`
    degrees.textContent = `Wind deg : ${el.wind.deg}`
    icon.src = imgSrc;

    wrapper.appendChild(location);
    wrapper.appendChild(infoTemperature);
    wrapper.appendChild(infoPressure);
    wrapper.appendChild(descr);
    wrapper.appendChild(infoHumidity);
    wrapper.appendChild(windSpeed);
    wrapper.appendChild(degrees);
    wrapper.appendChild(icon);

}

function fetchData() {
    fetch(server)
        .then(response => response.json())
        .then(data => {
            showData(data);
        })
}
getInfoButton.addEventListener('click', () => {
    wrapper.innerHTML = '';
    fetchData();
});

