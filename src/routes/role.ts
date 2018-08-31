import { Request, Response, RequestHandler } from 'express'

import { findRoles, findRolePermissions, insertRole, updateRoles, findByName, deleteRoleById } from '../models/role'
import { findRolePermission, insertRolePermission, deleteRolePermission } from '../models/rolePermission'
import logger from '../util/logger'
import { pickAndCheck, go } from '../util'
import { deletePassportRole } from '../models/passportRole';

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
 * GET /api/rolePermission
 * 获取角色权限列表
 * @param req
 * @param res
 */
export const getRolePermissions: RequestHandler = async (req: Request, res: Response) => {
    // TODO need optimize
    // let { page, size } = req.query
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)

    let [err, result] = await go(findRolePermissions(page, size))
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
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, uname] = await go(findByName(doc.name))
    if (err) {
        logger.error('createRole findByName Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }
    if (uname !== null) {
        return res.send({ status: 'not ok', msg: "角色名已被使用"})
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
    let doc = pickAndCheck(req.body, { required: ['id'], options: ['status', 'isUsed', 'parent', 'children'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    let [err, result] = await go(updateRoles(doc.id, doc))
    if (err) {
        logger.error('updateRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}

/**
 * POST /api/setPermission
 * 设置角色权限
 * @param req
 * @param res
 */
export const setPermission: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['roleId', 'permissionId'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    var [err, data] = await go(findRolePermission(doc.roleId, doc.permissionId))
    if (data !== null) {
        return res.send({ status: 'not ok', msg: "你当前已经拥有该权限"})
    }

    var [err, result] = await go(insertRolePermission(doc))
    if (err) {
        logger.error('setPermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}


/**
 * DELETE /api/role
 * 删除角色
 * @param req
 * @param res
 */
export const deleteRole: RequestHandler = async (req: Request, res: Response) => {
    let doc = pickAndCheck(req.body, { required: ['roleId'] })
    if (!doc) return res.send({ status: 400, msg: 'required request body is missing' })

    //该角色如果已经被用户使用，要先将用户角色表的数据删除
    var [err, rdata] = await go(deletePassportRole(doc.roleId))
    if (err) {
        logger.error('deleteRole deletePassportRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    // 该角色如果已经分配权限，要先将角色权限表中的数据删除
    var [err, data] = await go(deleteRolePermission(doc.roleId))
    if (err) {
        logger.error('deleteRole deleteRolePermission Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    var [err, result] = await go(deleteRoleById(doc.roleId))
    if (err) {
        logger.error('deleteRole Error: ', err)
        return res.send({ status: 'not ok', msg: err })
    }

    res.send({ status: 'ok', msg: 'success', result: result})
}