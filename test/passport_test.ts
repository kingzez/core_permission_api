import test from 'ava'
import _ from 'lodash'
import { default as Passport, findById, findPassportByUsername, findPassportByEmail, findPassports } from '../src/models/passport'
import logger from '../src/util/logger'


const passport = {
    id: 'c3b23e00-9d36-4a5e-9ca6-17e50c0e0d35',
    username: 'test',
    isDeleted: false,
    password: 'test',
    email: 'test@xiaoyun.com',
}



test.before(async (t) => {
    let value:any = await Passport.create(passport)

    t.is(value.id, passport.id)
})

test('passport findById', async (t) => {
    let value:any = await findById(passport.id)
    logger.debug('passport findById result: ', JSON.stringify(value))

    t.is(value.id, passport.id)
})

test('passport findPassportByUsername', async (t) => {
    let value:any = await findPassportByUsername(passport.username)
    logger.debug('findPassportByUsername result: ', JSON.stringify(value))

    t.is(value.username, passport.username)
})


test('passport findPassportByEmail', async (t) => {
    let value:any = await findPassportByEmail(passport.email)
    logger.debug('findPassportByEmail result: ', JSON.stringify(value))

    t.is(value.email, passport.email)
})


test('passport findPassports', async (t) => {
    const page = 1
    const size = 1
    let value:any = await findPassports(page, size)
    logger.debug('findPassports result: ', value.rows.length ,JSON.stringify(value))

    t.is(value.rows.length, size)
})

test.after(async (t) =>{
    const value = await Passport.destroy({
        where: {
            id: 'c3b23e00-9d36-4a5e-9ca6-17e50c0e0d35'
        }
    })

    t.is(value, 1)
})
