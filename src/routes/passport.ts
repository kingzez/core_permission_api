import { Request, Response, RequestHandler } from 'express'
import { default as axios, AxiosResponse, AxiosError } from 'axios'

import { findPassports } from '../models/passport'
import logger from '../util/logger'
import { OAUTH2_SERVER_HOST } from '../config'
import { pickAndCheck } from '../util/util'

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

    let result = await findPassports(page, size).catch((err: Error) => {
        logger.error('findPassports Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    })

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
