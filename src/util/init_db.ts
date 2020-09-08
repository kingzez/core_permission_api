import { v4 as uuidv4 } from 'uuid'

import logger from './logger'
import Passport from '../models/passport'
import Client from '../models/client'
import Role from '../models/role'
import Permission from '../models/permission'

const now:number = Date.now();

function exit() {
    setTimeout(() => {
        return process.exit()
    }, 2000);
}

// init Passport
(async() => {
    let admin = await Passport.create({
        id: uuidv4(),
        username: 'admin',
        password: 'admin',
        email: 'admin@gmail.com',
        createdAt: now,
        updatedAt: now,
    }).catch((err) => logger.debug(err))
    if (admin) logger.debug('created: ' + JSON.stringify(admin))
})();


// init Client
(async() => {
    let rmk = await Client.create({
        id: uuidv4(),
        name: 'rmk',
        clientId: 'rmk',
        clientSecret: 'rmk',
        isTrusted: true,
        createdAt: now,
        updatedAt: now,
    }).catch((err) => logger.debug(err))
    if (rmk) logger.debug('created: ' + JSON.stringify(rmk))

})();

// init Role
(async() => {
    let role = await Role.create({
        id: uuidv4(),
        name: '超级管理员',
        clientId: uuidv4(),
        createdAt: now,
        updatedAt: now,
    }).catch((err) => logger.debug(err))
    if (role) logger.debug('created: ' + JSON.stringify(role))
})();

// init Permission
(async() => {
    let permission = await Permission.create({
        id: uuidv4(),
        name: '管理系统',
        code: 'MS100',
        desc: '管理整个系统',
        createdAt: now,
        updatedAt: now,
    }).catch((err) => logger.debug(err))
    if (permission) logger.debug('created: ' + JSON.stringify(permission))
    exit()
})();
