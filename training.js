const redistributeWealth = wealth => {
    const equalyWealth = wealth.reduce((sum, i) => sum + i, 0) / wealth.length
    return console.log(wealth.fill(equalyWealth, 0, wealth.length))
}
redistributeWealth([2, 1, 5, 7, 10, 11, 7])