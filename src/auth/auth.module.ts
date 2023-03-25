import { Module } from '@nestjs/common';
import { AuthService } from './domain/auth.service';
import {UserModule} from '../user/user.module';
import { AuthController } from './application/auth.controller';
import {AuthGuard} from './application/guards/auth.guard';

@Module({
  imports: [UserModule],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
  exports: [AuthGuard]
})
export class AuthModule {}
