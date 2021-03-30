// --створити масив та вивести його в консоль:
// - з 5 числових значень
// const  numArray = [2, 4, 10, 15, 50];
// console.log(numArray);


// - з 5 стічкових значень
// const strArray = ['Viktoriia', 'Bogdan', 'Volodymyr', 'Svitlana', 'Pavlo'];
// console.log(strArray);

// - з 5 значень стрічкового, числового та булевого типу
//
// const mixArray = ['Monday', 'Pavlo', 18, true, false, undefined, NaN, 'false'];
// console.log(mixArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до
// конкретного індексу. Вивести в консоль.
//
// let emptyArray = [];
//
// emptyArray[0] = 'Hi';
// emptyArray[1] = true;
// emptyArray[2] = 'Ho ho';
// emptyArray[3] = {name: 'Viktoriia', age: 36};
// emptyArray[4] = 12;
// emptyArray[6] = NaN;
// emptyArray[7] = () => {
//     console.log('Hello,world')
// };
// emptyArray[8] = '15';
// emptyArray[11] = undefined;
//
// console.log(emptyArray);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write('<div>Hello world</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і
// індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hello world: ' + i +' </div>');
//     document.write(`<div>Hello world: ${i} </div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello Ok10</h1>');
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello Ok10: ' + i + ' </h1>');
//     document.write(`<h1> Hello Ok10: ${i} </h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// const arr = [34, 36, 40, 4, 2, 15, 88, 101, 56, 1000];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (const number of arr) {
//     console.log(number);
// }
//
// for (const number in arr) {
//     console.log(arr[number]);
// }
// arr.forEach(i=>console.log(i));


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// const arr = ['34', '36', 'true', '4', '2', 'Viktoriia', '88', '101', '56', 'Hello Ok10'];
//
// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
// }
//
// for (const string of arr) {
//     console.log(string);
// }
//
// for (const string in arr) {
//     console.log(arr[string]);
// }
//
// arr.forEach(j=>console.log(j));


//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['HELLO', 15, '15', 27, false, 'false', 465, 'Viktoriia', 1001, 36];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }
//
// for (let arrElement in arr) {
//     console.log(arr[arrElement]);
// }
// arr.forEach(i=>console.log(i));
//
//            OR
//
// let emptyArray = [];
// emptyArray[0] = 'Hi';
// emptyArray[1] = true;
// emptyArray[2] = 'Ho ho';
// emptyArray[3] = {name: 'Viktoriia', age: 36};
// emptyArray[4] = 12;
// emptyArray[5] = 'false';
// emptyArray[6] = NaN;
// emptyArray[7] = 15;
// emptyArray[8] = '15';
// emptyArray[10] = undefined;
//
// emptyArray.forEach(i=>console.log(i));


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if
// та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки:
//    * рядкові елементи
//    * функцію
//    * об'єкт
//
// let emptyArray = [];
//
// emptyArray[0] = 'Hi';
// emptyArray[1] = true;
// emptyArray[2] = 'Ho ho';
// emptyArray[3] = {name: 'Viktoriia', age: 36};
// emptyArray[4] = 12;
// emptyArray[6] = () => {
//     console.log('Hello,world')
// };
// emptyArray[8] = false;
// emptyArray[9] = '15';
// emptyArray[10] = 254;
//

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'boolean') {
//         console.log(emptyArray[i])
//     } else {
//
//     }
// }
//
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'boolean')
//         ? console.log(emptyArray[i])
//         : '';
// }

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'number') {
//         console.log(emptyArray[i])
//     } else {
//         console.log('not a number')
//     }
// }
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'number')
//     ? console.log(emptyArray[i])
//     : '';
// }
//

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'string') {
//         console.log(emptyArray[i])
//     } else  {
//         console.log('not a string')
//     }
// }
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'string')
//     ? console.log(emptyArray[i])
//     : '';
// }

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'function') {
//         console.log(emptyArray[i])
//     } else {
//
//     }
// }
//
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'function')
//     ? console.log(emptyArray[i])
//     : '';
// }
//
// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'function') {
//         console.log(emptyArray[i])
//     } else {
//         console.log('not a function')
//     }
// }
//

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'object') {
//         console.log(emptyArray[i])
//     } else {
//         console.log('not an object');
//     }
// }
//
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'object')
//     ? console.log(emptyArray[i])
//     : console.log('not an object');
// }
//

// for (let i = 0; i < emptyArray.length; i++) {
//     if (typeof emptyArray[i] === 'undefined') {
//         console.log(emptyArray[i])
//     } else {
//         console.log('not an UNDEFINED');
//     }
// }
//
// for (let i = 0; i < emptyArray.length; i++) {
//     (typeof emptyArray[i] === 'undefined')
//         ? console.log(emptyArray[i])
//         : console.log('not an Undefind');
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через
// звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
//
// emptyArray[0] = 'Hi';
// emptyArray[1] = true;
// emptyArray[2] = 'Ho ho';
// emptyArray[3] = {name: 'Viktoriia', age: 36};
// emptyArray[4] = 12;
// emptyArray[5] = () => {
//     console.log('Hello,world')
// };
// emptyArray[6] = false;
// emptyArray[7] = '15';
// emptyArray[9] = 15;
// emptyArray[10] = 254;


// for (let emptyArrayElement of emptyArray) {
//  console.log(emptyArrayElement);
// }
// //
// for (let i = 0; i < emptyArray.length; i++) {
//     console.log(emptyArray[i]);
// }
//_______________________________________________________________________________________________________


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('step: ', i);
//     document.write(`step:  ${i} <br>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку
// через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log('step: ', i);
//     document.write(`step: ${i} <br>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку
// через console.log та document.write

// for (let i = 0; i < 200; i=i+2) {
//     console.log('step: ', i);
//     document.write(`step: ${i} <br>`);
// }
//
// let step = 0
// for (let i = 0; i < 100; i++) {
//     console.log('step: ', step);
//     document.write(`step: ${step} <br>`);
//     step+=2;
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('step: ', i);
//         document.write(`step: ${i} <br>`);
//     }
// }
//                  OR
//
// for (let i = 0; i < 100; i+=2) {
//     console.log('step : ', i);
//     document.write(`step: ${i} <br>`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('step: ', i);
//         document.write(`step: ${i} <br>`);
//     }
// }
//                  OR
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log('step: ', i);
//         document.write(`step: ${i} <br>`);
//     }
// }
//                 OR
//
// for (let i = 1; i < 100; i += 2) {
//     console.log('step : ', i);
//     document.write(`step: ${i} <br>`)
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// ДОДАТКОВО:

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c' ];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//    str = str + arr[i];
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c' ];
// let i = 0;
// let str = '';
// while (i < arr.length) {
//     str = str + arr[i];
//     i++
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c' ];
// let str = '';
// for (const string of arr) {
//     str = str + string;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//
// let arr = ['a', 'b', 'c' ];
// let str = '';
// for (const string in arr) {
//     str = str +arr[string];
// }
// console.log(str);


// =============================  ДОП  ===================
// =============================       ==================
// =============================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let array = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     array[array.length] = i;
// }
// console.log(array);
//                  OR
// let array = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     array.push(i);
// }
// console.log(array);
//
//                 OR
// let array = ['a', 'b', 'c'];
// console.log([...array,1,2,3,]);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let array = [1, 2, 3];
// let newArray = array.reverse();
// console.log(newArray);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let array = [1, 2, 3];
// console.log([...array, 4, 5, 6]);
//
//                 OR
// let array = [1, 2, 3];
// for (let j = 4; j <=6; j++) {
//     array.push(j);
// }
// console.log(array);
//
//                  OR
//
// let array = [1, 2, 3];
// for (let j = 4; j <=6; j++) {
//     array[array.length] = j;
// }
// console.log(array);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let array = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
//    array.unshift(i);
// }
// console.log(array);
//


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// const strings = ['js', 'css', 'jq'];
// console.log(strings);
// const first = strings.shift();
// console.log('first', first);
// console.log('strings', strings);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// const strings = ['js', 'css', 'jq'];
// console.log(strings);
// const last = strings.pop();
// console.log('last', last);
// console.log('strings', strings);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(3));
//
//       OR
//
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(3, 5));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(0, 2));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(1, 2));
// console.log(numbers);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього
// масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(3, 0, 'a', 'b', 'c')
// console.log(numbers);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього
// масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 0, 'a', 'b');
// numbers.splice(6, 0, 'c',);
// numbers.splice(8,0, 'e');
// console.log(numbers);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.
// const array = [3, 5, 6, 56, -12, 307, 1000, -26, 11, 22];
// for (let i = 0; i < array.length; i++) {
//    if (array[i]%2 === 0) {
//        console.log(array[i]);
//    }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// const array = [3, 5, 6, 56, -12, 307, 1000, -26, 11, 22];
// let newArray = [];
//
// for (let i = 0; i < array.length; i++) {
//    newArray.push(array[i])
// }
// console.log(newArray);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// const array = [3, 5, 6, 56, -12, 307, 1000, -26, 11, 22];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//  newArray[i] = array[i]
// }
//
// console.log(newArray);













