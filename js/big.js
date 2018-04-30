'use strict' /*Этот код будет работать по современному стандарту ES5*/

var message = 'Word!';
var name = 'Вася', admin;
var ourPlanet;
var visitor;
var name = prompt('Введите ваше имя', name)
admin = name;

var answer = confirm('Ваше имя ' + admin + '?')

ourPlanet = 'Земля';
visitor = 'Петея';


if (answer == true) {
	alert('Точняк!');
} else {
	alert('Хорошенько подумай')
}
alert('Hello');//первая команда
alert(message);
alert(ourPlanet + visitor);



// Календарь