import { Request, Response, RequestHandler } from 'express'
import { findClients, findByClientName, insertClient } from '../models/client'
import logger from '../util/logger'
import { pickAndCheck, go } from '../util'
// import { default as PassportClient } from '../models/passport_client_rel'
// import { default as PassportClientRole } from '../models/passport_client_role_rel'


// PassportClient.findById()
// PassportClientRole.findById()

/**
 * GET /api/client
 * 获取平台列表
 * @param req
 * @param res
 */
export const getClients: RequestHandler = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)

    let [err, result] = await go(findClients(page, size))
    if (err) {
        logger.error('findClients Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result })
}

/**
 * POST /api/client
 * 创建平台
 * @param req
 * @param res
 */
export const createClient: RequestHandler = async (req: Request, res: Response) => {
    const doc = pickAndCheck(req.body, { required: ['name', 'clientId', 'clientSecret', 'isTrusted'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, client] = await go(findByClientName(doc.name))
    if (err) {
        logger.error('createClient findByClientName Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    if (client !== null) {
        return res.send({ status: 'ok', msg: '平台名已被使用' })
    }

    var [err, result] = await go(insertClient(doc))
    if (err) {
        logger.error('createClient Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    return res.send({ status: 'ok', msg: 'success', result: result })
}
