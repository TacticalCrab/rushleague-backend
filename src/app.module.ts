import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    MatchModule,
    UserModule,
    DatabaseModule,
    AuthModule,
    HeroModule
  ]
})
export class AppModule {}
