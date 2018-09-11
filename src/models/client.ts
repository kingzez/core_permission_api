import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'
import Role from './role'

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

const Client = db.define<ClientInstance, ClientAttributes>('Clients', attributes, { tableName: 'client' })

Client.sync({
    force: false
})

export default Client

export async function findByClientId(id: string) {
    let result = await Client.findById(id)

    return result
}

export async function findByClientName(name: string) {
    let result = await Client.findOne({
        where: {
            name
        }
    })

    return result
}

export async function findClients(page: number, size: number) {
    page = page > 0 ? page - 1 : 0
    size = size > 0 ?  size : 10

    let offset = page * size

    let result = await Client.findAndCountAll({
        offset: offset,
        limit: size,
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return result
}

export async function insertClient(client: ClientAttributes) {
    let result = await Client.create(client)
    return result
}
