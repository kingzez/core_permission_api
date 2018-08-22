import Sequelize from 'sequelize'
import v4 from 'uuid'

import db from '../lib/db'
import logger from '../util/logger'

interface RoleAttributes {
    id?: string,
    name: string,
    status?: boolean,
    isUsed?: boolean,
    parent?: string,
    children?: string,
    createdAt?: number,
    updatedAt?: number,
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
        unique: true,
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
    parent: {
        type: Sequelize.STRING,
    },
    children: {
        type: Sequelize.STRING,
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

const Role = db.define<RoleInstance, RoleAttributes>('Roles', attributes, { tableName: 'Role' })

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

export async function insertRole(doc: any) {
    let result = await Role.create(doc)

    return result
}

export async function updateRoles(id: string, doc: any) {
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

