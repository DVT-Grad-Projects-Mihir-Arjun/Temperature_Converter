interface searchProps {
    filterText: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ filterText, onChange }: searchProps) {
    return (
        <div className="flex items-center gap-2 px-2 py-2">
            <input
                value={filterText}
                onChange={onChange}
                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search..."
            />
        </div>
    );
}