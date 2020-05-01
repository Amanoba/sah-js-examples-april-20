// Third part:
console.log('Script file is loaded.');                   

$('h1').html('This is done by <em>JavaSript!</em>');
$('h2').toggleClass('blue'); /*bekapcsolom*/
$('h2').toggleClass('blue'); /*kikapcsolom*/
/* $('h2').toggleClass('blue');  megint bekapcsolom */

let name = 'Csaba';
let age = 48;

age = age + 5;

function myLittleFunction() {
    // condition: number of ps is smaller than 5
    // <, > <=, >=, ===, !==
    if ($('p').length < 5 ) {
      $('main').append('<p>A p is appended in the main.</p>');
    } else {
        console.log('We reached the max paragraph number');
    }
$('p').css('border', '1px solid red');
  $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
  $('p:last-child').remove();
});

// Fourth part:

// if (condition that true or false) {
    // condition is true
// } else {
    // condition is false
// }

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div');
    $('.box:last-child').css('background', color);  
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// $('#box-container').append('<div class="box"></div');
// $('.box:last-child').css('background', colors[0]);
// $('#box-container').append('<div class="box"></div');
// $('.box:last-child').css('background', colors[1]);
// $('#box-container').append('<div class="box"></div');
// $('.box:last-child').css('background', colors[2]);
// $('#box-container').append('<div class="box"></div');
// $('.box:last-child').css('background', colors[3]);
// $('#box-container').append('<div class="box"></div');
// $('.box:last-child').css('background', colors[4]);

// Single line comment

/*
Multiple
lines
of comments
*/

// First part:

// 1+1
// 2
// 4*3
// 12
// let age;
// age = 48
// 48
// age + 5
// 53
// let numberOFLegs = 4
// undefined
// let name = Csaba
//