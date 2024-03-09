function rot13(str) {
    var res = "";

    for (var key of str) {
        if (key >= 'A' && key <= 'Z') {
            res += String.fromCharCode(((key.charCodeAt(0) - 65) + 13) % 26 + 65);
        } else {
            res += key;
        }
    }

    return res;
}

console.log(rot13('SERR PBQR PNZC'));