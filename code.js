function quicksort(array) {
    let arr = [];
    let first = 0;
    let last = array.length - 1;
    arr.push(first);
    arr.push(last);
    while (arr.length > 0) {
        last = arr.pop();
        first = arr.pop();
        let pivot_location = partition(array, first, last);
        if (pivot_location - 1 > first) {
            arr.push(first);
            arr.push(pivot_location - 1);
        }
        if (pivot_location + 1 < last) {
            arr.push(pivot_location + 1);
            arr.push(last);
        }
    }
    return array;
}

function partition(array, first, last) {
    let pivot = array[last]; 
    let i = first - 1;
    for (let j = first; j < last; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[last]] = [array[last], array[i + 1]];
    return i + 1; 
}


/*function calculatePivot(array, first, last) {
    if (first === last) {
        return array[first];
    }
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        sum += array[i];
        count++;
    }
    return sum / count; 
}

function calculatePivot(array, first, last) {
    return array[Math.floor((first + last) / 2)]; // Select middle element as pivot
}
*/


//let array = [2,-4,6,8,-33,30,31,29,4879];
//let array = [2,4,6,8,33,30,31,29];
//let array = [33,31,30,29,];
//quicksort(array);
//console.log("Sorted array is:", array);
