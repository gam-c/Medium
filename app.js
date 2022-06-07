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

/* metodo mio
function getMax(arr) {
    return Math.max.apply(null, arr)
  }
  
  console.log(getMax([-100, -200, -300]))  */

/* function getMax(arr) {
  let largestNumber = arr[0]
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestNumber) {
          largestNumber = arr[i]
      }
  }
  return largestNumber
}

console.log(getMax([-100, -200, -300]))  */


/* metodo mio 
function reverseString (str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}


console.log(reverseString('abc'))
console.log(reverseString('Gustavo'))
console.log(reverseString('This is cool'))
 */


/* function reverseString (str) {
    let reverseString = ''
    for (let i = 0; i < str.length; i++) {
        // this is how to lopp through every chracter in a string, array
        reverseString = str[i] + reverseString
    }
    return reverseString
}
 
console.log(reverseString('abc'))
console.log(reverseString('Gustavo'))
console.log(reverseString('This is cool'))
 */
// .split('') string --> array
// .reverse reverse array
// .join('') array --> string

/* function convertToZero(arr) {
    for (let i = 0; i < arr.length; i ++) {
        arr[i] = 0
    }
    return arr
} */

/* function convertToZero(arr) {
    return new Array(arr.length).fill(0)
}
 */
/* 
function convertToZero(arr) {
    return arr.map(elem => 0)
}

// .map convierte todo lo que quieras {} need a return

console.log(convertToZero([5, 100, 0]))
console.log(convertToZero([12]))
console.log(convertToZero([1, 2, 3, 4, 5])) */

/* function removeApples(arr) {
    let notApple = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apple') {
            notApple.push(arr[i])
            // add element into array .push(arr[i])
        }
    } 
    return notApple
} */

/* function removeApples(arr) {
  return arr.filter(elem => elem !== 'Apple')
}
// .filter add elem to new arr if condition {} need return

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple'])) */

/* function filterOutFalsy(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


/* function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true) // !! convert to a boolean
} */

/* console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple']))  */


/* function convertToBoolean(arr) {
    for (let i = 0; i < arr.length; i++) {
         arr[i] = !!arr[i]
    }
    return arr
} */

/* function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []])) */