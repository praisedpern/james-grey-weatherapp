import './App.css';

import Title from './Components/Title'
import LocationEntry from './Components/LocationEntry'
import ViewForecast from './Components/ViewForecast'
import DayRange from './Components/DayRange'

function App() {
  return (
    <div className="App">
      <Title />
      <LocationEntry />
      <ViewForecast />
      <DayRange />
    </div>
  );
}

export default App;
