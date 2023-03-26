import { Module } from '@nestjs/common';
import {UserService} from './domain/user.service';
import {userProviders} from './domain/user.providers';

@Module({
    providers: [UserService, ...userProviders],
    exports: [UserService, ...userProviders]
})
export class UserModule {}
