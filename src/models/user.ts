import {CreateOptions, DataTypes, InstanceUpdateOptions, Model, Sequelize} from 'sequelize';
import bcrypt from 'bcrypt';
import {HookReturn} from 'sequelize/types/hooks';

export interface IUserModelAttributes {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    gender: string;
    avatar: any;
    createdAt: string;
    updatedAt: string;
}

export type TUserModelAttributes = keyof IUserModelAttributes;

export class User extends Model<IUserModelAttributes, any> implements IUserModelAttributes{
    public id: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public gender: string;
    public avatar: any;
    public createdAt: string;
    public updatedAt: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
        // define association here
    }

    static async hashPassword (password: string) {
        return bcrypt.hash(password, 10);
    }
}

export const UserModelInitializer = (sequelize: Sequelize) => {
    User.init(
        // @ts-ignore
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.STRING,
            avatar: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'User',
            hooks: {
                async beforeUpdate (instance: User, options: InstanceUpdateOptions<IUserModelAttributes>): HookReturn {
                    console.log('before update');
                    if (instance.changed('password')) {
                        instance.password = await User.hashPassword(instance.password);
                    }
                },
                async beforeCreate (attributes: User, options: CreateOptions<IUserModelAttributes>): HookReturn {
                    console.log('before create');
                    attributes.password = await User.hashPassword(attributes.password);
                }
            }
        }
    );

    console.log()

    return User;
}


