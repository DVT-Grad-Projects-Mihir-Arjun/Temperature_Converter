import { useState, type ChangeEvent } from 'react'
import './index.css'
import TemperatureConverter from './components/TemperatureConverter.tsx';

function App() {
  const [celcius, setCelcius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function handleCelciusConversion(e: ChangeEvent<HTMLInputElement>){
    const temperature = e.target.value;
    setCelcius(temperature);
    setFahrenheit(temperature === '' ? '' : String((parseFloat(temperature) * 9/5) + 32));
  }

  function handleFahrenheitConversion(e: ChangeEvent<HTMLInputElement>){
    const temperature = e.target.value;
    setFahrenheit(temperature);
    setCelcius(temperature === '' ? '' : String((parseFloat(temperature)-32)*(5/9)))
  }

  return (
    <>
      <TemperatureConverter
        label="Celcius: "
        value={celcius}
        tempChange={handleCelciusConversion}
      />
      <br></br>
      <br></br>
      <TemperatureConverter
        label="Fahrenheit: "
        value={fahrenheit}
        tempChange={handleFahrenheitConversion}
      />
    </>
  )
}

export default App
