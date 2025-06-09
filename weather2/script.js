function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function appendTextElement(parent, tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    parent.appendChild(el);
    return el;
}

async function fetchWeather(city) {
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_tw`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data, city);
    } catch (error) {
        console.error('天氣查詢出錯', error);
        const container = document.getElementById('weatherResult');
        clearElement(container);
        appendTextElement(container, 'p', '⚠️ 查詢過程中發生錯誤。');
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
        const container = document.getElementById('weatherResult');
        clearElement(container);
        appendTextElement(container, 'p', '⚠️ 查詢過程中發生錯誤。');
    }
}

function displayWeather(data, city) {
    const container = document.getElementById('weatherResult');
    clearElement(container);

    if (data.weather) {
        appendTextElement(container, 'h2', `${city} 當前天氣`);
        appendTextElement(container, 'p', `🌡️ 溫度: ${data.main.temp}°C`);
        appendTextElement(container, 'p', `🌪️ 風速: ${data.wind.speed} m/s`);
        appendTextElement(container, 'p', `💧 濕度: ${data.main.humidity}%`);
        appendTextElement(container, 'p', `🌍 氣壓: ${data.main.pressure} hPa`);
        appendTextElement(container, 'p', `☁️ 天氣狀況: ${data.weather[0].description}`);

        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        img.alt = '天氣圖示';
        container.appendChild(img);

        container.appendChild(document.createElement('hr'));

        const button = document.createElement('button');
        button.textContent = '查看未來 5 天天氣';
        button.addEventListener('click', () => fetchForecast(city));
        container.appendChild(button);
    } else {
        appendTextElement(container, 'p', '❌ 無法獲取天氣資料，請確認城市名稱正確。');
    }
}

function displayForecast(data, city) {
    const container = document.getElementById('weatherResult');

    if (data.list) {
        appendTextElement(container, 'h2', `${city} - 未來 5 天天氣預報`);

        const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        dailyForecasts.forEach(day => {
            const div = document.createElement('div');
            div.className = 'forecast-item';

            const date = new Date(day.dt * 1000).toLocaleDateString();
            appendTextElement(div, 'p', `📅 日期: ${date}`);
            appendTextElement(div, 'p', `🌡️ 溫度: ${day.main.temp}°C`);
            appendTextElement(div, 'p', `☁️ 天氣: ${day.weather[0].description}`);
            appendTextElement(div, 'p', `🌪️ 風速: ${day.wind.speed} m/s`);
            appendTextElement(div, 'p', `💧 濕度: ${day.main.humidity}%`);

            const img = document.createElement('img');
            img.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            img.alt = '天氣圖示';
            div.appendChild(img);

            container.appendChild(div);
            container.appendChild(document.createElement('hr'));
        });
    } else {
        appendTextElement(container, 'p', '❌ 無法獲取天氣預報資料。');
    }
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherByLocation(lat, lon);
        }, () => {
            const container = document.getElementById('weatherResult');
            clearElement(container);
            appendTextElement(container, 'p', '⚠️ 無法獲取位置信息，請手動輸入城市。');
        });
    } else {
        const container = document.getElementById('weatherResult');
        clearElement(container);
        appendTextElement(container, 'p', '❌ 你的瀏覽器不支援定位功能。');
    }
}

async function fetchWeatherByLocation(lat, lon) {
    const apiKey = 'c78dd20685b312a1af9282c7c5dee61d';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_tw`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data, '📍 當前位置');
    } catch (error) {
        console.error('天氣查詢出錯', error);
        const container = document.getElementById('weatherResult');
        clearElement(container);
        appendTextElement(container, 'p', '⚠️ 查詢過程中發生錯誤。');
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
