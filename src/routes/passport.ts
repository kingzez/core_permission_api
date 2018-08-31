import { Request, Response, RequestHandler } from 'express'
import { default as axios, AxiosResponse, AxiosError } from 'axios'

import { findPassports, updatePassports, deletePassportById } from '../models/passport'
import { insertPassportRole, findPassportRole, deletePassportRoles } from '../models/passportRole'
import { updateRoleIsUsed } from '../models/role'
import logger from '../util/logger'
import { OAUTH2_SERVER_HOST } from '../config'
import { pickAndCheck, go } from '../util'

/**
 * GET /api/passport
 * 获取用户角色列表
 * @param page: number
 * @param size: number
 */
export const getPassports: RequestHandler = async (req: Request, res: Response) => {
    // TODO need optimize
    // let { page, size } = req.query
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)

    let [err, result] = await go(findPassports(page, size))
    if (err) {
        logger.error('findPassports Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}


/**
 * POST /api/passport
 * 添加用户
 * 调用 core_oauth2_server api
 * /api/userRegist
 * @param req
 * @param res
 */
export const createPassport: RequestHandler = async (req: Request, res: Response) => {
    const doc = pickAndCheck(req.body, { required: ['username', 'password', 'email'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    axios.post(`${OAUTH2_SERVER_HOST}/api/userRegist`, doc)
        .then((axiosRes: AxiosResponse) => {
            logger.debug('create passport result:\n', axiosRes.data)
            if (!axiosRes.data.user) return res.send({ status: 'not ok', msg: axiosRes.data.message })

            return res.send({ status: 'ok', msg: 'success', result: axiosRes.data.user })
        })
        .catch((axiosErr: AxiosError) => res.send({ status: 'not ok', msg: axiosErr}))
}

/**
 * PUT /api/passport
 * 更新用户
 * @param req
 * @param res
 */
export const updatePassport: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['id'], options: ['password'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    let [err, result] = await go(updatePassports(doc.id, doc))
    if (err) {
        logger.error('updatePassport  Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * DELETE /api/passport
 * 删除用户
 * @param req
 * @param res
 */
export const deletePassport: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['id'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    //删除该用户已经分配角色，将用户角色表中的数据删除
    var [err, data] = await go(deletePassportRoles(doc.id))
    if (err) {
        logger.error('deletePassport deletePassportRoles Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    //将用户表中的isDelete设置为ture
    var [err, result] = await go(deletePassportById(doc.id))
    if (err) {
        logger.error('deletePassport Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * POST /api/setRole
 * 设置用户角色
 * @param req
 * @param res
 */
export const setRole: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['passportId', 'roleId'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, data] = await go(findPassportRole(doc.passportId, doc.roleId))
    if (err) {
        logger.error('setRole findPassportRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (data !== null) {
        return res.send({ status: 'not ok', msg: "你当前已经拥有该角色"})
    }

    var [err, result] = await go(insertPassportRole(doc))
    if (err) {
        logger.error('setRole insertPassportRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    var [err, updateRole] = await go(updateRoleIsUsed(doc.roleId))
    if (err) {
        logger.error('setRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}