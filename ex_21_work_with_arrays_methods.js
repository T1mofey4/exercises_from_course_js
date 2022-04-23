const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

function getPositiveIncomeAmount(data) {
    let res = data.map(sum => sum.amount),
        result = res.filter(item => item > 0);
    return result.reduce((sum, element) => {
            return sum + element;
        }, 0);
}

console.log(getPositiveIncomeAmount(funds));

let res = funds.map(sum => sum.amount);
console.log(res);

let chekArr = [];
let negNum = res.map(item => item <0);
console.log(negNum);

// function getTotalIncomeAmount(funds) {
//     if()
// }

// let check = res.every(num => res < 0);


// let result = res.filter(item => item > 0);
// console.log(result);

// // let sum = result.reduce((sum, element) => {
// //     return sum + element;
// // }, 0);

// // console.log(sum);


