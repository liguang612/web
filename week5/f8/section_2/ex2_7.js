function arrToObj(arr) {
    var obj = {}

    for (const iterator of arr) {
        obj[iterator[0]] = iterator[1];
    }

    return obj;
}

const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)