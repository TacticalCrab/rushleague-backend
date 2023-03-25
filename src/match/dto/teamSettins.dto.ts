import {ITeamSettings, ITeamsSettings} from '../domain/model/teamSettings.object';
import {IsBoolean, IsNotEmpty} from 'class-validator';
import {Type} from 'class-transformer';

// Implements, because request is the same as object

export class TeamSettingsDto implements ITeamSettings {
    team_image: string;
    team_name: string;
    team_score: number;
}


export class SetTeamsSettingsDto implements ITeamsSettings {
    @IsNotEmpty()
    @Type(() => TeamSettingsDto)
    team_1: TeamSettingsDto;

    @IsNotEmpty()
    @Type(() => TeamSettingsDto)
    team_2: TeamSettingsDto;

    @IsNotEmpty()
    @IsBoolean()
    swap: boolean;
}

export class TeamsSettingsDto implements ITeamsSettings {
    @IsNotEmpty()
    @IsBoolean()
    swap: boolean;

    @IsNotEmpty()
    @Type(() => TeamSettingsDto)
    team_1: ITeamSettings;

    @IsNotEmpty()
    @Type(() => TeamSettingsDto)
    team_2: ITeamSettings;
}