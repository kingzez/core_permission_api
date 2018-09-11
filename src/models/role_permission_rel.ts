import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from "uuid"
import Permission from './permission'
import Role from './role'

interface RolePermissionAttributes {
    roleId: string,
    permissionId: string,
    createdAt?: number,
    updatedAt?: number,
}

type RolePermissionInstance = Sequelize.Instance<RolePermissionAttributes> & RolePermissionAttributes

const attributes: SequelizeAttributes<RolePermissionAttributes> = {
    roleId: {
        type: Sequelize.UUID,
        field: 'roleId',
        primaryKey: true,
        references: {
            model: Role,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        },
    },
    permissionId: {
        type: Sequelize.UUID,
        field: 'permissionId',
        primaryKey: true,
        references: {
            model: Permission,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
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

const RolePermission = db.define<RolePermissionInstance, RolePermissionAttributes>('RolePermissions',
    attributes, {
        tableName: 'role_permission_rel'
    })

Role.belongsToMany(Permission, { 'through': RolePermission, foreignKey: 'roleId' })
Permission.belongsToMany(Role, { 'through': RolePermission, foreignKey: 'permissionId' })

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

export async function insertRolePermission(doc: RolePermissionAttributes) {
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
            roleId: [roleId]
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

