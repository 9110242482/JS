// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1;
while (i<=10) {
    result = result * 2
    i++
}
console.log (result);


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function extent (x) {
    return 2**x
}
console.log (extent(10));

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let world = ":)";
let string = "";
for (let a = 1; a <= 5; a++){
    string += world;
    console.log(string);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile (stroka, numberOfRows) {
        let string = ""
    for (let a = 1; a <= numberOfRows; a++) {
        string += stroka;
        console.log(string);
    }
}
printSmile ('*', 8);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure (word){
    let vowelcount = word.match(/[aeiou]/gi).length;
    let consonantcount = word.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    console.log ('Слово ' + word + ' состоит из ' + vowelcount + ' гласных и ' + consonantcount + ' согласных букв');
}
getWordStructure ('case');
getWordStructure ('Case');
getWordStructure ('Check-list');


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba"

function isPalindrom (word) {
    word = word.toLowerCase().replace(/\s/g, '');
    return word === word.split('').reverse().join('');
}

isPalindrom ('abba') ?
    console.log ('It is a palindrome'):
    console.log ('It is not a palindrome');

isPalindrom ('Abba') ?
    console.log ('It is a palindrome'):
    console.log ('It is not a palindrome');
