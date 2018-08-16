import path from 'path'
import { default as express, Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'

import { SERVER_PORT }  from './config'
import { getPassports, createPassport, updatePassport, deletePassport } from './routes/passport'
import { getRoles, setRole } from './routes/role'

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
 */
app.get('/api/role', getRoles)
app.post('/api/role')
app.put('/api/role')
app.delete('/api/role')
app.post('/api/setPermission')

/*
 * 权限管理
 * 权限列表
 * 添加权限
 * 编辑权限
 * 删除权限
 */
app.get('/api/permission')
app.post('/api/permission')
app.put('/api/permission')
app.delete('/api/permission')


export default app
