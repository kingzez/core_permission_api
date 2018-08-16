import { Request, Response, RequestHandler } from 'express'
import { default as axios, AxiosResponse, AxiosError } from 'axios'

import { findPassports, updatePassports, findPassportByUsername, findPassportByEmail, deletePassportById, findById } from '../models/passport'
import logger from '../util/logger'
import { OAUTH2_SERVER_HOST } from '../config'
import { pickAndCheck, go } from '../util'

/**
 * GET /api/passport
 * 获取用户列表
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
    let doc = pickAndCheck(req.body, { required: ['id'], options: ['username', 'password', 'email'] })
    let { id, username, email } = req.body
    let [errr, data] = await go(findById(id))
    if (errr) {
        logger.error('findById Error: ', errr)
        return res.send({ status: 'not ok', msg: errr })
    }
    let [err, uname] = await go(findPassportByUsername(username))
    if (err) {
        logger.error('updatePassport findPassportByUsername Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (uname !== null && username !== data.username) {
        return res.send({ status: 'not ok', message: "用户名已被使用"})
    }
    let [erro, uemail] = await go(findPassportByEmail(email))
    if (erro) {
        logger.error('updatePassport findPassportByEmail Error: ', erro)
        return res.send({ status: 'not ok', msg: erro })
    }
    if (uemail !== null && email !== data.email) {
        return res.send({ status: 'not ok', message: "邮箱已被使用"})
    }
    let [error, result] = await go(updatePassports(id, doc))
    if (error) {
        logger.error('updatePassport Error: ', error)
        return res.send({ status: 'not ok', msg: error })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * DELETE /api/passport
 * 批量删除用户
 * @param req
 * @param res
 */
export const deletePassport: RequestHandler = async (req: Request, res: Response) => {
    let { ids } = req.body
    ids = ids.split(",")
    let [err, result] = await go(deletePassportById(ids))
    if (err) {
        logger.error('deletePassport Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}
