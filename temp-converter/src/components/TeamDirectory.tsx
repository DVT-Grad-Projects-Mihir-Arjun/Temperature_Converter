import NavBar from "./NavBar";
import { team } from "../data/data.tsx";
import { useState, type ChangeEvent } from "react";
import SearchBar from "./SearchBar.tsx";
import { filterTeam } from "../utils/filterTeam.tsx";
import TeamList from "./TeamList.tsx";

export default function TeamDirectory() {
    const [query, setQuery] = useState('');
    const team_results = filterTeam(team, query);

    function handleChange(e:ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }
    return (
        <>
            <NavBar />
            <SearchBar 
                filterText={query}
                onChange={handleChange}
            />
            <TeamList team={team_results} />
        </>
    )
}
