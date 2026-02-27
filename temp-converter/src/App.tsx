import { useState, type ChangeEvent } from 'react'
import './index.css'
import TemperatureConverter from './components/TemperatureConverter.tsx';

function App() {
  const [temperature, setTemperature] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTemperature(e.target.value)
  }

  return (
    <>
      <TemperatureConverter
        label="Celcius: "
        value={temperature}
        tempChange={handleChange}
      />
      <br></br>
      <br></br>
      <TemperatureConverter
        label="Fahrenheit: "
        value={temperature}
        tempChange={handleChange}
      />
    </>
  )
}

export default App
