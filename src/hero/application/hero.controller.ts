import {Controller, Get} from '@nestjs/common';
import { HeroSpecs } from './model/HeroSpecs.model';
import {HeroService} from '../domain/hero.service';

@Controller('hero')
export class HeroController {
    constructor(private heroService: HeroService) {}

    @Get('herospecs')
    getHeroSpecs(): HeroSpecs {
        return this.heroService.getHeroSpecs();
    }
}
