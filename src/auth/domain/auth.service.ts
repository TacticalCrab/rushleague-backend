import { Injectable } from '@nestjs/common';
import {UserService} from '../../user/domain/user.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    async authUser(username: string, password: string): Promise<any> {
        console.log(username)
        const user = await this.userService.findOne(username);

        const hash = crypto.pbkdf2Sync(password, user.salt, 8, 64, `sha512`).toString(`hex`);

        if (!(user.hash === hash)) {
            return null
        }

        return user;
    }
}
