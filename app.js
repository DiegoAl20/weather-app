let API_URL = `https://api.weatherapi.com/v1/current.json?key=b59c26bff73f4604bc9204720241906&q=${"Mexico"}`;

const weatherImg = document.querySelector('.image-weather');
const buttonSearch = document.querySelector('.search');
const temperature = document.querySelector('.temperature');
const state = document.querySelector('.state');
const feelslike = document.querySelector('.feelslike');
const city = document.querySelector('.city');

async function fetchData(url) {
    const result = await fetch(url);
    const data = await result.json();

    return data;
}

buttonSearch.addEventListener('click', () => {
    const inputText = document.querySelector('.input-text');
    let cityUser = inputText.value;

    API_URL = `https://api.weatherapi.com/v1/current.json?key=b59c26bff73f4604bc9204720241906&q=${cityUser}`;

    fetchData(API_URL).then(result => {
        weatherImg.src = `https:${result.current.condition.icon}`;
        temperature.textContent = `${result.current.temp_c}°C`;
        state.textContent = result.current.condition.text;
        feelslike.textContent = `Feels like: ${result.current.feelslike_c}°C`;
        city.textContent = `${result.location.name}, ${result.location.country}`;
    })
    .catch(err => {
        alert(`${cityUser} no encontrada`);
    });

});

fetchData(API_URL)
    .then(result => {
        weatherImg.src = `https:${result.current.condition.icon}`;
        temperature.textContent = `${result.current.temp_c}°C`;
        state.textContent = result.current.condition.text;
        feelslike.textContent = `Feels like: ${result.current.feelslike_c}°C`;
        city.textContent = `${result.location.name}, ${result.location.country}`;
    });