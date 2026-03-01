type TeamMember = {
  id: number;
  name: string;
  role: string;
};

export function filterTeam(items: TeamMember[], query: string) {
    query = query.toLowerCase();
    return items.filter((item: { name: string; }) =>
        item.name.split(' ').some((word: string) =>
            word.toLowerCase().startsWith(query)
        )
    );
}