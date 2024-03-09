function telephoneCheck(str) {
    var countLeftBracket = 0;
    var countRightBracket = 0;
    var countNumber = 0;
    var countHyphen = 0;

    if (str.charAt(0) == '-' || str.charAt(str.length - 1) == ')') {
        return false;
    }
    if (str.charAt(0) == '1') {
        str = str.slice(1);
    }

    for (const char of str) {
        if ((char < '0' || char > '9') && char != ' ' && char != '(' && char != ')' && char != '-') {
            return false;
        }
        switch (char) {
            case ' ':
                break;
            case '-':
                ++countHyphen;
                break;
            case '(':
                ++countLeftBracket;
                break;
            case ')':
                ++countRightBracket;
                break;
            default:
                ++countNumber;
        }
    }

    if (countHyphen > 2) {
        return false;
    }
    if (countLeftBracket != countRightBracket) {
        return false;
    }
    if (countNumber != 10) {
        return false;
    }

    return true;
}

telephoneCheck("555-555-5555");