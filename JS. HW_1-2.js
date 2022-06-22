// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
let age_2 = 18;
let age_3 = 60;
const checkAge = function(age) { 
    if (typeof(age) == 'number') {
        if (age < age_2) {
            console.log("You don't have access cause your age is " + age + ". It's less then " + age_2 + '.');
        } else if (age >= age_2 && age < age_3) {
            console.log('Wellcome!');
        } else if (age > age_3) {
            console.log('Keep calm and look Culture channel.');
        } else {
            console.log('Technical work');
        }
    } else {
        console.log ('Invalid data type');
    }
}
checkAge(17);
checkAge(18);
checkAge(61);
checkAge('Oo');