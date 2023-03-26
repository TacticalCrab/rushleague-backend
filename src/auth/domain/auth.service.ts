import {Inject, Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {UserService} from '../../user/domain/user.service';
import * as crypto from 'crypto';
import {Sequelize} from 'sequelize-typescript';
import {UserModel} from '../../user/domain/model/user.model';
import { config } from 'dotenv';

@Injectable()
export class AuthService implements OnApplicationBootstrap {
    constructor(
        private userService: UserService,
        @Inject('UserModel') private userModel: typeof UserModel
    ) {
    }

    async authUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        const hash = crypto.pbkdf2Sync(password, user.salt, 8, 64, `sha512`).toString(`hex`);

        if (!(user.hash === hash)) {
            return null
        }

        return user;
    }

    async onApplicationBootstrap() {
        config();

        const admin = await this.userService.findOne(process.env.LOGIN);

        if (admin) {
            return;
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const user = await this.userModel.create({
            login: process.env.LOGIN,
            hash: process.env.PASSWORD,
            salt
        });

        await user.save();
    }
}
