function updateCurrentTemperature(response){
console.log(response.data.temperature);
}


function searchCity(city){
let apiKey = "003898fo4cafab4efff03e135t07fe8f";
let apiUrl = 
`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateCurrentTemperature);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

