import { useState, type ChangeEvent } from 'react'
import './index.css'
import TemperatureConverter from './components/TemperatureConverter.tsx';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <div className="flex justify-center gap-10 mt-20">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Celsius</CardTitle>
          </CardHeader>
          <CardContent>
            <TemperatureConverter
              label="Celsius: "
              value={celsius}
              tempChange={handleCelciusConversion}
            />
          </CardContent>
        </Card>

        <Card className="w-80">
          <CardHeader>
            <CardTitle>Fahrenheit</CardTitle>
          </CardHeader>
          <CardContent>
            <TemperatureConverter
              label="Fahrenheit: "
              value={fahrenheit}
              tempChange={handleFahrenheitConversion}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default App
