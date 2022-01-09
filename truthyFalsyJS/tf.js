// Напишите функцию, которая принимает массив arr.
// Верните true, если хотя-бы 2 числа в массиве больше 9.
// В противном случае верните false
// arr = [1,2,3,4] => false
// arr = [8,11,7,10] => true

function w(arr) {
    let count = 0

    for (let num of arr) {
        if (num > 9) count++
    }

    // return count >= 2 ? true : false
    // >, <, >=, <=, ==, ===
    return count >= 2
}

console.log(w([1,2,3,4]))
console.log(w([8,11,7,10]))

// Напишите функцию, которая принимает массив чисел arr и возвращает
// новый массив с уникальными числами
// arr = [1,1,2,3,3,4,5] => [1,2,3,4,5]
// arr = [55,33,4,66,33,] => [55,33,4,66]
function m(arr) {
    let res = []

    for (let num of arr) {
        if (!res.includes(num)) {
            res.push(num)
        }
    }
    return res
}

console.log(m([1,1,2,3]))

let name = ''
let myName = 'Movsar'

if (myName) {
    console.log('yes')
} else {
    console.log('no')
}

let n1 = 0
let n2 = 22

if (n2) {
    console.log('yes')
} else {
    console.log('no')
}

let any;
if (!any) {
    console.log('my code')
}
if (any !== undefined) {
    console.log('my another code')
}

let x = 2
console.log(!!x)

let c = ''

console.log(!!c)