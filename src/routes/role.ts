import { Request, Response, RequestHandler } from 'express'

import { findRoles, insertRole } from '../models/role'
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
 * POST /api/setRole
 * 设置用户角色
 * @param req
 * @param res
 */
export const setRole: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['name'], options: ['status', 'isUsed', 'parent', 'children'] })
    let [err, result] = await go(insertRole(doc))
    if (err) {
        logger.error('setRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}


