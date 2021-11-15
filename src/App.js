import './App.css'
import { useState } from 'react'

import Title from './Components/Title'
import LocationEntry from './Components/LocationEntry'
import ViewForecast from './Components/ViewForecast'
import DayRange from './Components/DayRange'

function App() {
    const [location, setLocation] = useState('Manchester')
    const [dayRangeSelection, setDayRangeSelection] = useState([1])
    const [currentWeatherStyle, setCurrentWeatherStyle] = useState('sunny')

    return (
        <div className="App">
            <Title />
            <LocationEntry />
            <ViewForecast />
            <DayRange />
        </div>
    )
}

export default App
