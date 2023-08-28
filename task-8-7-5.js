const numbers = [1, 2, 5, 7, 3, 2, 8, 0, 9, 1, 3, 6, 7, 4];

const getFilteredArray = function (arr) {
    const uniqueSet = new Set(arr);
    const uniqueArr = Array.from(uniqueSet);
    let result = uniqueArr.toSorted((a, b) => a - b);

    return result;
};

const filteredArray = getFilteredArray(numbers);

console.log(filteredArray);