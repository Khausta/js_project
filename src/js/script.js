let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
// let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
// let secondQuestion = prompt('Во сколько обойдется?', ''); 


// let expenses = {
//     firstQuestion: prompt('Введите обязательную статью расходов в этом месяце', ''),
//     secondQuestion: prompt('Во сколько обойдется?', '')
// };
// console.log(expenses.firstQuestion, ':' , expenses.secondQuestion);

let appData = {
    butget: money,
    time: time,
    expenses: {},
    optionalExpenses: '',
    income: '',
    saving: false
};
let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
console.log(appData.expenses);



alert(appData.butget / 30);