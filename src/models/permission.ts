import Sequelize from 'sequelize'
import db from '../lib/db'

interface PermissionAttributes {
    id?: string,
    name: string,
    code: string,
    desc?: string,
    status: number,
    createdAt?: number,
    updatedAt?: number,
}

type PermissionInstance = Sequelize.Instance<PermissionAttributes> & PermissionAttributes

const attributes: SequelizeAttributes<PermissionAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
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
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: function() {
            return 1
        }
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
