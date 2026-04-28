// //varaible container=>store data
// //var: globle=> can be acess in whole file

// var name="ali"
// //block
// {
//     let age=20
//     //acess global inside block
//     console.log(name)
//     console.log(age)
//     //const:ressign-> not allow
//     const pI=3.14 //Error
//     //ressign const
//     PI =5.11
//     console.log(PI)
// }

// //access block variable outside block
// console.log(age) //error

// //data type
// let city="karachi"//string
// let price=20//number
// let isopen=true//boolen
// let car=null//null
// let test //undefine
// let student={"name":"sara","grade":"A"}//object

//operators
//Arthimatic
// let a = 10 + 5 //15
// let b = 10 - 5 //5
// let c = 10 * 5 //50
// let d = 10 / 5 //0
// let e = 10 % 5 //2
// console.log(1000%99999)//1000

// //conditonal
// console.log(5==5)//t
// console.log(5!=5)//f
// console.log(5>5)//f
// console.log(5>=5)//t
// console.log(5<=5)//t


// console.log("5"==5)//t
// console.log("5"===5)//f
// console.log("5"!==5)//t
// console.log("5"!=5)//f

// //Assignment
// let number=10
// number += 5//15
// number -= 8//7
// number *= 2//14
// number /= 2//7
// number %= 2//1

// //logical
// console.log(5>5&&5<=9)//f
// console.log(5>5||5<=9)//t
// console.log(!(5>5))//f
// console.log(!(5>5)&&(5==2|| 11>=10))//t

//condition statement

// for(let i=1;i<=1let age=27                                
// if(age>=18){
//     console.log("Eligibal for vote cast")
// }else{
//     console.log(" not Eligibal for vote cast")
// }
// let marks =39
// if(marks>=80){
//     console.log("A+")
// }else if(marks>=70){
//     console.log("A")
// }else if(marks>=60){
//     console.log("B")
// }else if(marks>=50){
//     console.log("C")
// }else if(marks>=40){
//     console.log("D")
// }else{
//     console.log("FAIL")
// }

// //LOOP
// let number=60;i++){
//     console.log(`${number} X ${i} =${number*i}`)
// }
// let i=1
// while(i<=3){
//     console.log(`count:${i}`)
//     //statement -> condition false
//     i++
// }
// //function
// function greet(){
//     console.log("hey")
// }

//with perameter
function greet(name){
    console.log(`hellow,${name}`);
}
// //call argument
// greet(`ali`);
// greet(`shayan`);
// greet(`mahnoor`);

//  //with perameter +return(calculation)
//  function sum(num1,num2){
//     return num1+num2
//  }
//  //return function value can be store in variable
//  let addition =sum(10,20)//30
//  console.log(addition)

 //default perameter
//  function sum(num1,num2=30){
//     return num1+num2
//  }

//errow function (ES6)
// const sum =(num1,num2=30)=>num1+num2

//   //return function value can be store in variable
//   let addition1 =sum(10)//40
//   let addition2 =sum(10,2)//12
//   console.log(addition1)
//   console.log(addition2)

//ARRAY
let fruits =["apple","mango","pineapple"]
//index:     0          1          2
//single element
console.log(fruits[1])
//looping over arry
for(let fruit of fruits){
    console.log(fruit)
}

//objects
let student={
    name:"Ali"
    age:20,
}


