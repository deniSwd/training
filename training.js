const solution = (num, sum = 0) => {
    if(num < 0) return 0
    else {
        for(let i = 0; i < num; i++) if (i % 3 === 0 || i % 5 === 0) sum += i
        return sum
    }
}