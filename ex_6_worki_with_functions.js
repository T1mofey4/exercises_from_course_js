function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Антон'))


function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
}

console.log(returnNeighboringNumbers(5))


function getMathResult(a, b) {
    let res = [];
    if (b <= 0 || typeof(b) != 'number' ) {
        return a;
    } else {
        for (let i = 1; i <= b; i++) {
            res.push(a * i);
        }
    
        let newRes = res.toString().replace(/,/g, '---');
        
        return newRes
    }
}


console.log(getMathResult(5, 10))
