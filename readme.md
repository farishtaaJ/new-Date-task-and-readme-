!["new Date](./img/js-date.jpg)
<br><br>
# new Date () в JavaScript


**`new Date(значение)`** - Создаёт экземпляр объекта Date, представляющего собой момент времени. Объект Дата содержит число миллисекунд, прошедших с 1 января 1970 г. универсальное глобальное время


**`let date = new Date()`**; Теперь переменная `date` - это объект с датой, который хранит в себе текущий момент времени (секунду, минуту, час и так далее). С помощью специальных функций мы можем получить нужные нам характеристики времени, например, текущий час, текущий день или текущий месяц. 

```javascript
// 1
let date = new Date()
console.log(date); // 2023-10-30T21:05:42.827Z


// 2
let date = new Date("2022-12-17T03:24:00")
console.log(date); // 2022-12-16T22:24:00.000Z


// 3
let date = new Date("2023-12-31")
let dat = new Date ("2023-12-31")
console.log(date === dat); // false


// 4
let date = new Date("2023-12-31")
let dat = new Date ("2023-12-31")
console.log(date + " " + dat);
//Sun Dec 31 2023 05:00:00 GMT+0500 (Узбекистан, стандартное время) Sun Dec 31 2023 05:00:00 GMT+0500 (Узбекистан, стандартное время)


// 5
let date = new Date("2023-12-31")
let dat = new Date ("2023-12-31")
console.log(date - dat); // 0
```
<br> <br>
# Cоздание date в JS
### Cуществует четыре способа создания объекта date
     1. new Date()
     2. new Date(milliseconds)
     3. new Date(Date string)
     4. new Date(year,month,day,hours,minutes,seconds,milliseconds)


#### **`new Date()`** - вы можете создать объект даты, используя новый конструктор Date().
```javascript
let timeNow = new Date()
console.log(timeNow); //2023-10-30T21:23:52.73
```

#### **`new Date(milliseconds)`** - oбъект date содержит число, обозначающее миллисекунды с 1 января 1970 года по всемирному координированному времени. Новая дата(миллисекунды) Создает новый объект Date, добавляя миллисекунды к нулевому времени.
```javascript
//1
let timeNow = new Date(0)
console.log(timeNow); //1970-01-01T00:00:00.000Z

//2
let timeNoww = new Date(1000000000000)
console.log(timeNoww); //2001-09-09T01:46:40.000Z
```

#### **`new Date(date string)`** - вы можете создать объект даты, используя новый конструктор Date().
```javascript
let timeNow = new Date("2003-04-08")
console.log(timeNow); //2003-04-08T00:00:00.000Z
```

#### **`new Date(year,month,day,hours,minutes,seconds,milliseconds)`** - создает новый объект date с указанной датой и временем.
```javascript
//1
let timeNow = new Date(2003, 7, 4, 5, 30, 45, 0)
console.log(timeNow); //2003-08-04T00:30:45.000Z

//2
let timeNow = new Date(2003, 7, 4, 5,)
console.log(timeNow); //2003-08-04T00:00:00.000Z

//3
let timeNow = new Date(2003, 7)
console.log(timeNow); //2003-08-04T00:00:00.000Z
```

<br> <br>
# **`Methods`**
    1. now()
    2. getFullYear()
    3. getMonth()
    4. getDate()
    5. getDay()
    6. getHours()
    7. getMinutes()
    8. setDate()
    9. setMonth()
    10.setFullYear()

#### **`now()`** - возвращает количество миллисекунд, прошедших с 1 января 1970 года.
```javascript
let timeNow = Date.now()
console.log(timeNow); //1698702413788
```

#### **`getFullYear()`** - возвращает полный год даты (4 цифры).
```javascript
let d = new Date()
let res = d.getFullYear()
console.log(res); //2023
```

#### **`getMonth()`** - возвращает месяц (от 0 до 11) даты. Январь = 0, Февраль = 1, ....
```javascript
//1
let d = new Date()
let res = d.getMonth()
console.log(res); //9

//2
let month = ["January","Fabruary", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ]
let d = new Date()
let res = month[d.getMonth()]
console.log(res); //October
```

#### **`getDate()`** - это метод возвращает день месяца (от 1 до 31) даты.
```javascript
let d = new Date()
let res = d.getDate()
console.log(res); // 31
```


#### **`getDay()`** - возвращает день недели (от 0 до 6) даты. Воскресенье = 0, Понедельник = 1, ...
```javascript
let d = new Date()
let res = d.getDay()
console.log(res); //2 // Tuesday
```

#### **`getHours()`** - возвращает часы (от 0 до 23) даты.
```javascript
let d = new Date()
let res = d.getHours()
console.log(res); //3 
```

#### **`getMinutes()`** - возвращает минуты (от 0 до 59) даты.
```javascript
let d = new Date()
let res = d.getMinutes()
console.log(res); //2 
```

#### **`setDay()`** - устанавливает день месяца даты.
```javascript
let d = new Date()
d.setDate(5)
console.log(d); //2023-10-04T22:04:46.639Z
```

#### **`setMonth()`** - устанавливает месяц объекта даты. Этот метод также можно использовать для установки дня месяца.
```javascript
let d = new Date()
d.setMonth(12)
console.log(d); //2024-01-30T22:06:32.662Z
```

#### **`setFullYear()`** - устанавливает год даты. также можно установить месяц и день.
```javascript
//1
let d = new Date()
console.log(d.setFullYear(2023)); /1698703886623

//2
let be = new Date (d)
console.log(be.toString()); //Tue Oct 31 2023 03:11:26 GMT+0500 (Узбекистан, стандартное время)

//3
let d = new Date()
d.setFullYear(d.getFullYear(), d.getMonth() - 6)
console.log(d); //2023-04-30T22:13:26.193Z
```

# Рахмет (●'◡'●) (Teşekkür ederim😉)








    
