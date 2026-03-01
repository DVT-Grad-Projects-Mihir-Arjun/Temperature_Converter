interface searchProps {
    filterText: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ filterText, onChange }: searchProps) {
    return (
        <label>
            Search:{' '}
            <input
                value={filterText}
                onChange={onChange}
            />
        </label>
    );
}