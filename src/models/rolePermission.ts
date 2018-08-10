import Sequelize from 'sequelize'
import db from '../lib/db'

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
