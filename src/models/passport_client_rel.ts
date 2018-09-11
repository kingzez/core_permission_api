import Sequelize from 'sequelize'
import db from '../lib/db'
import Passport from './passport'
import Client from './client'


interface PassportClientAttribute {
    passportId: string,
    clientId: string,
    createdAt?: number,
    updatedAt?: number,
}

type PassportClientInstance = Sequelize.Instance<PassportClientAttribute> & PassportClientAttribute

const attribute: SequelizeAttributes<PassportClientAttribute> = {
    passportId: {
        type: Sequelize.UUID,
        field: 'passportId',
        primaryKey: true,
        references: {
            model: Passport,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    clientId: {
        type: Sequelize.UUID,
        field: 'clientId',
        primaryKey: true,
        references: {
            model: Client,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED
        },
    },
    createdAt: {
        type: Sequelize.BIGINT,
        defaultValue: function() {
            return Date.now()
        }
    },
    updatedAt: {
        type: Sequelize.BIGINT,
        defaultValue: function() {
            return Date.now()
        }
    }
}

const PassportClient = db.define<PassportClientInstance, PassportClientAttribute>('PassportClient',
    attribute, {
        tableName: 'passport_client_rel',
    })

Passport.belongsToMany(Client, { 'through': PassportClient, foreignKey: 'passportId' });
Client.belongsToMany(Passport, { 'through': PassportClient, foreignKey: 'clientId' });


PassportClient.sync({
    force: true
})

export default PassportClient

export async function findPassportCLient(passportId: string, clientId: string) {
    let result = await PassportClient.findOne({
        where: {
            passportId,
            clientId
        }
    })

    return result
}
