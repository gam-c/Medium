/* function filterOutFalsy (val1, val2) {
    return (!val1) ? val1 : val2
}

console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy(true, 'Dog'))
 */

/* function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 1]))
console.log(arrLength([])) */

/* function lastElem(arr) {
    return arr[arr.length -1]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false])) */

function arraySum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(arraySum([2, 2, 2]))
console.log(arraySum([100, 200, 500]))
console.log(arraySum([0, -5, -10]))