import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'

export interface ClientAttributes {
    id: string,
    name: string,
    clientId: string,
    clientSecret: string,
    isTrusted: boolean,
    createdAt?: number,
    updatedAt?: number,
}

type ClientInstance = Sequelize.Instance<ClientAttributes> & ClientAttributes

const attributes: SequelizeAttributes<ClientAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    clientId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    clientSecret: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isTrusted: {
        type: Sequelize.BOOLEAN,
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
    },
}

const Client = db.define<ClientInstance, ClientAttributes>('Client', attributes, { tableName: 'Client' })

export default Client
