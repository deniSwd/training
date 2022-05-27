const unusedDigits = (...arg) => {
    let newString = ""
    const myString = String(arg)
    for (let i = 0; i < 10; i++) {
        if (!myString.includes(i)) {
            newString += i
        }
    }
    return newString
}
unusedDigits(12, 34, 56, 78)