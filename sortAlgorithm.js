const arrayOne = [234, 43, 55, 63, 5, 6, 235, 547];
const arrayTwo = [1, 4, 2, 5, -2, 3];
const arrayThree = [52, 37, 63, 14, 17, 8, 6,  25];

const bubbleSort = (arr) => {
    //shorthand for the length of the array 
    let n = arr.length;

    //iterate n times over the array
    for (let i = 0; i < n; i++) {
        //track whether any swaps were performed in this iteration
        let swapped = false;

        //visit each pair of elements in the array
        for (let j = 0; j < n - i - 1; j++) {
            //if they are out of order, swap them
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
        
        //if there were no swaps, the array is already in sorted 
        //the time complexity is big O(n) which is the best case scenario
        if(!swapped){
            break;
        }
    }

    return;
};



//bubbleSort(arrayOne);
//console.log(`arrayOne: ${arrayOne}`);


//bubbleSort(arrayTwo);
//console.log(`arrayTwo: ${arrayTwo}`);

//bubbleSort(arrayThree);
//console.log(`arrayThree: ${arrayThree}`);


const mergeSort = array => {

    // checks if array can be split
    if (array.length < 2) 
    return array;
    //get middle index
    const middle = Math.floor(array.length/2);
    // split arrayin two sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length)
    // use recursion to continue splitting
    return merge(mergeSort(leftSide), mergeSort(rightSide));

}

const merge = (left, right) => {
    // create new array
    const result = [];
    // check if either left array or right array is empty
    while(left.length && right.length) {

    // find lower value
    if (left[0] <= right[0]) {

    // add left value 
    result.push(left.shift());
    } else {
        // add right value
        result.push(right.shift());
    }
    
    }
    // merge left array
    while(left.length) result.push(left.shift());
    // merge right array
    while(right.length) result.push(right.shift());
    // return result array
    // having a time complexity of O(n log(n))
    return result;
}

// console.log(mergeSort(arrayOne));

const quicksort = array => {
    // checks if array can be split 
    if(array.length < 2) {
    return array;
    }
    // define the pivot
    const pivot = array[array.length- 1]
    //created left and right arrays to store the elements that are less than the pivot and greater than the pivot
    var leftArray =[];
    var rightArray =[];
    for(let i =0; i < array.length -1; i++) {
        // if the element is less than pivot push it to the left array
        if (array[i] < pivot){
            leftArray.push(array[i]);
        } else {
            // if the element is greater than the pivot push it to the right array
            rightArray.push(array[i]);
        }
    }
    // this combines the left and right array with a time complexity of about O(2n log(n))
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quicksort(leftArray), pivot, ...quicksort(rightArray)];

    } else if (leftArray.length > 0) {
        return [...quicksort(leftArray), pivot];

    } else {
        return [...quicksort(rightArray), pivot];
    }
}

console.log(quicksort(arrayOne))