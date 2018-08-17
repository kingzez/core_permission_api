import { Request, Response, RequestHandler } from 'express'

import { findRoles, insertRole, updateRoles, findByName } from '../models/role'
import logger from '../util/logger'
import { pickAndCheck, go } from '../util'

/**
 * GET /api/role
 * 获取角色列表
 * @param req
 * @param res
 */
export const getRoles: RequestHandler = async (req: Request, res: Response) => {
    // TODO need optimize
    // let { page, size } = req.query
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)

    let [err, result] = await go(findRoles(page, size))
    if (err) {
        logger.error('findRoles Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result })
}

/**
 * POST /api/role
 * 添加角色
 * @param req
 * @param res
 */
export const createRole: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['name'], options: ['status', 'isUsed', 'parent', 'children'] })
    var [err, uname] = await go(findByName(doc.name))
    if (uname !== null) {
        return res.send({ status: 'not ok', message: "角色名已被使用"})
    }
    var [err, result] = await go(insertRole(doc))
    if (err) {
        logger.error('createRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * PUT /api/role
 * 编辑角色
 * @param req
 * @param res
 */
export const updateRole: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['id', 'name'], options: ['status', 'isUsed', 'parent', 'children'] })
    var [err, uname] = await go(findByName(doc.name))
    if (uname !== null) {
        return res.send({ status: 'not ok', message: "角色名已被使用"})
    }
    var [err, result] = await go(updateRoles(doc.id, doc))
    if (err) {
        logger.error('updateRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}


