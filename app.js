// Chapter # 01
// Alerts
// Question # 01
alert("Hello");

// Questin # 02

alert("Hello! ThankYou To Click Our Website");

// Questin # 03
alert("This is Mubashir \n Website");
// Chapter # 02
// VARIABLES FOR STRINGS

// Questin # 01
let username;
console.log(username);

// Questin # 02
let myname = "Mubashir Khan ";
console.log(myname);

// Questin # 03
let message = "Free-Palestine";
alert(message);

// Questin # 04
let name = "Mubashir Khan";
let myage = "19";
let course = "Web Development";
alert(name);
alert(myage);
alert(course);

// Questin # 05
let FastFood = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(FastFood);

// Questin # 06
let Email = "mubashirkhan123muzzi@gmail.com";
alert("Contact Email Is " + Email);

// Questin # 07
let Javabook = "A smarter way to learn JavaScript";
alert(Javabook);

// Questin # 08

// Questin # 09
let style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(style);

// Chapter # 03
// VARIABLES FOR NUMBERS

// Question # 01
let age = "I am 19 Years Old ";
alert(age);

// Question # 02
let user = "You Visited This Website 19 Times ";
alert(user);

// Question # 03
// let birthYear = "2004";

// Question # 04

// Chapter # 04
// VARIABLE NAMES: LEGAL & ILLEGAL

// Chapter # 05
//MATH EXPRESSIONS
// Chapter # 05
//MATH EXPRESSIONS
//question No.1
let x = 3;
z = 4;
sum = x + z;
document.write("<br>" + "the sum of" + x + "and" + z + "is equal to " + sum);
//question no.2
let a = 4;
b = 7;
sum = a * b;
document.write(
  "<br>" + "the product of" + a + "into" + b + "is equal to " + sum
);

let num1 = 5;
num2 = 5;
sum = num1 / num2;
document.write(
  "<br>" + "the divisio of" + num1 + "and" + num2 + "is equal to " + sum
);

let num3, num4, remainder;
num3 = 17;
num4 = 5;
remainder = num1 % num2;
document.write(
  "<br>" +
    "The remainder of " +
    num3 +
    " divided by " +
    num4 +
    " is " +
    remainder
);
//question No.3
//a)
let number;
//b)
document.write("<br>" + "value after variable declaration is " + number);
//c)
number = 5;
//d)
document.write("<br>" + "initial value :" + number);
//e)
number++;
//f)
document.write("<br>" + "value after increment is:" + number);
//g)
number += 7;
//h)
document.write("<br>" + "value after adding 7 is:" + number);
//i)
number--;
//j)
document.write("<br>" + "value after decrement is ;" + number);
//k)
number /= 3;
//l)
document.write("<br>" + "reminder is : " + (number % 3));
//question no.4
let ticket1 = 600;
document.write("<br>" + " total cost for 5 movie tickets is " + ticket1 * 5);
//question no.5
let numb;
numb = 5;
document.write("<br>" + numb + "x1 =" + numb * 1);
document.write("<br>" + numb + "x2 =" + numb * 2);
document.write("<br>" + numb + "x3 =" + numb * 3);
document.write("<br>" + numb + "x4 =" + numb * 4);
document.write("<br>" + numb + "x5 =" + numb * 5);
document.write("<br>" + numb + "x6 =" + numb * 6);
document.write("<br>" + numb + "x7 =" + numb * 7);
document.write("<br>" + numb + "x8 =" + numb * 8);
document.write("<br>" + numb + "x9 =" + numb * 9);
document.write("<br>" + numb + "x10 =" + numb * 10);

//question no.6
// Store a Celsius temperature into a variable
let celsius = 30;

// Convert it to Fahrenheit
let fahrenheit = (celsius * 9) / 5 + 32;

// Output "NNoC is NNoF"
document.write("<br>" + `${celsius}°C is ${fahrenheit}°F<br>`);

// Store a Fahrenheit temperature into a variable
let fahrenheit2 = 86;

// Convert it to Celsius
let celsius2 = ((fahrenheit2 - 32) * 5) / 9;

// Output "NNoF is NNoC"
document.write(`${fahrenheit2}°F is ${celsius2}°C`);
//question no.7
document.write("<br>" + "<b> SHOPPING CART <b>");
item1 = 650;
qty = 3;
item2 = 100;
qty2 = 7;
shipping = 100;

document.write(
  "<br>" + "price of item1 is" + item1 + "<br>" + " quantity of item1 is" + qty
);
document.write(
  "<br>" + "price of item2 is" + item2 + "<br>" + " quantity of item2 is" + qty
);
document.write("<br>" + "shipping charges" + shipping);

//question no.8
marko = 500;
tmark = 550;
document.write("<br>" + "total marks=550" + "<br>" + "obtained marks = 500");
document.write("<br>" + "percentage =" + (marko / tmark) * 100 + "%");
//question no.9
usdollar = 104.8;
saudiriyal = 28;
document.write(
  "<br>" + "total currency in PKR:" + usdollar * 10 + saudiriyal * 25
);
//question no.10
let y;
y = (5 + 5) * 10;
document.write("<br>" + y / 2);
//question no.11

let currentYear = 2024;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("<br>" + `They are either ${age1} or ${age2} years old.`);
//question no.12
radius = 20;
circumfarence = 2 * 3.14 * radius;
area = (3.14 * radius) ^ 2;
document.write("<br>" + "area of circle =20");
document.write("<br>" + "circumfarence of circle = " + circumfarence);
document.write("<br>" + "area of circle =" + area);

//question no.13
// a)
let favoriteSnack = "chips";

// b)
let currentAge = 25;

// c)
let maxAge = 80;

// d)
let amountPerDay = 2;

// e)
let totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
document.write(
  "<br>" +
    `You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`
);

