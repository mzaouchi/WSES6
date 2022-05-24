// // Scoope
// function Test(){
//     {
//         // {
//   //   const a = 7
//   //   // console.log(a)
//   // }
//   // console.log(a)
//   // {
//   //   let b = 2
//   //   // console.log(b)
//   // }
//   //   console.log(b)
//       var c = 8
//       // console.log(c)
//     }
//     console.log(c)
//     return "Maroua"
//   }
//   console.log(Test())


// // Constant
//   const a = 4
//   console.log(a)
//   a =7

//     const tab = [1,2,3,4,5,6]
//     // console.log(tab[2])
//     tab[2] = 9
//     tab.push(99)
//     console.log(tab)
//     const user = {name :"Assad",age :25}
// console.log(user)
// user.name = "Maroua"
// console.log(user)

// // Arrow Function
//  function Sum(a,b){
//     return a +b
//   }
//   const Test =()=> "Maroua"
//   console.log(Test())
//   var Hello =name=> "Hello "+name
//   console.log(Hello('Olfa')) 
//   let Somme =(a,b)=> a+b  
//   console.log(Somme(2,9))
//   const Maroua=(a,b)=>{
//     console.log(a-b)
//     console.log("Hello")
//     return a+b
//   } 


// // Template
// let Affichage=a=> "Hello "+a
// console.log(Affichage("Maroua"))
// const Aff=a=> `Hello ${a}`
// console.log(Aff("Olfa"))
// const a = "Maroua \n dsdsds \n dsdsds"
// console.log(a)
// const b = `Assad
// yassine
// Maroua
// Olfa`
// console.log(b)

// // Ternary Operator

// if(age<18){
//     console.log("Enfant")
//   }else if(age<60){
//     console.log("Adulte")
//   }else{
//     console.log("Vieux")}
// age<18 ? console.log("Enfant") : age<60 ? console.log("Adulte") : console.log("Vieux")

// const a = -50
// a<0 ? console.log("Negatif") : console.log("Positif")

// let c = -90
// if(c<0){
//   console.log("Negatif")
// }
// c<10 && console.log("Negatif")


// // Destructuring
// // console.log(`My name is ${user.name}, my age is ${user.age} at ${user.dar}`)
// var {name,age,dar,track} = user
// console.log(`My name is ${name}, my age is ${age} at ${dar} ${track}`)
// console.log(name)
// console.log("My name is "+name)
// var user = {name:"Olfa",age:27,track:'Fullstack',dar:'Lac'}
// const aff=({name,age,dar})=> `My name is ${name}, my age is ${age} at ${dar} `
// console.log(aff(user))

// // Spread Operator
// var user = {name:"Olfa",age:27,track:'Fullstack',dar:'Lac'}
// var tab = [1,2,3,4,5]
// var tabz = [1,2,3,2,4,4,5]
// console.log([...tab,...tabz,2,8])
// user = {...user,address:"Tunis"}
// console.log(user)




// console.log(tab.reduce((accumulateur, valeurCourante, index, array)=> accumulateur+valeurCourante))
// console.log(tab.reduce((assad,maroua, olfa, mahmoud)=> assad+maroua))

// var tab = [1,2,3,34]
// var tabl = []
// console.log(tab.map((el,i,t)=> el+2))
// console.log(tab)
// tab.forEach((el,i,t)=> tabl.push(el+1))
// console.log(tabl)

// var tab = [1,2,3,34]
// let a = tab.filter((el,i,t)=> el%2!=0)
// console.log(tab.filter((el,i,t)=> el>2))
// console.log(a)
// var tabb = ['Mahmoud','Assad','marwa']
// console.log(tabb.filter((el,i,t)=> el.includes('d')))


// // Find
// // var tab = [1,2,3,4,5,6]
// // console.log(tab.find((el,i,t)=>el === 3))

// // FindIndex
// // var tab = [1,2,3,4,5,6]
// // console.log(tab.findIndex(el => el === 3))

// // Sort
// // var tab = [2,4,0,5,7]
// // console.log(tab.sort((a, b) => b - a))

// // Splice
// // var tab = [2,4,0,5,7]
// // console.log(tab.splice(0,3))

// // Join Split
// // var tab = [2,4,0,5,7]
// //  var ch = "Mahmoud,Elyes,Ghassen"
// //  console.log(ch.split(","))
// //  console.log(tab.join())

