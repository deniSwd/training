const sumTwoSmallestNumbers = (numbers) => {
    const [low1,low2] = numbers.sort((a, b) => a - b);
    return low1 + low2
}
console.log(sumTwoSmallestNumbers([14,52,85,4,86,3]))