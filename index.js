
// type coertion 


// Because of + operator it concatinates the values as string
// console.log("5" + 1);
// but - operator converts the string to number and performs subtraction
// console.log("5" - 1);

//truthy and falsy values 
// every value in javascript is either truthy or falsy
// false 0 "" null undefined NaN document.all are falsy values
// everthing rather this false is truthy

// const text =() =>{
//     let admin="true";

//     let loggedin="false";

//     if(admin || loggedin){
//         console.log("Logged success");

//     }else{
//            console.log("not logged");
//         }

// }

// text();


// const getGrade =(marks)=>{
//     if(marks<35){
//         return "F";
//     }else if(marks<=50){
//         return "D";
//     }else if(marks<=70){
//         return"C";
//     }else if(marks<=85){
//         return "B";
//     }else if(marks<=100){
//         return "A";
//     }else if(marks>100){
//         return "Invalid marks";
//     }else {
//         return "Enter Marks";
//     }
// }

// console.log(getGrade(87));

//Loops//
// for(let i=1; i<10; i++){
//     console.log(i);
// }
//while loop//
// let i=1;
// while(i<=8){
//     i++;
//     console.log(i);
// }
//do while loop//
// let i=1;
// do{

// console.log(i);
// i++;
// }
// while(i<10);
//break//
// for(i=1; i<201; i++){
//     console.log(i);
//   if(i===32){
//     break;
//   }
// }

//practice //
//print numbers from 1 to 100//\

// for (let a=1; a<=100; a++){
//     console.log(a);
// }

// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// for (let i=2; i<=20; i+=2){
// console.log(i);
// }

// for(let i=1; i<21; i++){
//     if(i %2 === 0){
//         console.log(i); 
//     }
// }
// let i=1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);
//     }
//     i++;

// }

// for (let i=1; i<11; i++ ){
// console.log(`5 * ${i} = ${5* i}`);
// }

// find the sum of number
// let sum=0;
// for(let i=1; i<101; i++){

// sum=sum +i;
// }
// console.log(sum);

// for(let a=1; a<51; a++){
//     if(a%2 === 0){
//         console.log(a);

//     }
// }
// let i=1;

// let val= prompt("Enter a Number");

// for (let i=1; i<=val; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even number`);
//     }else{
//         console.log(`${i} is odd number`);
//     }

// }

//break / continue//

// var a=10;
// var b=a+2;
// var a=b;
// var can be redeclared but should not be used for large application

// console.log(a);  

// let a=10;
// a=2+5;
// let b=2;
// console.log(a);
// in const we cannot chnage value nor redeclare
// even in let we can assign the values but cannot redeclare there only 

// let a =10;{
//     let a=20;
//     console.log("inside",a);
// }
// console.log("outside",a);