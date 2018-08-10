import Sequelize from 'sequelize'
import db from '../lib/db'

interface PassportRoleAttributes {
    id?: string,
    passportId: string,
    roleId: string,
    createdAt?: number,
    updatedAt?: number,
}

type PassportRoleInstance = Sequelize.Instance<PassportRoleAttributes> & PassportRoleAttributes

const attributes: SequelizeAttributes<PassportRoleAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    passportId: {
        type: Sequelize.UUID,
        references: {
            model: 'Passport',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    roleId: {
        type: Sequelize.UUID,
        references: {
            model: 'Role',
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

const PassportRole = db.define<PassportRoleInstance, PassportRoleAttributes>('PassportRoles', attributes, { tableName: 'PassportRole' })

PassportRole.sync({
    force: false
})

export default PassportRole
