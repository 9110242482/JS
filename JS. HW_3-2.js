// Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
const fs = require ('fs');
const users = JSON.parse(fs.readFileSync("C:/Users/admin/JS/task2(3).json"));

const uniqueUsers = Array.from(new Set(users.map(user => JSON.stringify(user)))).map(user => JSON.parse(user));
console.log (uniqueUsers);