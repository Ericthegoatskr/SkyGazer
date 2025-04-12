
# 🌤️ SkyGazer 天氣查詢系統

**SkyGazer** 是一款擁有可愛卡通風格介面的天氣查詢應用，提供即時天氣、五日天氣預報、天氣警報等功能，並支援滑順動畫與行動裝置響應式設計，致力於打造愉快直覺的使用體驗。

---

## 🚀 功能特色

- ✅ **即時天氣查詢**：輸入城市或使用定位，即可取得最新天氣資訊  
- ✅ **五日天氣預報**：提供未來 5 天每日天氣趨勢  
- ✅ **天氣警報通知**：顯示如颱風、暴雨等警示訊息  
- ✅ **自動定位支援**：一鍵查詢目前所在地天氣  
- ✅ **鍵盤滾動操作**：可使用方向鍵或滑鼠滾輪瀏覽預報資訊  
- ✅ **卡通動畫風格**：活潑色彩與彈跳動畫提升互動體驗  
- ✅ **背景可自訂**：支援自訂圖片或影片作為背景

---

## 🌈 線上體驗

👉 [點我立即體驗 SkyGazer](https://ericthegoatskr.github.io/SkyGazer/weather2/)

---

## 📥 安裝與使用方式

1. **下載或克隆專案：**
   ```bash
   git clone https://github.com/Ericthegoatskr/SkyGazer.git
   ```

2. **進入專案資料夾：**
   ```bash
   cd SkyGazer/weather2
   ```

3. **打開 `index.html`：**  
   可使用瀏覽器直接開啟，或在 VS Code 中使用 Live Server。

---

## ⚙️ 設定說明

### ✅ 設定 OpenWeatherMap API 金鑰

請至 [OpenWeatherMap](https://openweathermap.org/api) 免費註冊帳號並取得 API 金鑰，然後將 `script.js` 中的金鑰替換為你的：

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

---

### ✅ 更換背景圖片或影片

你可以在 `styles.css` 中修改 `body` 背景設定：

```css
body {
    background: url('你的圖片路徑.jpg') no-repeat center center fixed;
    background-size: cover;
}
```

若要加入影片，請在 `index.html` 中加入 `<video>` 標籤，並用 CSS 設定為背景。

---

## 📁 專案結構

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

## 📄 授權 License

本專案採用 [Apache 2.0 License](https://github.com/Ericthegoatskr/SkyGazer/blob/main/LICENSE) 授權。

---

## 🤝 歡迎貢獻

歡迎提出 pull request 或 issue！如果你有任何改進建議或新功能想法，請先開啟 issue 討論。

---

## 📬 聯絡方式

若有使用上的疑問或建議，歡迎透過 [GitHub Issues](https://github.com/Ericthegoatskr/SkyGazer/issues) 留言討論。
