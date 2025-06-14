# Weather App

A simple and elegant weather application that displays real-time weather information for your current location or any city you search for. Built with HTML, CSS, and JavaScript, and powered by the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- 🌍 Get weather for your current location (with geolocation permission)
- 🔎 Search weather by city name
- 🌡️ Displays temperature, weather description, wind speed, humidity, and cloudiness
- 🇺🇳 Shows country flag for the location
- 🖥️ Responsive and clean UI
- ⚡ Fast and lightweight (no frameworks)

## Screenshots

![Weather App Screenshot](screenshot.png) <!-- Add your screenshot if available -->

## Getting Started

### Prerequisites

- A modern web browser
- An [OpenWeatherMap API key](https://openweathermap.org/appid) (replace the placeholder in `script.js`)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/weatherapp.git
   cd weatherapp
   ```

2. **Add your OpenWeatherMap API key:**
   - Open `script.js`
   - Replace the value of `API_KEY` with your own API key:
     ```js
     const API_KEY = "YOUR_API_KEY_HERE";
     ```

3. **Open `index.html` in your browser:**
   - Double-click `index.html` or use a local server.

## Usage

- Click **"Your Weather"** to get weather for your current location (allow location access).
- Click **"Search Weather"** and enter a city name to get weather for any city.

## Project Structure

```
.
├── cloud.png
├── humidity.png
├── index.html
├── loading.gif
├── location.png
├── script.js
├── search.png
├── style.css
├── wind.png
```

- `index.html` – Main HTML file
- `style.css` – App styling
- `script.js` – App logic and API calls
- Image assets for UI

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using HTML, CSS,