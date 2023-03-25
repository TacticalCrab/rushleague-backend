import {Body, Controller, Get, HttpStatus, Patch, Res, UseGuards} from '@nestjs/common';
import {MatchService} from '../domain/match.service';
import {Response} from 'express';
import {SetTeamsSettingsDto} from '../dto/teamSettins.dto';
import {AuthGuard} from '../../auth/application/guards/auth.guard';

@Controller('match')
export class MatchController {
    constructor(private matchService: MatchService) {}

    @Get('/teams_settings')
    getTeamsSettings() {
        return this.matchService.getTeamsSettings();
    }

    @Patch('/teams_settings')
    @UseGuards(AuthGuard)
    setTeamsSettings(@Res() res: Response, @Body() setTeamSettingsDto: SetTeamsSettingsDto) {
        this.matchService.setTeamsSettings(setTeamSettingsDto);
        res.status(HttpStatus.OK).send();
    }
}
