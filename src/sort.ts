const ArrNum = [ 1, 8, 6, 28, 15]
const ArrStr = ["a", "c", "b"]

// ArrNum2.sort((a, b) => {
//     return a - b
// })
// console.log(ArrNum2);

function we17304_sort<Q>(array: Q[], callback?: (a: Q, b: Q) => boolean){
    for (let i = 0; i <= array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            if (callback(array[i], array[j])) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
we17304_sort<string>(ArrStr, (a, b) => {
    return a > b
})
console.log(ArrStr);
