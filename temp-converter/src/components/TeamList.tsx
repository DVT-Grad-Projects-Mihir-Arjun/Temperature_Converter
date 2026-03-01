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
        <table>
            <tbody>
                {team.map(team_member => (
                    <tr key={team_member.id}>
                        <td>{team_member.name}</td>
                        <td>{team_member.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}