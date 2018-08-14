import _ from 'lodash'

export const getUid = function(length: number) {
    let uid = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charsLength = chars.length

    for (let i = 0; i < length; ++i) {
      uid += chars[getRandomInt(0, charsLength - 1)]
    }

    return uid
  }


function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


interface condition {
    required: string[],
    options?: string[],
}

export const pickAndCheck = function (obj: any, cond: condition) {
    let result
    if (cond.required) {
      for (let key of cond.required) {
        if (!obj[key]) return false
      }
      result = _.pick(obj, cond.required)
    }

    if (cond.options) {
      result = _.merge(result, _.pick(obj, cond.options))
    }
    return result
  }
