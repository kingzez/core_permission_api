import crypto from 'crypto'
import Sequelize from 'sequelize'
import db from '../lib/db'
import v4 from 'uuid'

export interface PassportAttributes {
    id?: string,
    username: string,
    password: string,
    email: string,
    createdAt?: number,
    updatedAt?: number,
}

type PassportInstance = Sequelize.Instance<PassportAttributes> & PassportAttributes

const attributes: SequelizeAttributes<PassportAttributes> = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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

const Passport = db.define<PassportInstance, PassportAttributes>('Passports', attributes, { tableName: 'Passport' })

Passport.sync({
    force: false
})

export default Passport
