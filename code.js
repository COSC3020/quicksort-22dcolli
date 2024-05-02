function quicksort(array) {
    let arr = [];
    let first = 0;
    let last = array.length - 1;
    arr.push(first);
    arr.push(last);
    while (arr.length > 0) {
        last = arr.pop();
        first= arr.pop();
        //console.log("Partitioning array from index", first, "to", last);
        let part = partition(array, first, last);
        //console.log("After partitioning, array:", array);
        //console.log("Pivot value:", array[part]);
        if (part - 1 > first) {
            //console.log("Pushing left partition indices:", first, part - 1);
            arr.push(first);
            arr.push(part - 1);
        }
        if (part + 1 < last) {
            //console.log("Pushing right partition indices:", part + 1, last);
            arr.push(part + 1);
            arr.push(last);
        }
    }
    return array;
}

function partition(array, first, last) {
    let pivot = calculatePivot(array, first, last);
    //console.log("Selected pivot value:", pivot);
    
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

function calculatePivot(array, first, last) {
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        sum += array[i];
        count++;
    }
    return sum / count; 
}


//let array = [2,-4,6,8,-33,30,31,29,4879];
//let array = [2,4,6,8,33,30,31,29];
//quicksort(array);
//console.log("Sorted array is:", array);
