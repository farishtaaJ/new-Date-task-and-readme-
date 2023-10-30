//task 1
function monthName (num) 
{
    let nameMonth =  
    [ 
       "January","Fabruary", "March",
       "April", "May", "June", "July",
       "August", "September", "October",
       "November", "December"
    ]

    let date  = new Date()
    date.setMonth(num - 1)
    return nameMonth[date.getMonth()]
}
console.log(monthName(12));


//task 2 
function timeForMilkAndCookies (today)
{
    if (today.getMonth() === 11 && today.getDate() === 24)
    {
        return true 
    }
    else 
    {
        return false 
    }
}
console.log(timeForMilkAndCookies(new Date (2023,11,24)));


// task 3 
function getDate (num)
{
    let arr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    let date = new Date(num)
    return arr[date.getDay()] 
}
console.log(getDate("12/07/2022"));


// homework  task 1 

/*let num1 = new Date ('2023-09-26')
let num2 = new Date ('2023-09-20')
let date1 = num1 - num2 
let res = Math.ceil(date1 / (1000 * 60 * 60 * 24)) // 5.7887 //6
console.log(res);
*/

function getDates (num,num1)
{
    let date = Math.abs(num - num1) // 5
    let btw = Math.ceil(date / (1000 * 60 * 60 * 24)) //6
    return btw 
}
console.log(getDates(new Date('2023-12-31'),new Date('2023-10-26')))

// task 2 
function getTimes (num)
{  
    let hours = num.getHours()
    let minutes = num.getMinutes()
    let seconds = num.getSeconds()

    return hours + ":" +  minutes + ":" + seconds
}
console.log(getTimes(new Date()));


//task 3 первый вариант 
function currentMonth ()
{
   let day = new Date ()
   let res = day.getDate()
   return res 
}
console.log(currentMonth(("2023-09-20")))

// второй вариант 
function currentMonth (num)
{
    num = new Date ()
    let res = num.getDate()
    return res 
}
console.log(currentMonth("2023-09-20"));


// task 4 первый вариант 
function leap (num)
{
    let date = new Date (num, 1, 29) // первый параметр, параментр функции // втрой 1 февраля и третьй 29 февраля
    return date.getDate() === 29
}
console.log(leap(1933));

// второй вариант 
function leap (num)
{
    if (num % 4 === 0 )
    {
        return true 
    }
    else 
    {
        return false 
    }
}
console.log(leap(1988));
