import path from 'path'
import { default as express, Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'

import { SERVER_PORT }  from './config'

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
app.get('/api/passport')
app.post('/api/passport')
app.put('/api/passport')
app.delete('/api/passport')
app.post('/api/setrole')

/*
 * 角色管理
 * 角色列表
 * 添加角色
 * 编辑角色
 * 删除角色
 * 设置角色权限
 */
app.get('/api/role')
app.post('/api/role')
app.put('/api/role')
app.delete('/api/role')
app.post('/api/setpermission')

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
