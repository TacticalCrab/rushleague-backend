import { Sequelize } from 'sequelize-typescript';
import {UserModel} from '../../user/domain/model/user.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: './database/database.sqlite',
                logging: false
            });

            sequelize.addModels([UserModel]);
            await sequelize.sync();
            return sequelize;
        }
    }
]