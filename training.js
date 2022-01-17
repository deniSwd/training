function collision(x1, y1, radius1, x2, y2, radius2) {
    let a = x2-x1
    let b = y2-y1
    let d = Math.sqrt (Math.pow(a, 2)+Math.pow(b,2))
    let c = radius1 + radius2
    return c > d
}