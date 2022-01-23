function lastDigit(n, d) {
    let result= []
    let string = String(n)
    if (d >= string.length){
        for (let i=0; i<=string.length-1; i++)
            result.push(Number(string[i]))
        return result
    } else if (d > 0 || d< string.length) {
        for (let i=d; i>=1; i--)
            result.push(Number(string[string.length-i]))
        return result
    } else {
        return []
    }

}
console.log (lastDigit(12345, 9) )