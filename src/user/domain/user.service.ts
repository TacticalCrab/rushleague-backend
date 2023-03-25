import {Inject, Injectable} from '@nestjs/common';
import {UserModel} from './model/user.model';

@Injectable()
export class UserService {
    constructor(@Inject('UserModel') private userModel: typeof UserModel ) {}

    async findOne(username: string): Promise<UserModel | null> {
        return await this.userModel.findOne({
            where: {
                login: username
            }
        });
    }
}
