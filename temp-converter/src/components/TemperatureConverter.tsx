import { useState, type ChangeEvent } from 'react'
import '../index.css'
import TemperatureInput from './TemperatureInput.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TemperatureConverter(){
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
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-12">

          <Card className="relative w-80 overflow-hidden bg-blue-100 duration-300 hover:scale-105 hover:shadow-xl">
            <span className="absolute right-4 top-2 text-8xl font-bold text-blue-500 opacity-20">
              °C
            </span>
            <CardHeader>
              <CardTitle className="text-blue-700 text-xl">
                Celsius
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <TemperatureInput
                value={celsius}
                tempChange={handleCelciusConversion}
              />
            </CardContent>
          </Card>

          <Card className="relative w-80 overflow-hidden bg-orange-100 duration-300 hover:scale-105 hover:shadow-xl">
            <span className="absolute right-4 top-2 text-8xl font-bold text-orange-500 opacity-20">
              °F
            </span>
            <CardHeader>
              <CardTitle className="text-orange-700 text-xl">
                Fahrenheit
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <TemperatureInput
                value={fahrenheit}
                tempChange={handleFahrenheitConversion}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}