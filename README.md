# 🌤️ SkyGazer

**SkyGazer** is a playful and cartoon-style weather web app that provides real-time weather updates, 5-day forecasts, and weather alerts. Designed with a responsive layout and charming animations, it ensures a delightful experience on any device.

📘 Available in: [English](./README.md) | [中文說明](./README.zh.md)

---

## 🚀 Features

- Real-time weather updates by city or location 📍
- 5-day weather forecast 📅
- Weather alerts and warnings ⚠️
- Responsive and mobile-friendly UI 📱
- Keyboard and mouse navigation support ⌨️🖱️
- Customizable background image or video 🎬
- Fun cartoon-style animations 🌈

---

## 🌈 Demo

Experience SkyGazer live: [SkyGazer Demo](https://ericthegoatskr.github.io/SkyGazer/weather2/)

---

## 🛠️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ericthegoatskr/SkyGazer.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd SkyGazer/weather2
   ```

3. **Open `index.html` in Your Browser**:  
   Simply double-click the file, or use Live Server in VS Code.

---

## ⚙️ Configuration

### 🔑 API Key

SkyGazer uses the [OpenWeatherMap API](https://openweathermap.org/api).
Copy `weather2/config.example.js` to `weather2/config.js` and replace the
placeholder key:

```bash
cp weather2/config.example.js weather2/config.js
# Edit config.js and insert your API key
```
`config.js` is listed in `.gitignore` so your key won't be committed.
Alternatively, set `OPENWEATHER_API_KEY` as a global variable before loading
`script.js`.

---

### 🎨 Custom Backgrounds

To set a custom background image, modify your CSS in `styles.css`:

```css
body {
    background: url('path_to_your_image.jpg') no-repeat center center fixed;
    background-size: cover;
}
```

To use video, insert a `<video>` element in your HTML and apply `object-fit: cover` via CSS.

---

## 📂 Project Structure

```
SkyGazer/
├── weather2/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── LICENSE
└── README.md
```

---

## 📄 License

This project is licensed under the [Apache-2.0 License](https://github.com/Ericthegoatskr/SkyGazer/blob/main/LICENSE).

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo and submit pull requests.  
For major changes, open an issue first to discuss what you’d like to do.

---

## 📬 Contact

Have questions or feedback?  
Open an issue on the [GitHub repository](https://github.com/Ericthegoatskr/SkyGazer/issues).

...
