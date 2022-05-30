const isCoprime = (x, y) => {
    const divisors = (number) => {
        let myDivisors = []
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                myDivisors.push(i)
            }
        }
        console.log(myDivisors)
        return myDivisors
    }
    let firstNumberArr = divisors(x)
    let secondNumberArr = divisors(y)
    let arrayForTest
    let arrayForFind
    if (firstNumberArr.length > secondNumberArr.length) {
        arrayForTest = secondNumberArr
        arrayForFind = firstNumberArr
    } else {
        arrayForTest = firstNumberArr
        arrayForFind = secondNumberArr
    }
    let lagerDivider
    for (let a = 1; a < arrayForTest.length; a++) {
        lagerDivider = arrayForFind.find(v => v === arrayForTest[a])
        if (lagerDivider) break
    }
    if (lagerDivider === undefined) {
        return console.log('true')
    }
    return console.log('false')
}
isCoprime(44,88)