function filter_list(l) {
    let a = []
    for (let i = 0; i <= l.length - 1; i++) {
        typeof l[i]=="number" ? a.push(l[i]) : a
    }
    return a
}