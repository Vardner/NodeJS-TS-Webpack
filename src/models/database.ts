import {DB_CONFIG} from '@root/config';
import {Model, Sequelize} from 'sequelize';
import {UserModelInitializer, User} from '@root/models';


type IInnerModel = typeof Model & {associate (...rest: any): any}

interface IModels {
    User: typeof User;
    [key: string]: any;
}

const env = process.env.NODE_ENV || 'development';
const myConfig: any = DB_CONFIG[env];

let sequelize;
if (myConfig.use_env_variable) {
    // @ts-ignore
    sequelize = new Sequelize(process.env[myConfig.use_env_variable], myConfig);
} else {
    sequelize = new Sequelize(myConfig.database, myConfig.username, myConfig.password, myConfig);
}

export const DATABASE: { sequelize: Sequelize, models: IModels} = {
    sequelize: sequelize,
    models: {} as any
};
export const modelsInitializers = [UserModelInitializer];
modelsInitializers.forEach(initializer => {
    const model = initializer(sequelize);
    DATABASE.models[model.name] = model;
});

Object.values(DATABASE.models).forEach(model => {
    if ('associate' in model) {
        model.associate(DATABASE);
    }
});
