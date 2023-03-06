console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/gu8ip0iuu8hruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum (n: number) {
    return function (m: number) {
        return n+m
    }
}
console.log(sum (3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// counter(); // 1
// counter(); // 2
//
// counter2(); // 1
// counter(); // 3

function makeCounter () {
    let n=0
    return function () {
        return ++n
    }
}
 const counter = makeCounter();
const counter2 = makeCounter();
counter ()
counter ()
counter2()
counter2()




// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(n: number) {
    return {
        increase: function () {
            return ++n
        },
        decrease: function () {
            return --n
        },
        reset: function () {
            return n = 0
        },
        set: function (m: number) {
            n = m
            return n
        }
    }
}
let finalCounter = makeCounter2(4)
 finalCounter.increase()
 finalCounter.decrease()
 finalCounter.set(3)
 finalCounter.reset()


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

let superSum = (n:number) => {

        return function f1 (...args: number[]) {

            if (args.length >= n) {

                return args.reduce((acc, arg) => acc+arg )
            } else {
                return function (...moreArgs: number[]) {

                    let newArgs = args.concat(moreArgs)
                    return f1(...newArgs)
                }
            }
        }

}
superSum(3)(1,3,6)





// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n:number):any {
    if (n===0) {
        return n
    } else {
    return n + sumTo(n-1)
    }
}

function factorial(n:number):any {
    if (n===1) {
        return n
    } else {
        return n * factorial(n-1)
    }
}


// выводит по порядковолму номеру число в последовательности фибоначии
function fibonacci(n:number):any {

    if (n === 1||2) {
        return 1
    }  else {
        return  fibonacci(n-1) + fibonacci(n-2)
    }
}
fibonacci(6)

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//// Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.


function printReverseList(list:any) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

printReverseList(list);

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arr = [[1,2],[3,[4,[5]]]];

function flatten(arr:any) {
    return arr.reduce((acc:number[], cur:number|number[]) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
}

const flattened = flatten(arr);
console.log(flattened);

// just a plug
export default () => {};