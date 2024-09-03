# Weather Dashboard App

## Description

The Weather Dashboard App is a React-based web application that provides users with current weather information for their chosen city. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface. Users can search for cities, view detailed weather information, and see their search history.

## Features

- **Search for current weather conditions by city.**
- **Display weather details including temperature, weather description, humidity, and wind speed.**
- **View a history of previously searched cities.**
- **Store the last searched city in local storage for quick access.**
- **Responsive design with Tailwind CSS for a smooth user experience.**
- **Loading spinner and error handling for better usability.**

## Installation

To get started with the Weather Dashboard App, follow these steps:

1. **Clone the Repository:**

```bash
   git clone https://github.com/your-username/weather-dashboard-app.git
```

2. **Navigate to the Project Directory:**

```
cd weather-dashboard-app
```

3. **Install Dependencies:**

Ensure you have Node.js installed. Then, install the project dependencies:

```
npm install
```

4. **Create a .env File:**

Create a .env file in the root directory of the project and add your OpenWeatherMap API key:

```
VITE_API_KEY=your_openweathermap_api_key
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
```

5. **Run the Development Server:**

Start the development server to view the app locally:

```
npm start
```

Visit http://localhost:3000 in your browser to see the app in action.

## Usage

- **Search for Weather:** Enter the name of a city in the search bar and press Enter or click the search button. The app will display the current weather conditions for the specified city.
- **View Weather Details:** The weather card will show temperature, weather description, humidity, and wind speed.
- **Access Search History:** The search history sidebar allows you to quickly select and view weather details for previously searched cities.

## Components

- **`App`:** Main component that manages the state and integrates other components.
- **`SearchBar`:** Component for searching cities.
- **`WeatherCard`:** Displays current weather information.
- **`CityHistory`:** Displays the list of previously searched cities.
- **`StateDisplay`:** Handles error and loading states with appropriate messaging.

## Styling

The app uses [Tailwind CSS](https://tailwindcss.com/) for styling, providing a modern and responsive design. Custom styles and transitions are also applied to enhance the user experience.

## Contributing

If you want to contribute to the development of the Weather Dashboard App, please follow these guidelines:

1. **Fork the Repository:** Create a personal copy of the repository on GitHub.
2. **Create a New Branch:** Create a new branch for your changes.
3. **Make Your Changes:** Implement your changes and ensure they are thoroughly tested.
4. **Submit a Pull Request:** Submit a pull request to the main repository with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## Acknowledgments

- **[OpenWeatherMap](https://openweathermap.org/):** For providing the weather data API.
- **[Tailwind CSS](https://tailwindcss.com/):** For the utility-first CSS framework.
- **[React](https://reactjs.org/):** For the UI library used in this project.
