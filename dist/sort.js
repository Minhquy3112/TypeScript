var ArrNum = [1, 8, 6, 28, 15];
var ArrStr = ["a", "c", "b"];
// ArrNum2.sort((a, b) => {
//     return a - b
// })
// console.log(ArrNum2);
function we17304_sort(array, callback) {
    for (var i = 0; i <= array.length; i++) {
        for (var j = i + 1; j <= array.length; j++) {
            if (callback(array[i], array[j])) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else if (array[i] < array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
we17304_sort(ArrStr, function (a, b) {
    return a > b;
});
console.log(ArrStr);
