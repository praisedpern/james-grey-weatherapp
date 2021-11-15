import DayForecast from './DayForecast'
import { useState, useEffect } from 'react'

const ViewForecast = ({ location }) => {
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=0&lon=52&exclude=hourly&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((response) => {
        console.log(response);
        setWeatherData(response);
        setIsLoading(false);
        console.log(weatherData);
    })
    }, [location]);

    return (
        <section id="view-forecast">
            ViewForecast
            {/* {weatherData.map((day, index) => {
                if (index >= dayRangeSelection[0])
                return 
            })} */}
            {/* {for (let i = 0; i < 7; i++) {
                const daily = 
                <DayForecast daily={weatherData.daily[i]}/>    
            }} */}
        </section>
    )
}

export default ViewForecast


// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}