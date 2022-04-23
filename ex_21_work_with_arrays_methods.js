const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

function getPositiveIncomeAmount(data) {
    let res = data.map(num => num.amount),
        result = res.filter(item => item > 0);
    return result.reduce((sum, element) => {
            return sum + element;
        }, 0);
}

console.log(getPositiveIncomeAmount(funds));

function getTotalIncomeAmount(arr) {
    let res = arr.map(num => num.amount);
    let chekArr = [];

 //записываем все отрицательные числа в checkArr;

    for (let i of res) {
        if (i < 0) {
            chekArr.push(i);
        } 
    }

//проверка, если массив chekArr не пустой, то суммируем все элементы массива res, если пустой, то запустить функцию getPositiveIncomeAmount.

    if(chekArr !== 0) {
        return res.reduce((sum, elem) => {
            return sum + elem;
        },0);
    } else {
       return getPositiveIncomeAmount(arr);
    }

    
}

console.log(getTotalIncomeAmount(funds));



