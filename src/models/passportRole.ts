import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'
import Role from './role'
import Passport from './passport'

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
        defaultValue: function() {
            return v4()
        }
    },
    passportId: {
        type: Sequelize.UUID,
        field: 'user_id',
        primaryKey: true,
        references: {
            model: 'Passport',
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    roleId: {
        type: Sequelize.UUID,
        field: 'role_id',
        primaryKey: true,
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


Role.belongsToMany(Passport, { 'through': PassportRole, foreignKey: 'roleId' })
Passport.belongsToMany(Role, { 'through': PassportRole, foreignKey: 'passportId' })

PassportRole.sync({
    force: false
})

export default PassportRole

export async function findPassportRole(passportId: string, roleId: string) {
    let result = await PassportRole.findOne({
        where: {
            passportId,
            roleId
        }
    })

    return result
}

export async function insertPassportRole(doc: any) {
    let result = await PassportRole.create(doc)

    return result
}

export async function deletePassportRoles(passportId: string) {
    let result = await PassportRole.destroy({
        where: {
            passportId: [passportId]
        }
    })

    return result
}

export async function deletePassportRole(roleId: string) {
    let result = await PassportRole.destroy({
        where: {
            roleId: [roleId]
        }
    })

    return result
}