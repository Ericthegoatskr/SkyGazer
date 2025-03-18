async function fetchWeather(city) {
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_tw`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data, city);
    } catch (error) {
        console.error('天氣查詢出錯', error);
        document.getElementById('weatherResult').innerHTML = `<p>⚠️ 查詢過程中發生錯誤。</p>`;
    }
}

async function fetchForecast(city) {
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=zh_tw`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayForecast(data, city);
    } catch (error) {
        console.error('天氣預報查詢出錯', error);
        document.getElementById('weatherResult').innerHTML = `<p>⚠️ 查詢過程中發生錯誤。</p>`;
    }
}

function displayWeather(data, city) {
    if (data.weather) {
        document.getElementById('weatherResult').innerHTML = `
            <h2>${city} 當前天氣</h2>
            <p>🌡️ 溫度: ${data.main.temp}°C</p>
            <p>🌪️ 風速: ${data.wind.speed} m/s</p>
            <p>💧 濕度: ${data.main.humidity}%</p>
            <p>🌍 氣壓: ${data.main.pressure} hPa</p>
            <p>☁️ 天氣狀況: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="天氣圖示">
            <hr>
            <button onclick="fetchForecast('${city}')">查看未來 5 天天氣</button>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>❌ 無法獲取天氣資料，請確認城市名稱正確。</p>`;
    }
}

function displayForecast(data, city) {
    if (data.list) {
        let forecastHTML = `<h2>${city} - 未來 5 天天氣預報</h2>`;
        
        const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

        dailyForecasts.forEach(day => {
            let date = new Date(day.dt * 1000).toLocaleDateString();
            forecastHTML += `
                <div class="forecast-item">
                    <p>📅 日期: ${date}</p>
                    <p>🌡️ 溫度: ${day.main.temp}°C</p>
                    <p>☁️ 天氣: ${day.weather[0].description}</p>
                    <p>🌪️ 風速: ${day.wind.speed} m/s</p>
                    <p>💧 濕度: ${day.main.humidity}%</p>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="天氣圖示">
                </div>
                <hr>
            `;
        });

        document.getElementById('weatherResult').innerHTML += forecastHTML;
    } else {
        document.getElementById('weatherResult').innerHTML += `<p>❌ 無法獲取天氣預報資料。</p>`;
    }
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            fetchWeatherByLocation(lat, lon);
        }, error => {
            document.getElementById('weatherResult').innerHTML = `<p>⚠️ 無法獲取位置信息，請手動輸入城市。</p>`;
        });
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>❌ 你的瀏覽器不支援定位功能。</p>`;
    }
}

async function fetchWeatherByLocation(lat, lon) {
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_tw`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data, "📍 當前位置");
    } catch (error) {
        console.error('天氣查詢出錯', error);
        document.getElementById('weatherResult').innerHTML = `<p>⚠️ 查詢過程中發生錯誤。</p>`;
    }
}

function searchWeather() {
    const city = document.getElementById('cityInput').value;
    if (city.trim() !== "") {
        fetchWeather(city);
    } else {
        alert("請輸入城市名稱！");
    }
}

// 🔥 監聽 `Enter` 鍵事件
document.getElementById('cityInput').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
})

document.addEventListener("keydown", function(event) {
    const weatherDisplay = document.querySelector(".weather-display");

    if (event.key === "ArrowDown") {
        weatherDisplay.scrollBy({ top: 100, behavior: "smooth" });
    } else if (event.key === "ArrowUp") {
        weatherDisplay.scrollBy({ top: -100, behavior: "smooth" });
    }
})
