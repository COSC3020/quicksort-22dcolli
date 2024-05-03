//I used replit AI tool for the comment out portion where I was trying to get the pivot point to be a calculated average because I heard a lecturer say once it was a good way to choose a pivot.
//Other than that I've marked the one location the tool had me change
function quicksort(array) {
    let arr = [];
    arr.push(0);
    arr.push(array.length - 1);

    while (arr.length > 0) {
        let right = arr.pop();
        let left = arr.pop();

        let index = partition(array, left, right);

        if (left < index - 1) {
            arr.push(left);
            arr.push(index - 1);
        }

        if (index < right) {
            arr.push(index);
            arr.push(right);
        }
    }
    return array;
}
//The following code is corrected swap code which was causing my tests to fail
function swap(array, left_position, right_position) {
    let temp = array[left_position];
    array[left_position] = array[right_position];
    array[right_position] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let L = left;
    let R = right;

    while (L <= R) {
        while (array[L] < pivot) {
            L++;
        }
        while (array[R] > pivot) {
            R--;
        }
        if (L <= R) {
            swap(array, L, R);
            L++;
            R--;
        }
    }
    return L;
}



function calculatePivot(array, first, last) {
    return array[Math.floor((first + last) / 2)]; 
}



//let array = [2,-4,6,8,-33,30,31,29,4879];
//let array = [2,4,6,8,33,30,31,29];
//let array = [33,31,30,29,];
//quicksort(array);
//console.log("Sorted array is:", array);
