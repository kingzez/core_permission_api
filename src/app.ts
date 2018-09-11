import path from 'path'
import { default as express, Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'

import { SERVER_PORT }  from './config'
import { getPassports, createPassport, updatePassport, deletePassport, setRole } from './routes/passport'
import { getRoles, getRolePermissions, createRole, updateRole, setPermission, deleteRole } from './routes/role'
import { createPermission, updatePermission, getPermissions, deletePermission } from './routes/permission'
import { getClients, createClient } from './routes/client'

const app: Application = express()

// Express configuration
app.set("port", process.env.PORT || SERVER_PORT)

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'wesso-secret', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

// health check
app.get('/ping', (req: Request, res: Response) => {
    res.send('pong')
})

/*
 * 用户管理
 * 用户列表
 * 添加用户
 * 编辑用户
 * 删除用户
 * 设置用户角色
 */
app.get('/api/passport', getPassports)
app.post('/api/passport', createPassport)
app.put('/api/passport', updatePassport)
app.delete('/api/passport', deletePassport)
app.post('/api/setRole', setRole)

/*
 * 角色管理
 * 角色列表
 * 添加角色
 * 编辑角色
 * 删除角色
 * 设置角色权限
 * 角色权限列表
 */
app.get('/api/role', getRoles)
app.post('/api/role', createRole)
app.put('/api/role', updateRole)
app.delete('/api/role', deleteRole)
app.post('/api/setPermission', setPermission)
app.get('/api/rolePermission', getRolePermissions)

/*
 * 权限管理
 * 权限列表
 * 添加权限
 * 编辑权限
 * 删除权限
 */
app.get('/api/permission', getPermissions)
app.post('/api/permission', createPermission)
app.put('/api/permission', updatePermission)
app.delete('/api/permission', deletePermission)

app.get('/api/client', getClients)
app.post('/api/client', createClient)


export default app
