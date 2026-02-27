interface tempProps{
  label: string;
  value: string;
  tempChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TemperatureConverter({ label, value, tempChange }:tempProps) {
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