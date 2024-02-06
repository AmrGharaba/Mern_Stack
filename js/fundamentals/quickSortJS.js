function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)]
    let left = [];
    let middle = [];
    let right = [];

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < pivot) {
            left.push(arr[x]);
        }
    }

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === pivot) {
            middle.push(arr[x]);
        }
    }

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] > pivot) {
            right.push(arr[x]);
        }
    }

    return [...quickSort(left) , ...middle , ...quickSort(right)];


}
let arr = [1, 2, 7, 4, 5, 9, 8, 6, 5];
console.log(quickSort(arr));