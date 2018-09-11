import Sequelize from 'sequelize'
import db from '../lib/db'
import Role from './role'
import Passport from './passport'

interface PassportRoleAttributes {
    passportId: string,
    roleId: string,
    createdAt?: number,
    updatedAt?: number,
}

type PassportRoleInstance = Sequelize.Instance<PassportRoleAttributes> & PassportRoleAttributes

const attributes: SequelizeAttributes<PassportRoleAttributes> = {
    passportId: {
        type: Sequelize.UUID,
        field: 'passportId',
        primaryKey: true,
        references: {
            model: Passport,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
    },
    roleId: {
        type: Sequelize.UUID,
        field: 'roleId',
        primaryKey: true,
        references: {
            model: Role,
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

const PassportRole = db.define<PassportRoleInstance, PassportRoleAttributes>('PassportRoles',
    attributes, {
        tableName: 'passport_role_rel'
    })


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

export async function insertPassportRole(doc: PassportRoleAttributes) {
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
