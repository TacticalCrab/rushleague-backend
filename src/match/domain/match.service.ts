import { Injectable } from '@nestjs/common';
import {ITeamsSettings} from './model/teamSettings.object';
import {SetTeamsSettingsDto} from '../dto/teamSettins.dto';

@Injectable()
export class MatchService {
    teamsSettings: ITeamsSettings = {
        team_1: {
            team_name: 'TEAM 1',
            team_score: 0,
            team_image: ''
        },
        team_2: {
            team_name: 'TEAM 2',
            team_score: 0,
            team_image: ''
        },
        swap: false
    };

    getTeamsSettings(): ITeamsSettings {
        return this.teamsSettings;
    }

    setTeamsSettings(teamSettings: SetTeamsSettingsDto) {
        console.log(teamSettings);
        this.teamsSettings = teamSettings;
    }
}
