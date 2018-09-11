import Sequelize from 'sequelize'
import db from '../lib/db'
import Passport from './passport'
import Client from './client'
import Role from './role'

interface PassportClientRoleAttribute {
    passportId: string,
    clientId: string,
    roleId: string,
    createdAt?: number,
    updatedAt?: number,
}

type PassportClientRoleInstance = Sequelize.Instance<PassportClientRoleAttribute> & PassportClientRoleAttribute

const attributes: SequelizeAttributes<PassportClientRoleAttribute> = {
    passportId: {
        type: Sequelize.UUID,
        field: 'passportId',
        primaryKey: true,
        references: {
            model: Passport,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
        }
    },
    clientId: {
        type: Sequelize.UUID,
        field: 'clientId',
        primaryKey: true,
        references: {
            model: Client,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
        }
    },
    roleId: {
        type: Sequelize.UUID,
        field: 'roleId',
        primaryKey: true,
        references: {
            model: Role,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
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

const PassportClientRole = db.define<PassportClientRoleInstance, PassportClientRoleAttribute>('PassportClientRoles',
    attributes, {
        tableName: 'passport_client_role_rel'
    })

PassportClientRole.sync({
    force: false
})

export default PassportClientRole
