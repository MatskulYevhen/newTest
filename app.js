// Переменниые

//const firstName = 'Yevhen'
//const lastName = 'Matskul' // 2-е слово с большой буквы.
//const age = 29
//name = 'Zheka'

/*
const hobbies = prompt('what is your hobbies')
alert(firstName + ' likes: ' + hobbies)?
*/
 
//Операторы
//const currentYear = 2021
//const birthYear = 1991
//const age = currentYear - birthYear
/*
c = c + a тоже самое что c += a
++  - добавляет +1 к значению
*/

// Типы данных в js

//const isProgrammer = true
//const age = 29
//const name = 'Zheka'
//console.log(typeof isProgrammer, typeof age)

// Приоритет оператора
/*
const fullAge = 29
const currentYear = 2021
const birthYear = 1991
const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)
*/


// Условные операторы
/*
const courseStatus = 'fail' // ready, fail, pending
if (courseStatus === "ready") {
console.log("Курс готов и его можно проходить")
}
else if (courseStatus === "pending") {
    console.log('Курс пока находится в процессе разработки')
} 
else {
console.log('course fail')
}

const num1 = 42 //number    
const num2 = '42' //string
console.log(num1 === num2)
*/
/*
const isReady = false
if (isReady === true) {
    console.log('all is done')
}
else {
    console.log('not done')
}
*/

//Тернальное выражение
/*
const isReady = false
isReady ? console.log('ok') : console.log('not ok')
*/

// Функции

/*function calculateAge(year) {
    return 2020 - year
}

const myAge = calculateAge(1991)
console.log(myAge)
*/

/*function calculateAge(year){
    return 2021 - year
}
console.log(calculateAge(1991)) 
*/

/*function forFun(a, b){
    if (a > 0 && b > 0)
    return a * b
    return 0
}
console.log(forFun(3, 4))
*/

/*function birthDay(name, age) {
    if (name == "Yevhen" && age >= 29)
    {
    return name + " has: " + age + " years"
    }
     return null
}
//console.log(birthDay("Yevhen", 29))
*/

// 1-я функция.
/*function ageUser(birthDay)
{
    if (birthDay < 2003)
    {
    return 2021 - birthDay 
    }
    {
     return null
    }  
}
 //console.log(ageUser(1991))

 //Вызов 1-й функции во 2-й.
 // 2-я функция

 function newUser(country, name, birthDay){
    const aboutUser = ageUser(birthDay)
    if (country === "Ukraine" && name === "Yevhen" && aboutUser >= 18)
    {
        return "Welcome to us: " + name + " " + aboutUser + " | " + country
    }
    {
        return "Message: Error. Invalid data."
    }
}
console.log(newUser("Ukraine", "Yevhen", 1991))
*/