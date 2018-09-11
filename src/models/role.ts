import Sequelize from 'sequelize'
import v4 from 'uuid'

import db from '../lib/db'
import logger from '../util/logger'
import Permission from './permission'
import Client, { ClientAttributes } from './client'

interface RoleAttributes {
    id?: string,
    name: string,
    clientId: string,
    status?: boolean,
    isUsed?: boolean,
    children?: string,
    createdAt?: number,
    updatedAt?: number,
    client?: ClientAttributes
}

type RoleInstance = Sequelize.Instance<RoleAttributes> & RoleAttributes

const attributes: SequelizeAttributes<RoleAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: function() {
            return v4()
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isUsed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    children: {
        type: Sequelize.STRING,
    },
    clientId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: Client,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
        }
    },
    createdAt: {
        type: Sequelize.BIGINT,
        defaultValue: function() {
            return Date.now()
        },
    },
    updatedAt: {
        type: Sequelize.BIGINT,
        defaultValue: function() {
            return Date.now()
        },
    }
}

const Role = db.define<RoleInstance, RoleAttributes>('Roles', attributes, { tableName: 'role' })

Client.hasMany(Role, { foreignKey: 'clientId', sourceKey: 'id' }); // 将会添加 clientId 到 Role

Role.sync({
    force: false
})

export default Role

export async function findById(id: string) {
    let result = await Role.findById(id)
    return result
}

export async function findRoles(page: number, size: number) {
    page = page > 0 ? page - 1 : 0
    size = size > 0 ?  size : 10

    let offset = page * size

    let result = await Role.findAndCountAll({
        offset: offset,
        limit: size,
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return result
}

export async function findRolePermissions(page: number, size: number) {
    page = page > 0 ? page - 1 : 0
    size = size > 0 ?  size : 10

    let offset = page * size
    let count = await Role.count()

    let result = await Role.findAndCountAll({
        offset: offset,
        limit: size,
        order: [
            ['createdAt', 'DESC']
        ],
        include: [{ model: Permission }]
    })
    result.count = count

    return result
}
export async function insertRole(doc: RoleAttributes) {
    let result = await Role.create(doc)

    return result
}

export async function updateRoles(id: string, doc: RoleAttributes) {
    let result = await Role.update(
        doc,
        {
            where: {
                id: [id]
            }
        }
    )

    return result
}

export async function findByName(name: string) {
    let result = await Role.findOne({
        where: {
            name
        }
    })

    return result
}

export async function findByNameAndClientId(name: string, clientId: string) {
    let result = await Role.findOne({
        where: {
            name,
            clientId
        }
    })

    return result
}

export async function findByRoleId(id: string) {
    let result = await Role.findOne({
        where: {
            id
        }
    })

    return result
}

export async function deleteRoleById(id: string) {
    let result = await Role.destroy({
        where: {
            id: [id]
        }
    })

    return result
}

export async function updateRoleIsUsed(id: string) {
    let result = await Role.update({
        isUsed: true
    }, {
        where: {
            id
        }
    })

    return result
}

