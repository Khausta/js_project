let money = +prompt('Ваш бюджет на месяц?', '');  //унарный плюс перед prompt для 
let time  = prompt('Введите дату в формате YYYY-MM-DD', '');
// let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', '');
// let secondQuestion = prompt('Во сколько обойдется?', ''); 


// let expenses = {
//     firstQuestion: prompt('Введите обязательную статью расходов в этом месяце', ''),
//     secondQuestion: prompt('Во сколько обойдется?', '')
// };
// console.log(expenses.firstQuestion, ':' , expenses.secondQuestion);

let appData = {
    budjet: money,
    time: time,
    expenses: {},
    optionalExpenses: '',
    income: '',
    saving: false
};
// let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a2 = prompt('Во сколько обойдется?', ''),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a4 = prompt('Во сколько обойдется?', '');                               перенесено в цикл for ниже

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;  изменено в цикле for

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
        
//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {

//         }
// };

// appData.moneyPerDay = appData.budjet / 30;


// alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// if(appData.moneyPerDay < 100) {
//     console.log('Минимальный уровень достатка')

// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка')
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Произошла ошибка')
// }

let i = 0;

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
        
//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {

//         }
//     i++;
// }

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
        
        if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {

        }
    i++;
} while (i < 2);