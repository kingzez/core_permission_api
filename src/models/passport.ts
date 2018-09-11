import crypto from 'crypto'
import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'
import Role from './role';

export interface PassportAttributes {
    id?: string,
    username: string,
    password: string,
    email: string,
    isDeleted?: boolean,
    createdAt?: number,
    updatedAt?: number,
}

type PassportInstance = Sequelize.Instance<PassportAttributes> & PassportAttributes

const attributes: SequelizeAttributes<PassportAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: function() {
            return v4()
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
            let salt = ',tom'
            let hash = crypto.createHmac('md5', salt)
                             .update(val)
                             .digest('hex')
            this.setDataValue('password', hash)
        }

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: function() {
            return false
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

const Passport = db.define<PassportInstance, PassportAttributes>('Passports', attributes, { tableName: 'passport' })

Passport.sync({
    force: false
})

export default Passport

export async function findById(id: string) {
    let result = await Passport.findById(id)

    return result
}

export async function findPassports(page: number, size: number) {
    page = page > 0 ? page - 1 : 0
    size = size > 0 ? size : 10

    let offset = page * size
    let count = await Passport.count({
        where: { isDeleted: false }
    })

    let result = await Passport.findAndCountAll({
        offset: offset,
        limit: size,
        where: { isDeleted: false },
        order: [
            ['createdAt', 'DESC']
        ],
        include: [{ model: Role }]

    })

    result.count = count

    return result
}

export async function updatePassports(id: string, qs: any) {
    let result = await Passport.update(
        qs,
        {
            where: {
                id: [id]
            }
        }
    )

    return result
}

export async function findPassportByUsername(username: string) {
    let result = await Passport.findOne({
        where: {
            username
        }
    })

    return result
}

export async function findPassportByEmail(email: string) {
    let result = await Passport.findOne({
        where: {
            email
        }
    })

    return result
}

export async function deletePassportById(id: string) {
    let result = await Passport.update({
        isDeleted: true
    }, {
        where: {
            id
        }
    })

    return result
}

