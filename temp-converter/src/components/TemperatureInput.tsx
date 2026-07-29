interface tempProps{
  value: string;
  tempChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TemperatureInput({ value, tempChange }:tempProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <input
        className="w-full rounded-md border border-slate-300 p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={tempChange}
      />
    </div>
  );
}