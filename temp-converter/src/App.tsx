import { useState, type ChangeEvent } from 'react'
import './index.css'
import TemperatureConverter from './components/TemperatureConverter.tsx';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function handleCelciusConversion(e: ChangeEvent<HTMLInputElement>) {
    const temperature = e.target.value;
    setCelsius(temperature);
    setFahrenheit(temperature === '' ? '' : String(((parseFloat(temperature) * (9 / 5)) + 32).toFixed(2)));
  }

  function handleFahrenheitConversion(e: ChangeEvent<HTMLInputElement>) {
    const temperature = e.target.value;
    setFahrenheit(temperature);
    setCelsius(temperature === '' ? '' : String(((parseFloat(temperature) - 32) * (5 / 9)).toFixed(2)))
  }

  return (
    <>
      <TemperatureConverter
        label="Celsius: "
        value={celsius}
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
