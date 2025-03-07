const sym1 = Symbol("s1");
console.log(sym1)
// different symboles with the same values r not equal
let num1 = 2.5;
let num2;
let num3 = null
console.log(typeof (num1), typeof (sym1), typeof (num2), typeof (num3));
console.log(parseInt("10.24"));
console.log(parseFloat("10.24"));
console.log(typeof (Number("10.24")));
console.log(typeof (String(10.24)));
console.log(Math.trunc(num1));
console.log("100" / "2");
// only these 2 r true:
// 1. null == undefined
// true
// 2. null >= 0
// true
console.log(null == undefined, null === undefined, null >= 0);
console.log(!true) // false
console.log(!(2 < 3)) // false
console.log(!undefined)

let dob = 2010;
dob <= 2007 ? console.log("ternary: over 18") : console.log("ternary: under 18");
switch (dob) {
    case 2007:
        console.log("switch: 18 yo")
        break;
    default:
        console.log("switch: not 18 yo")
        break;
}

const temperatures = [
    22, 25, 21, 19, 24, 26, 23, 22, 21, 20, 25, 27, 28, 22, 23, 24, 19, 18, 22,
    23, 26, 27, 28, 25, 24, 22, 21, 20, 19, 18,
];

let sum = 0
for (i of temperatures) { sum += i }
let mean = sum / temperatures.length;
console.log("mean: ", mean)

let max = -Infinity;
for (i of temperatures) {
    if (i > max) { max = i };
}
console.log("max: ", max)

let min = Infinity;
for (i of temperatures) {
    if (i < min) { min = i }
}
console.log("min: ", min)

max2 = Math.max(...temperatures);
console.log("max2: ", max2)

min2 = Math.min(...temperatures);
console.log("min2 :", min2)

mean2 = temperatures.reduce((sum, num) => sum + num, 0) / temperatures.length;
console.log("mean2: ", mean2)

let min3 = Infinity;
for (i = 0; i < temperatures.length - 1; i++) {
    if (temperatures[i] < min3) { min3 = temperatures[i] }
}
console.log("min3: ", min3)

daysAboveAverage = 0;
temperatures.forEach(temp => {
    if (temp > mean) { daysAboveAverage++ }
})
console.log("daysAboveAverage: ", daysAboveAverage)

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array1.at(-1))
console.log(array1.slice(-3, -1))
console.log(array1.slice(3, -2))
console.log(array1)
console.log(array1.splice(-3, 2))
console.log(array1)

const arrstring = ["1", "2", "101", "11"];
arrnum = arrstring.map(Number);
arrnum2 = arrstring.map(stringnum => Number(stringnum));
console.log(arrnum, arrnum2); // [ 1, 2, 101, 11, 22, 3, 54, 4 ]

const arr2 = [14, 5, 18, 19, 12, 18];
console.log(arr2.includes(5))
console.log(arr2.indexOf(18))
console.log(arr2.lastIndexOf(18))
console.log(arr2.indexOf(20))
console.log(arr2.findIndex(a => a >= 18))
console.log(arr2.findLastIndex(a => a >= 18))
console.log(arr2.filter(a => a >= 18))
console.log(arr2.reduce((acc, num) => acc + num - 18, 0))

const arr3 = [14, 5, 18, 19, 12, 18, 20];
console.log(arr3.splice(2, 1)) //remove 1 element
console.log("arr3: ", arr3)
newarr3 = arr3.filter((v, i, array) => { return i !== 3 && i !== 4 }) // if we use {} for function body we must use return
newarr4 = arr3.filter((v, i, array) => i !== 3 && i !== 4)
newarr5 = arr3.filter((v, i, array) => [0, 2, 5].includes(i)) // very important !
newarr6 = arr3.filter((v, i, array) => ![0, 2, 5].includes(i)) // very important !
console.log(newarr3, newarr4, newarr5, newarr6)

const arr = ["bagher", "reza", "kazem", "ali"];
arr.sort().reverse(); // sort only works for strings. with numbers we use a simple arrow func.
console.log(arr); // [ 'reza', 'kazem', 'bagher', 'ali' ]

const arr7 = [14, 5, 18, 19, 18, 20];
arr7.sort((a, b) => a - b) // sorting nums with simple arrow func.
console.log("arr7: ", arr7)
largestnum = arr7.reduce((acc, num) => {
    if (num > acc) { return num };
    { return acc }
}, 0)
largestnum2 = arr7.reduce((acc, num) => (num > acc ? num : acc)) // we can ignore mentioning the base acc value.
console.log(largestnum, largestnum2)
console.log(Math.max(...arr7))

removeduplicatenum = [...new Set(arr7)]
console.log(removeduplicatenum);

removeduplicatenum2 = []
arr7.forEach(num => { // forEach() does not return an array, so you must declare and modify removeduplicatenum2 separately.
    if (!removeduplicatenum2.includes(num)) {
        removeduplicatenum2.push(num);
    }
});
console.log(removeduplicatenum2)

removeduplicatenum3 = arr7.filter((v, i) => arr7.indexOf(v) === i)
console.log(removeduplicatenum3)

removeduplicatenum4 = arr7.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num)
    }
    return acc;
}, []);
console.log(removeduplicatenum4)

const arr8 = [1, 2, 3, 4, 5]

const rotatearray = function (arr, num) {
    num = num % arr.length;
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotatearray(arr8, 2))
console.log(arr8.slice(3)) // arr.slice(+num) dels num values from the beginning
console.log(arr8.slice(-3)) // arr.slice(-num) keeps num values from the end
// arr.splice(+num) & arr.splice(-num) both work in the same way but change the original array

const arr9 = [1, 2, 3, 4, 5]
console.log(arr9.splice(2))
console.log("arr9: ", arr9)

const rotatearray2 = function (arr, num) {
    num = num % arr.length;
    return arr.slice(-num).concat(arr.slice(0, -num));
}

console.log(rotatearray2(arr9, 2))

str1 = '  hi daniel hows   ur\nday?  ';
console.log(str1.trim())
console.log(str1)
//you cannot directly use forEach on a string because forEach is an array method.
//However, you can first convert the string into an array using .split(" "), process it, and then join it back into a string.
const str2 = str1.split(/\s+/).join(' ').trim();
console.log("str2:", str2)
const str3 = str2.replace("h", "q") //this only replaces the first "h" to use globally we use RegEx /.../g
console.log(str3)
console.log(str2)
const str4 = str2.replace(/a/g, "s")
console.log(str4)
console.log(str2)
const str5 = str2.split('a').join('z')
console.log(str5)
const str6 = str2.replaceAll('da', '') //using replaceAll to delete chars
console.log(str6)
const str7 = str2.slice(1, 5) //slice & substring r the same // strings dont have splice only arrays do.
console.log(str7)
const str8 = str2.substring(1, 5)
console.log(str8)
const str9 = str2.substring(1)
console.log(str9)
const str10 = str2.slice(1)
console.log(str10)
console.log(str10.concat(str9)) // concat and + work the same way except for concat working good with arrays.
console.log(str10 + str9)

arr11 = ["sa", "sas"]
arr12 = ['Fo', 'fds']
console.log(arr11.concat(arr12))
console.log([...arr11, ...arr12]) // this works too.
console.log(arr11 + arr12)

x1 = "23".padStart(5, "0")
x2 = "26012".padStart(5, "0")
x3 = "527".padStart(5, "0")
console.log(x1)
console.log(x2)
console.log(x3)

function countchar(str) {
    console.log(str.replace(/\s+/g, '').length)
}
str11 = '   hi daniel how  are   you today?'
countchar(str11)

function reversestring(str) {
    let reversedstr = '';
    let str2 = str.split('');
    for (i = 0; i < str.length; i++) {
        reversedstr += str2.pop();
    }
    console.log(reversedstr)
}
reversestring(str11)

function reversestring2(str) {
    console.log(str.split('').reverse().join('')) // first turn it into an array and then reverse it.
}
reversestring2(str11)

function reversestring3(str) {
    let reversedstr = '';
    for (i = str.length - 1; i >= 0; i--) {
        reversedstr += str[i];
    }
    console.log(reversedstr)
}
reversestring3(str11)

function replaceword(str, w1, w2) {
    console.log(str.replaceAll(w1, w2));
}
replaceword('hi hihi hi!', 'hi', 'bye')

function ispalindrome(str) {
    str === str.split('').reverse().join('') ? console.log("is palindrome") : console.log('is not palindrome')
} // String Comparison in JavaScript Compares Values, Not References
// In contrast, arrays and objects are compared by reference
// Unlike arrays, strings are primitive values, meaning their equality is checked based on content, not memory location.
ispalindrome('racecar')

const person = {
    name: "ali",
    family: "rezaei",
    age: 19,
    phoneNumber: "09999999999",
    id: 123123123
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("dateOfBirth")); // false

let myObj = {};
myObj.a = 2;
myObj["b"] = -2;
console.log(myObj); // { a: 2, b: -2 }
delete myObj.b;
console.log(myObj); // { a: 2 }
delete myObj["a"];
console.log(myObj); // {}
myObj.a = 20;
myObj['b'] = 30;
myObj.c = 40;
console.log(myObj)
console.log(Object.keys(myObj))
console.log(Object.values(myObj))
for (let k in myObj) { // "in" works great with objects and refers to keys.
    console.log(`the value for the key: ${k} is ${myObj[k]}`)
}

const person1 = {
    name: "Ali",
    family: "rezaei",
    address: {
        country: "Iran",
        city: "Tehran"
    }
};
const person2 = {
    name: "Akbar",
    family: "rezaei",
};

console.log(person1.address.city); // Tehran
console.log(person2.address?.city); // undefined // this is to prevent error.


let tasks = [];

function addTask(title) {
    tasks.push(title);
    return tasks
}

function removeTask(title) {
    tasks = tasks.filter(task => task !== title)
    return tasks
}

function toggleTaskStatus(title) {
    tasks.forEach((task, i) => {
        if (task === title) { tasks[i] = title + ": completed" }
        else if (task === title + ": completed") { tasks[i] = title + ": pending" }
        else if (task === title + ": pending") { tasks[i] = title + ": completed" };
    });
}

function findTask(title) {
    return tasks.find(task => task.includes(title)) || "task not found";
}

function listTasks() {
    console.log("Tasks:\n", tasks.length ? tasks.join("\n ") : "No tasks available.");
}

addTask("clear room")
removeTask("clear room")
addTask("buy cheese")
addTask("do homeworks")
console.log(tasks)
toggleTaskStatus("buy cheese")
console.log(tasks)
toggleTaskStatus("buy cheese")
console.log(tasks)
console.log(findTask('buy cheese'))
console.log(findTask('buy food'))
listTasks()

const TaskManager = {
    tasks,
    addTask,
    removeTask,
    toggleTaskStatus,
    listTasks,
    findTask,
};
// how to use Object Literal:
TaskManager.addTask('going carwash')
TaskManager.toggleTaskStatus('going carwash')
TaskManager.listTasks()
console.log(TaskManager.tasks)


let date1 = new Date
console.log(date1)
let date2 = new Date(2025, 8, 27, 22, 58, 38) // months are between 0-11 and then convert with ++
console.log(date2)
console.log(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getDay()) // the actual month is 8+1=9
// .getDay() is from 0-6 sunday=0
persiandate1 = date1.toLocaleDateString('fa-IR')
persiandate2 = date1.toLocaleDateString('fa-IR-u-nu-latn')
persiandate3 = date1.toLocaleTimeString('fa-IR')
persiandate4 = date1.toLocaleString('fa-IR-u-nu-latn')
console.log(persiandate1)
console.log(persiandate2)
console.log(persiandate3)
console.log(persiandate4)

function calcage (y, m , d) { // year month date are based by local time zone.
    let date3 = new Date;
    year = date3.getFullYear();
    month = date3.getMonth() + 1;
    day = date3.getDate();
    days1 = (year*365) + (month*30) + day;
    days2 = (y*365) + (m*30) + d;
    agedays = days1 - days2;
    age = agedays / 365;
    console.log(Math.trunc(age))
}
calcage(1994, 6, 19)
