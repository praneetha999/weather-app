var weatherData = document.getElementById("weather_data");
        let container = document.querySelector("#container")
        weatherData.addEventListener('click', function (e) {
            e.preventDefault();
            container.innerHTML = ''
            var cityName = document.getElementById("cityName").value;
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1b81668fc60a1d1905a3e5a311d45414";
            if (cityName == "") {
                alert("Enter a city name");
            } else {
                fetch(url).then(function (response) {
                    if (response.ok) {

                        return response.json();
                    } else {
                        throw new Error(Error);
                    }
                }).then(function (data) {
                    let temp = data.main.temp;
                    let pressure = data.main.pressure;
                    let humidity = data.main.humidity;
                    let sunrise = data.sys.sunrise;
                    var date = new Date(sunrise * 1000);
                     sunrise = date.toLocaleTimeString();

                    let sunset = data.sys.sunset;
                    var date2 = new Date(sunset * 1000);
                     sunset = date2.toLocaleTimeString();
                    let windspeed = data.wind.speed;
                    let description = data.weather[0].description;
                    let result = `
                    <div> Temperature -  ${temp} kelvin </div>
                    <div> Pressure -  ${pressure} hPa </div>
                    <div> Humidity - ${humidity} % </div>
                    <div> Sunrise -  ${sunrise} </div>
                    <div> Sunset - ${sunset}</div>
                    <div> Windspeed - ${windspeed} m/s </div>
                    <div> Weather type - ${description}</div>
                    `
                    container.innerHTML += result

                    console.log("rfe", temp, pressure, humidity, sunrise, sunset, windspeed, description)
                    const html = `
        <h2 class="text-danger text-center"><span class="text-dark">City:</span>${data.name}</h2>
        ` ;
                    document.getElementById("display_data").innerHTML = html;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });