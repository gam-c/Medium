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

/* function arraySum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(arraySum([2, 2, 2]))
console.log(arraySum([100, 200, 500]))
console.log(arraySum([0, -5, -10])) */

/* function arraySum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(arraySum([2, 2, 2]))
console.log(arraySum([100, 200, 500]))
console.log(arraySum([0, -5, -10])) */

/* function progressiveSum (num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600)) */

/* function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds  
    }

    return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(35)) */


