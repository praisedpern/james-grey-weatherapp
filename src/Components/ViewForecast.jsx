import DayForecast from './DayForecast'
import { useState } from 'react'

const ViewForecast = () => {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState('false')

    return (
        <section id="view-forecast">
            ViewForecast
            <DayForecast />
        </section>
    )
}

export default ViewForecast
