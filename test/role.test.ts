import test from 'ava'
import _ from 'lodash'
import { findByNameAndClientId } from '../src/models/role'
import logger from '../src/util/logger'

const role = {
	"name": "超级12管理员",
	"clientId": "0562a632-cde0-42b0-b115-25443dec1757"
}

test('role findByNameAndClientId', async (t) => {
    let value: any = await findByNameAndClientId(role.name, role.clientId)
    logger.debug('findByNameAndClientId', JSON.parse(JSON.stringify(value)))

    t.is(value.name, role.name)
})
