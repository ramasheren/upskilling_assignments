//1
var num1 = Number(prompt("Enter a number."));
if (isNaN(num1)) alert("That's not a number >:(");
else if (num1 % 2 === 0) alert("Your number is even :)");
else alert("Your number is odd :(");

//2
var num2 = Number(prompt("Enter something."));
if (isNaN(num2)) alert("That's not a number :(");
else alert("That's a number :)");

//3
var num3 = Number(prompt("Enter a number"));
var num4 = Number(prompt("Enter another number"));
if (isNaN(num3) || isNaN(num4)) alert("One of the inputs isn't a number :(");
else if (num3 > num4) alert(`${num3} is greater :)`);
else alert(`${num4} is greater :)`);

//4
function evalNumbers(x, y) {
  alert(`
        Addition: ${x} + ${y} = ${x + y}
        Multiplication: ${x} x ${y} = ${x * y}
        Division: ${x} / ${y} = ${x / y}
        Modulus: ${x} % ${y} = ${x % y}
        `);
}
var num5 = Number(prompt("Enter a number"));
var num6 = Number(prompt("Enter another number"));
if (isNaN(num5) || isNaN(num6)) alert("One of the inputs isn't a number :(");
else evalNumbers(num5, num6);

//5
// The rule is:
// Year must be divisible by 4 → candidate for leap year.
// But if it’s also divisible by 100, it’s not a leap year…
// …unless it’s also divisible by 400, then it is a leap year.
var num7 = Number(prompt("Enter a yeaar"));
if (num7 % 4 == 0) {
  if (num7 % 100 != 0) alert("Leap year :)");
  else {
    if (num7 % 400 == 0) alert("Leap year :)");
    else alert("Not leap year :(");
  }
}

//6
var num8 = Number(prompt("Enter your mark"));
function findGrade() {
  if (num8 > 90) alert("A");
  else if (num8 > 80) alert("B");
  else if (num8 > 70) alert("C");
  else if (num8 > 60) alert("D");
  else if (num8 > 50) alert("E");
  else alert("Fail");
}
findGrade(num8);

//7
var s1 = prompt("Enter a month").toLowerCase();
function findDaysInMonth() {
  var days31 = [
    "january",
    "march",
    "may",
    "july",
    "august",
    "october",
    "december",
  ];
  var days30 = ["april", "june", "september", "november"];
  var days28_29 = ["february"];
  if (days31.indexOf(s1) >= 0) alert("This month is 31 days.");
  else if (days30.indexOf(s1) >= 0) alert("This month is 30 days.");
  else if (days28_29.indexOf(s1) >= 0)
    alert("This month is 28 days and 29 if a leap year.");
}
findDaysInMonth(s1);

//8
var num9 = Number(prompt("Enter a number"));
function isPrime(n) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
alert(isPrime(num9) ? "Prime" : "Not prime");

//9
var num10 = prompt("Enter a number");
alert(`The number is ${num10.length} digits long.`);

//10
var s2 = prompt("Enter a string");
function reverseString(s) {
  var len = s2.length;
  var reversed = "";
  for (var i = len - 1; i >= 0; i--) reversed += s2[i];
  return reversed;
}
alert(reverseString(s2));
