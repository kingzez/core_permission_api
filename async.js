async function fetchSucc() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("something")
        }, 10);
    })
}

async function fetchError() {
    return new Promise((resolve, reject) => {
        throw new Error("internal wrong")
        // return res({
        //     name: 'vincent'
        // })
    })
}

async function fetchData() {
    let succ = await fetchSucc()
    let error = await fetchError()
    console.log(succ, error)
    return {
        succ,
        error
    }
}

/**
 * 方案一
 * 缺点：获取不到 error 信息
 */
async function test() {
    const data = await fetchData().catch(err => {
        // 只能捕获到 fetchData 中的异常
    })


    // if(!data) return

    console.log('data:', data)
}

/**
 * 方案二
 * promise, async/await 结合
 * 缺点：写法繁琐
 */
async function test2() {
    const [err, data] = await fetchSucc().then(() => fetchError().then(data => data).catch(err => err)).then(data => [null, data]).catch(err => [err, null])

    if (err) {
        console.log("err:", err)
        return
    }

    console.log('data:', data)
}

/**
 * 方案三
 * 提前 promise 部分
 * 通用性较好
 */
const wrapper = promise => {
    return promise
        .then(data => {
            console.log(data)
            return { data }
        })
        .catch(err => { err })
}

async function test3() {
    const { err, data} = await wrapper(fetchError())

    if(err) {
        console.log('err:', err)
        return
    }

    console.log('data:', data)
}




test3()
