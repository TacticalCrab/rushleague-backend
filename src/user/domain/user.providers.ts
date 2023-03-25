import {UserModel} from './model/user.model';

export const userProviders = [
    {
        provide: 'UserModel',
        useValue: UserModel,
    },
];