function digitize(n) {
    let ns= String(n)
    let mas =[]
    for(let i =0; i<= ns.length -1; i++){
        mas.push(Number(ns[i]))
    }
    return mas
}
console.log(digitize(2569))