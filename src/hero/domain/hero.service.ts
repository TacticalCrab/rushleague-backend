import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { HeroSpecs } from '../application/model/HeroSpecs.model';


@Injectable()
export class HeroService {
    getHeroSpecs(): HeroSpecs {
        return JSON.parse(fs.readFileSync('./src/hero/domain/heroes-specs.json').toString());
    }
}
