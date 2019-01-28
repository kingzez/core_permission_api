import querystring from 'querystring'
import { Request, Response } from 'express'
import axios from 'axios'
import request from 'request'
import { OAUTH2_SERVER_HOST, OAUTH2_CONFIG } from '../config'
import logger from '../util/logger'

export default function auth(req: Request, res: Response) {
    logger.debug('req.body', req.body)
    const { clientId, clientSecret } = OAUTH2_CONFIG
    const { code, redirectUri } = req.body
    const form = {
        code: code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    }

    console.log(clientId)
    request({
        method: 'post',
        url: `${OAUTH2_SERVER_HOST}/oauth/token`,
        form: form,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }, function (err, response, body) {
        console.log(response.body)
        try {
            if (!err && response.statusCode === 200) {
                const responseJson = JSON.parse(body)
                res.json(responseJson)
            } else {
                res.status(response.statusCode).json(err)
            }
        } catch (e) {
            res.status(500).json(err || e)
        }
    })

    // axios({
    //     method: 'POST',
    //     url: `${OAUTH2_SERVER_HOST}/oauth/token`,
    //     data: querystring.stringify(form),
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // }).then(response => {
    //     logger.debug('response: ', JSON.parse(JSON.stringify(response)))
    //     res.send(response.data)
    // }).catch(e => {
    //     logger.debug('err: ', e.message)
    //     res.send({ status: 'not ok', success: false, msg: e })
    // })
}
