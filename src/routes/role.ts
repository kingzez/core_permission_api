import { Request, Response, RequestHandler } from 'express'

import { findRoles } from '../models/role'
import logger from '../util/logger'

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

    let result = await findRoles(page, size).catch((err: Error) => {
        logger.error('findRoles Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    })

    res.send({ status: 'ok', msg: 'success', result: result })
}
