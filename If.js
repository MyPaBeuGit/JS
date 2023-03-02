'use strict';

let value = prompt('Какое официальное название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно');
}
else {
    alert('Не знаете? ECMAScript');
}

let number = prompt('Введите число', 0);
if (number > 0) {
    alert(1);
}
else if (number < 0) {
    alert(-1);
}
else {
    alert(0);
}


let result;
result = (a + b < 4) ? 'Мало' : 'Много';

let massage;
massage = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина':
'';