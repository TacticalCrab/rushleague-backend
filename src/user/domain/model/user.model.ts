import {DataTypes} from 'sequelize';
import * as crypto from 'crypto';
import {
    AllowNull,
    Column,
    PrimaryKey,
    Table,
    Unique,
    Model,
    BeforeCreate,
    UpdatedAt
} from 'sequelize-typescript';


@Table({ tableName: "Users"})
export class UserModel extends Model {
    @PrimaryKey
    @Unique
    @Column(DataTypes.STRING)
    id: string;

    @Unique
    @AllowNull(false)
    @Column(DataTypes.STRING)
    login: string;

    @AllowNull(false)
    @Column(DataTypes.STRING)
    hash: string;

    @Column(DataTypes.STRING)
    salt: string;

    @UpdatedAt
    updatedAt: Date;

    @BeforeCreate
    static hashPassword(instance: UserModel) {
        const salt = crypto.randomBytes(16).toString('hex');
        instance.salt = salt;
        instance.hash = crypto.pbkdf2Sync(instance.hash,
            salt,
            8,
            64,
            `sha512`
        ).toString(`hex`);
    }
}