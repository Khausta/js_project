let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');
    //для проверки введенных значений в prompt
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

//let money = +prompt('Ваш бюджет на месяц?', '');  //унарный плюс перед prompt для 
//let time  = prompt('Введите дату в формате YYYY-MM-DD', '');
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
    optionalExpenses: {},
    income: '',
    savings: true
};
// let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a2 = prompt('Во сколько обойдется?', ''),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     a4 = prompt('Во сколько обойдется?', '');                               перенесено в цикл for ниже

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;  изменено в цикле for
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
            
            if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
    }
}

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {
    if(appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка');
    }
}

detectLevel();

// if(appData.moneyPerDay < 100) {
//     console.log('Минимальный уровень достатка')
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка')
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Произошла ошибка')
// }


// let i = 0;
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

// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
        
//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {

//         }
//     i++;
// } while (i < 2);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses () {
    let i = 0;
    do {
        let c = prompt('Статья необязательных расходов', ''),
            d = +prompt('Во сколько обойдется?', '');
            
            if ((typeof(c))=== 'string' && (typeof(c)) != null && (typeof(d)) != null && c != '' && d != '' && c.length < 50) {
                console.log('done');
                appData.optionalExpenses[c] = d;
            } else {
                i = i - 1;
            }  
        i++;
    } while (i < 3);
}
chooseOptExpenses();