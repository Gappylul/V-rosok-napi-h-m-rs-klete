const div = document.querySelector(".cities");

const renderData = ({ city, country, coords: { lat, lon }, temps, image }) => {
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const tempAvg = temps.reduce((acc, item) => acc + item, 0) / temps.length;
    return (
        `
            <div class="parent">
                <img src=${image} alt=${city}>
                <div>
                    <h3>${city}, ${country}</h3>
                    <p><i class="fa fa-map-signs" aria-hidden="true"></i>Koordináták: ${lat}, ${lon}</p>
                    <p><i class="fa fa-thermometer-empty" aria-hidden="true"></i>Minimum: ${min}°C</p>
                    <p><i class="fa fa-thermometer-full" aria-hidden="true"></i>Maximum: ${max}°C</p>
                    <p><i class="fa fa-thermometer-half" aria-hidden="true"></i>Átlag: ${tempAvg}°C</p>
                </div>
            </div>
        `
    );
}

const onStart = () => {
    div.innerHTML = "";
    weatherData.forEach((data) => div.innerHTML += renderData(data));
}

const search = () => {
    const input =  document.querySelector("input").value;
    if (input == "") { onStart(); return; }
    const searchedData = weatherData.filter((item) => item.city.toLowerCase().startsWith(input.toLowerCase()));
    div.innerHTML = "";
    searchedData.forEach((data) => div.innerHTML += renderData(data));
}