import { Module } from '@nestjs/common';
import { MatchController } from './application/match.controller';
import { MatchService } from './domain/match.service';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [MatchController],
  providers: [MatchService]
})
export class MatchModule {}
