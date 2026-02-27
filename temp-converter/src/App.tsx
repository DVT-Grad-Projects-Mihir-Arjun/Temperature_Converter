import { useState, type ChangeEvent } from 'react'
import './index.css'

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

interface tempProps{
  label: string;
  value: string;
  tempChange: React.ChangeEventHandler<HTMLInputElement>;
}

function TemperatureConverter({ label, value, tempChange }:tempProps) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={tempChange}
      />
    </label>
  );
}

export default App
