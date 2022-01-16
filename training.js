function cookingTime(eggs) {
    let time =0
    let a = eggs % 8 == 0 ? time = eggs / 8 * 5 : time = ((eggs - eggs % 8) + 8) / 8 * 5
    return time
}

console.log(cookingTime(46))