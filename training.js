function computerToPhone(numbers){
    let myConvert = {7:1,8:2,9:3,4:4,5:5,6:6,1:7,2:8,3:9,0:0}
    let phone = ''
    for (i=0; i<=numbers.length; i++){
        for (let key in myConvert) {
            if (numbers[i] == key) {
                phone += myConvert[key]
            }
        }
    }
    return phone
}
console.log(computerToPhone('58971'))