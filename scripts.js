// Third part:
console.log('Script file is loaded.');                   

$('h1').html('This is done by <em>JavaSript!</em>');
$('h2').toggleClass('blue'); /*bekapcsolom*/
$('h2').toggleClass('blue'); /*kikapcsolom*/
/* $('h2').toggleClass('blue');  megint bekapcsolom */

let name = 'Csaba';
let age = 48;

function myLittleFunction() {
  $('main').append('<p>A p is appended in the main.</p>');
  $('p').css('border', '1px solid red');
  $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
  $('p:last-child').remove();
});


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