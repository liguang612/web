function convertToRoman(num) {
    var str = '';
    
    let i = Math.floor(num / 1000);
    for (let index = 0; index < i; index++) {
        str += 'M';
    }
    num -= 1000 * i;

    i = Math.floor(num / 900);
    for (let index = 0; index < i; index++) {
        str += 'CM';
    }
    num -= 900 * i;

    i = Math.floor(num / 500);
    for (let index = 0; index < i; index++) {
        str += 'D';
    }
    num -= 500 * i;
    
    i = Math.floor(num / 400);
    for (let index = 0; index < i; index++) {
        str += 'CD';
    }
    num -= 400 * i;
    
    i = Math.floor(num / 100);
    for (let index = 0; index < i; index++) {
        str += 'C';
    }
    num -= 100 * i;
    
    i = Math.floor(num / 90);
    for (let index = 0; index < i; index++) {
        str += 'XC';
    }
    num -= 90 * i;
    
    i = Math.floor(num / 50);
    for (let index = 0; index < i; index++) {
        str += 'L';
    }
    num -= 50 * i;
    
    i = Math.floor(num / 40);
    for (let index = 0; index < i; index++) {
        str += 'XL';
    }
    num -= 40 * i;
    
    i = Math.floor(num / 10);
    for (let index = 0; index < i; index++) {
        str += 'X';
    }
    num -= 10 * i;
    
    i = Math.floor(num / 9);
    for (let index = 0; index < i; index++) {
        str += 'IX';
    }
    num -= 9 * i;
    
    i = Math.floor(num / 5);
    for (let index = 0; index < i; index++) {
        str += 'V';
    }
    num -= 5 * i;
    
    i = Math.floor(num / 4);
    for (let index = 0; index < i; index++) {
        str += 'IV';
    }
    num -= 4 * i;
    
    i = num;
    for (let index = 0; index < i; index++) {
        str += 'I';
    }

    return str;
}

console.log(convertToRoman(2));