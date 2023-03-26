import {Module, OnModuleInit} from '@nestjs/common';
import * as fs from 'fs';
import * as heroes from './infrastructure/heronames.json';
import { HeroSpecs } from './application/model/HeroSpecs.model';
import { HeroController } from './application/hero.controller';
import { HeroService } from './domain/hero.service';

@Module({
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule implements OnModuleInit{
    onModuleInit() {
        const names = heroes.names;
        const heroSpecs: HeroSpecs = {}

        names.forEach((name: string) => {
            heroSpecs[name.replace(' ', '').toLowerCase()] = {
                name: name.charAt(0).toUpperCase() + name.slice(1),
                icon: null,
                splash: null
            }
        });

        const fileNames = fs.readdirSync('./src/public/api/assets/hero');
        fileNames.forEach((fileName) => {
            const lowerFileName = fileName.toLowerCase();

            Object.entries(heroSpecs).forEach(([name, specs]) => {
                if (!lowerFileName.includes(name)) { return }

                if (lowerFileName.includes('icon')) {
                    specs.icon = fileName;
                } else if (lowerFileName.includes('splash')) {
                    specs.splash = fileName
                } else {
                    throw new Error('File matched, but isn\'t and icon or splash' + fileName);
                }
            });
        });

        // set default specs
        heroSpecs.default = { name: "Default", icon: 'Default_icon.png', splash: null }

        fs.writeFileSync('./src/hero/domain/heroes-specs.json', JSON.stringify(heroSpecs));
    }
}
