
export interface ITeamSettings {
    team_name: string;
    team_score: number;
    team_image: string;
}

export interface ITeamsSettings {
    team_1: ITeamSettings,
    team_2: ITeamSettings,
    swap: boolean;
}