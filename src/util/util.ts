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
