import DayForecast from './DayForecast'
import { useState, useEffect } from 'react'

const ViewForecast = ({ location }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=0&lon=52&exclude=hourly&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
        return response.json();
    }).then((response) => {
        setWeatherData(response.daily);
        setIsLoading(false);
    })
    }, [location]);

    const thingsToWatch = [weatherData, location]

    useEffect(() => {
        console.log("A state has changed, these are the current values:");
        thingsToWatch.forEach((thing, index) => {console.log(thing, `at index ${index}`)});
        return;
    }, thingsToWatch);

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