// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2 = 18;
let age_3 = 60;
const checkAge = function(age) { 
       if (+age) {
        if (age < age_2) {
            alert ( "You don't have access cause your age is " + age + ". It's less then " + age_2 + '.' );
        } else if (age >= age_2 && age < age_3) {
            alert ( 'Wellcome!' );
        } else if (age > age_3) {
            alert( 'Keep calm and look Culture channel.' );
        } else {
            alert( 'Technical work' );
        }
    } else {
        alert( 'Invalid data type' );
    }
}
let agePrompt = prompt( 'Укажите Ваш возраст' );
checkAge(agePrompt);