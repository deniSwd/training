const littleString = (str) =>{
    let myArr =Array.from(str)
    let resArr =[]
    for (let i=0; i<myArr.length; i++) {
        let idx = myArr.indexOf(myArr[i])
        let newArr = []
        while (idx !== -1) {
            newArr.push(idx)
            idx = myArr.indexOf(myArr[i], idx + 1)
        }
        resArr.push(myArr[i] + newArr.length)
    }
    let newString = Array.from( new Set (resArr)).join('')

    console.log(newString)
}

littleString('aaxaaxxxeexfeeeaxf')
