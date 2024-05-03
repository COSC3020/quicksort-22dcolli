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

function swap(array, left_position, right_position) {
    let temp = array[left_position];
    array[left_position] = array[right_position];
    array[right_position] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

module.exports = quicksort;


function calculatePivot(array, first, last) {
    return array[Math.floor((first + last) / 2)]; // Select middle element as pivot
}



//let array = [2,-4,6,8,-33,30,31,29,4879];
//let array = [2,4,6,8,33,30,31,29];
//let array = [33,31,30,29,];
//quicksort(array);
//console.log("Sorted array is:", array);
