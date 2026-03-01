type TeamMember = {
    id: number;
    name: string;
    role: string;
};

interface TeamListProps {
    team: TeamMember[];
}

export default function TeamList({ team }: TeamListProps) {
    return (
        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 shadow-sm">
            {team.map(team_member => (
                <li key={team_member.id} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                    <span className="font-medium text-gray-800">{team_member.name}</span>
                    <span className="text-sm text-gray-500 bg-blue-100 rounded-full px-3 py-1">{team_member.role}</span>
                </li>
            ))}
        </ul>
    );
}