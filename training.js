const solution = (str) => {
    let newStr = ''
    str.length % 2 !== 0 ? newStr = str.padEnd(str.length + 1, '_') : newStr = str
    const arr = newStr.split('')
    const newArr = []
    for (let i = 0; i <= arr.length - 2; i++) {
        i % 2 === 0 ? newArr.push(`${arr[i] + arr[i + 1]}`) : newArr
    }
    return newArr
}