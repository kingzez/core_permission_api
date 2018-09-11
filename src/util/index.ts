import _ from 'lodash'

export const getUid = function(length: number): string {
    let uid = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charsLength = chars.length

    for (let i = 0; i < length; ++i) {
      uid += chars[getRandomInt(0, charsLength - 1)]
    }

    return uid
  }


function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


interface condition {
    required: string[],
    options?: string[],
}

export const pickAndCheck = function (obj: any, cond: condition): any {
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

/**
 * async/await without try/catch
 * @param promise
 */
export function go<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, null]>(err => [err, undefined])
}
