function converter(str) {
    switch (str) {
        case "PENNY":
            return 0.01;
        case "NICKEL":
            return 0.05;
        case "DIME":
            return 0.1;
        case "QUARTER":
            return 0.25;
        case "DOLLAR":
            return 1;
        case "FIVE":
            return 5;
        case "TEN":
            return 10;
        case "TWENTY":
            return 20;
        case "ONE HUNDRED":
            return 100;
        default:
            return 1;
    }
}

function checkCashRegister(price, cash, id) {
    var left = cash - price;
    var res = {
        status: "",
        change: []
    }
    var sum = 0.0;

    for (const key of id) {
        sum += key[1];
    }

    if (left == sum) {
        res.status = "CLOSED";
        res.change = id;

        return res;
    }
    
    id = id.reverse();
    for (var key of id) {
        var tmp = converter(key[0]);
        var mount = 0;

        while (mount <= left && key[1] >= 0) {
            mount += tmp;
            key[1] -= tmp;
        }
        mount -= tmp;
        key[1] += tmp;

        if (mount > 0) res.change.push([key[0], Number.parseFloat(mount.toFixed(2))]);

        console.log(key);
        console.log(left);
        console.log(mount);

        left = (left - mount).toFixed(2);
    }

    if (left > 0) {
        res.status = "INSUFFICIENT_FUNDS";
        res.change = [];
    } else {
        res.status = "OPEN";
    }

    return res;
}

var v = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(v.status);
for (const iterator of v.change) {
    console.log(iterator);
}