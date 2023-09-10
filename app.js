// From chp 9 to 11
var city = prompt("Enter your city name");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}
//Question No 2
var gender= prompt("What is your gender");
if (gender==="Male".toLowerCase()) {
    alert("Good morning  dear sir")
}else if(gender==="Female".toLowerCase()){
    alert("Good Morning ma'am") 
}else {
 alert("Please enter your correct gender!");
};
// Question No 3
var signalColor= prompt("Input one of the traffic signal color");
if (signalColor==="Red".toLowerCase()){
    alert("Must Stop")
} else if (signalColor==="Yellow".toLowerCase()) {
    alert("Ready to move")
} else{
    alert("Move now")
}
// Question No 4
let carRemainingFuel= prompt("How many litres of fuel in your car?")
if (carRemainingFuel<="0.25") {
  alert("Please refill the fuel in your car");
}
// Question No 5
 var a=4;
 if(++a===5) {
    alert("Given condition for variable a is true");
 };
 var b=82;
 if (b++===83) {
    alert("given condition for variable b is false");
 }
 
 var c=12;
 if (c++===13){
    alert("condition 1 is true")
 }
 if(c===13){
    alert("condition 2 is true")
 }
 alert(c)
 if(++c < 14) {
    alert("condition 3 is false")
 }
 if(c===14){
    alert("condition 4 is false")
 }

 var materialCost= 20000;
 var laborCost= 2000;
 var totalCost=materialCost+laborCost;
 if (totalCost===laborCost+materialCost){
    alert("The cost equals");
 }
 if (true){
    alert("true")
 }
 if (false){
    alert("false");
 }
 if ("car"<"cat"){
    alert("car is smaller than cat")
 }
 var percentage= prompt("Write your obtained marks");
 var totalMarks=300;
 if (percentage>=80){
    alert("Excellent")
    document.write("<b>Marks Sheet<b> <br><br> Total marks: "+totalMarks+"<br>Marks obtained:"+totalMarks*percentage/100+"<br>Percentage: "+percentage+"%"+"<br>Grade: A+<br>"+"Remarks: Excellent")
 }else if (percentage>=70){
    alert("Good")
    document.write("<b>Marks Sheet<b> <br><br> Total marks: "+totalMarks+"<br>Marks obtained:"+totalMarks*percentage/100+"<br>Percentage: "+percentage+"%"+"<br>Grade: A<br>"+"Remarks: Good")
 }else if(percentage>=60){
    alert("You need to improve")
    document.write("<b>Marks Sheet<b> <br><br> Total marks: "+totalMarks+"<br>Marks obtained:"+totalMarks*percentage/100+"<br>Percentage: "+percentage+"%"+"<br>Grade: B<br>"+"Remarks: You need to improve")
 }else {
    alert("Sorry")
    document.write("<b>Marks Sheet<b> <br><br> Total marks: "+totalMarks+"<br>Marks obtained:"+totalMarks*percentage/100+"<br>Percentage: "+percentage+"%"+"<br>Grade: Fail<br>"+"Remarks: Sorry")
 };

 // Guess Game:
 var secretNumber=(prompt("Guess a secret number from 1 to 10"));
  if (secretNumber==+1) {
    alert("Bingo!Correct answer.")
  } else if(secretNumber<10) {
    alert("Close enough to the correct answer")
  }
  else{
    alert("you need to further think of")
  }
// Question No 8
var number = 3;
var number= prompt("Is your given number divisible by 3? ");
if (number%3==0){
    alert("The number is divisible by 3")
}else {
    alert("Your putting number could not be divisible by 3")
}

// Question No 9
var number= prompt("Check the number. Is it a even number or odd number?  ");
if (number%2==0){
    alert("Even number")
}else {
    alert("Odd number")
};
// Question No 10
var temperature= prompt("What's the temperature today?");
if (temperature>40) {
    alert("It is very hot outside ")
}else if(temperature>30){
    alert("The Weather today is Normal as per routine")
}else if(temperature>20) {
    alert("Today's weather is cool and good")
} else {
    alert("OMG! Today's weather is so cool")
};

// Question No 11

const operator=prompt('Enter operator (either +,-,0r /):');
const number1=parseInt(prompt('Enter your first number'));
const number2=parseInt(prompt('Enter your second number'));
if (operator=='+'){
    alert(number1+number2)
}else if(operator=='-'){
    alert(number1-number2)
}else if (operator=='/'){
    alert(number1/number2)
}else {
    alert(number1*number2)
}