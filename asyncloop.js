function delay() {
    return new Promise(resolve => setTimeout(resolve, 300))
}


async function delayedLog(item) {
    await delay()
    console.log(item)
    return item
}


async function processArray(array) {

    // first
    // array.forEach(async (item) => {
    //     await delayedLog(item)
    // });


    // second
    // for (const item of array) {
    //     await delayedLog(item)
    // }


    // third
    // const promises = array.map(item => delayedLog(item))
    // // const promises = array.map(delayedLog)

    // await Promise.all(promises)

    for await (let i of array.map(delayedLog)) {
        console.log(i)
    }




    console.log('Done !')
}

processArray([1, 2, 3])
