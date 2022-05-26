const dontGiveMeFive = (start, end) => {
    let myArray = []
    for (let i = start; i <= end; i++) {
        let temp = Array.from(String(i))
        if (!temp.includes('5')) {
            myArray.push(i)
        }
    }
    return myArray.length
}

console.log(dontGiveMeFive(-5, 15))
