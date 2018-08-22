import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from "uuid"

interface RolePermissionAttributes {
    id?: string,
    roleId: string,
    permissionId: string,
    createdAt?: number,
    updatedAt?: number,
}

type RolePermissionInstance = Sequelize.Instance<RolePermissionAttributes> & RolePermissionAttributes

const attributes: SequelizeAttributes<RolePermissionAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: function() {
            return v4()
        }
    },
    roleId: {
        type: Sequelize.UUID,
        references: {
            model: 'Role',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    permissionId: {
        type: Sequelize.UUID,
        references: {
            model: 'Permission',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
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

const RolePermission = db.define<RolePermissionInstance, RolePermissionAttributes>('RolePermissions', attributes, { tableName: 'RolePermission' })

RolePermission.sync({
    force: false
})

export default RolePermission

export async function findRolePermission(roleId: string, permissionId: string) {
    let result = await RolePermission.findOne({
        where: {
            roleId,
            permissionId
        }
    })

    return result
}

export async function insertRolePermission(doc: any) {
    let result = await RolePermission.create(doc)

    return result
}

export async function findRolePermissionById(roleId: string) {
    let result = await RolePermission.findOne({
        where: {
            roleId
        }
    })

    return result
}

export async function deleteRolePermission(roleId: string) {
    let result = await RolePermission.destroy({
        where: {
            id: [roleId]
        }
    })

    return result
}

export async function findRolePermissionByPermissionId(permissionId: string) {
    let result = await RolePermission.findOne({
        where: {
            permissionId
        }
    })

    return result
}

export async function deleteRolePermissionByPermissionId(permissionId: string) {
    let result = await RolePermission.destroy({
        where: {
            permissionId: [permissionId]
        }
    })

    return result
}

