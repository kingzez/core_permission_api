import Sequelize from 'sequelize'
import db from '../lib/db'

interface RoleAttributes {
    id?: string,
    name: string,
    status: number,
    isUsed: number,
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
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: function() {
            return 0
        },
    },
    isUsed: {
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: function() {
            return 0
        },
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
