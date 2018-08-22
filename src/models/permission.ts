import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'

interface PermissionAttributes {
    id?: string,
    name: string,
    code: string,
    desc?: string,
    status?: boolean,
    createdAt?: number,
    updatedAt?: number,
}

type PermissionInstance = Sequelize.Instance<PermissionAttributes> & PermissionAttributes

const attributes: SequelizeAttributes<PermissionAttributes> = {
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
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    desc: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

const Permission = db.define<PermissionInstance, PermissionAttributes>('Permissions', attributes, { tableName: 'Permission' })

Permission.sync({
    force: false
})

export default Permission

export async function findPermissions(page: number, size: number) {
    page = page > 0 ? page - 1 : 0
    size = size > 0 ?  size : 10

    let offset = page * size

    let result = await Permission.findAndCountAll({
        offset: offset,
        limit: size,
        order: [
            ['createdAt', 'DESC']
        ]
    })

    return result
}

export async function findByPermissionId(id: string) {
    let result = await Permission.findById(id)

    return result
}

export async function findByCode(code: string) {
    let result = await Permission.findOne({
        where: {
            code
        }
    })

    return result
}

export async function findByDesc(desc: string) {
    let result = await Permission.findOne({
        where: {
            desc
        }
    })

    return result
}

export async function insertPermission(doc: any) {
    let result = await Permission.create(doc)

    return result
}

export async function updatePermissions(id: string, doc: any) {
    let result = await Permission.update(
        doc,
        {
            where: {
                id: [id]
            }
        }
    )

    return result
}

export async function deletePermissionById(id: string) {
    let result = await Permission.destroy({
        where: {
            id: [id]
        }
    })

    return result
}
