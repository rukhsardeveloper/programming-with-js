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
let age=27                                
if(age>=18){
    console.log("Eligibal for vote cast")
}else{
    console.log(" not Eligibal for vote cast")
}
let marks =39
if(marks>=80){
    console.log("A+")
}else if(marks>=70){
    console.log("A")
}else if(marks>=60){
    console.log("B")
}else if(marks>=50){
    console.log("C")
}else if(marks>=40){
    console.log("D")
}else{
    console.log("FAIL")
}

//LOOP
let number=6
for(let i=1;i<=10;i++){
    console.log(`${number} X ${i} =${number*i}`)
}
let i=1
while(i<=3){
    console.log(`count:${i}`)
    //statement -> condition false
    i++
}