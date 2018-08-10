import Sequelize from 'sequelize'
import { DB } from '../config'
const { database, username, password, host, port, dialect } = DB
const Op = Sequelize.Op

/*
 * use Symbol based operators for better security
 * http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
 */
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
}

const db = new Sequelize(database, username, password, {
	host,
	port,
	dialect,
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	},
    logging: false,
    operatorsAliases,
})

db.authenticate().then(() => {
	console.log("  PG Connected")
}).catch((err) => {
	console.log(err)
})

export default db
