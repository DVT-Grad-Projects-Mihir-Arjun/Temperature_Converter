import { useState, type ChangeEvent } from 'react'
import '../index.css'
import TemperatureInput from './TemperatureInput.tsx';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Scale = 'c' | 'f';

function toCelsius(f: string): string {
  return f === '' ? '' : ((parseFloat(f) - 32) * (5 / 9)).toFixed(2);
}

function toFahrenheit(c: string): string {
  return c === '' ? '' : ((parseFloat(c) * (9 / 5)) + 32).toFixed(2);
}

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState<Scale>('c');

  const celsius     = scale === 'c' ? temperature : toCelsius(temperature);
  const fahrenheit  = scale === 'f' ? temperature : toFahrenheit(temperature);

  function handleCelsiusChange(e: ChangeEvent<HTMLInputElement>) {
    setScale('c');
    setTemperature(e.target.value);
  }

  function handleFahrenheitChange(e: ChangeEvent<HTMLInputElement>) {
    setScale('f');
    setTemperature(e.target.value);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-12">

        <Card className="relative w-80 overflow-hidden bg-blue-100 duration-300 hover:scale-105 hover:shadow-xl">
          <span className="absolute right-4 top-2 text-8xl font-bold text-blue-500 opacity-20">°C</span>
          <CardHeader>
            <CardTitle className="text-blue-700 text-xl">Celsius</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <TemperatureInput value={celsius} tempChange={handleCelsiusChange} />
          </CardContent>
        </Card>

        <Card className="relative w-80 overflow-hidden bg-orange-100 duration-300 hover:scale-105 hover:shadow-xl">
          <span className="absolute right-4 top-2 text-8xl font-bold text-orange-500 opacity-20">°F</span>
          <CardHeader>
            <CardTitle className="text-orange-700 text-xl">Fahrenheit</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <TemperatureInput value={fahrenheit} tempChange={handleFahrenheitChange} />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}