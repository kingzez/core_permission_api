import { Request, Response, RequestHandler } from 'express'

import { findByCode, findByDesc, insertPermission, updatePermissions, findByPermissionId, findPermissions, deletePermissionById } from '../models/permission'
import { deleteRolePermissionByPermissionId } from '../models/rolePermission'
import logger from '../util/logger'
import { pickAndCheck, go } from '../util'

/**
 * POST /api/permission
 * 添加权限
 * @param req
 * @param res
 */
export const createPermission: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['name', 'code', 'desc'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, data] = await go(findByCode(doc.code))
    if (err) {
        logger.error('createPermission findByCode Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (data !== null) {
        return res.send({ status: 'not ok', msg: "权限的code编号已被使用"})
    }

    var [err, descData] = await go(findByDesc(doc.desc))
    if (err) {
        logger.error('createPermission findByDesc Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (descData !== null) {
        return res.send({ status: 'not ok', msg: "权限的desc权限已被使用"})
    }

    var [err, result] = await go(insertPermission(doc))
    if (err) {
        logger.error('createPermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * PUT /api/permission
 * 更新权限
 * @param req
 * @param res
 */
export const updatePermission: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['id'], options: ['name', 'desc', 'status'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, idData] = await go(findByPermissionId(doc.id))
    if (err) {
        logger.error('updatePermission findByPermissionId Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    var [err, descData] = await go(findByDesc(doc.desc))
    if (err) {
        logger.error('updatePermission findByDesc Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (descData !== null && doc.desc !== idData.desc) {
        return res.send({ status: 'not ok', msg: "权限的desc权限已被使用"})
    }

    var [err, result] = await go(updatePermissions(doc.id, doc))
    if (err) {
        logger.error('updatePermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}


/**
 * GET /api/permission
 * 获取权限列表
 * @param req
 * @param res
 */
export const getPermissions: RequestHandler = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)

    let [err, result] = await go(findPermissions(page, size))
    if (err) {
        logger.error('getPermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result })
}

/**
 * DELETE /api/permission
 * 删除权限
 * @param req
 * @param res
 */
export const deletePermission: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['permissionId'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    //如果权限已经被角色使用，要先将角色权限表中的数据删除
    var [err, data] = await go(deleteRolePermissionByPermissionId(doc.permissionId))
    if (err) {
        logger.error('deletePermission deleteRolePermissionByPermissionId Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    var [err, result] = await go(deletePermissionById(doc.permissionId))
    if (err) {
        logger.error('deletePermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}