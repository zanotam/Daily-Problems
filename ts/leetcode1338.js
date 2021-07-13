/////**
//// * @param {number[]} arr
//// * @return {number}
//// */
////var minSetSize = function (arr) {
////  /*
////      create a map of number to count of number
////      sort map by count
////      want sum_i of count_i starting from 0 to n
////      of sorted map to be greater than or equal to arr.size/2
////      n is the return. 
////      */
////  let minSum = arr.length / 2;
////  let counts = arr.reduce(function (counter, item) {
////    counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
////    return counter;
////  }, {})
////  let unsorted = [];
////  for (let key in counts) {
////    unsorted.push(`${counts[key]}: ${key}`);
////  }
////  let sorted = unsorted.sort((a, b) => { return b.split(':')[0] - a.split(':')[0] });
////  let sum = 0;
////  let index = -1;
////  while (sum < minSum) {
////    index++;
////    sum += parseInt(sorted[index].split(':')[0]);
////  }
////  return index + 1;
////};
function minSetSize(arr) {
    /*
     create a map of number to count of number
     sort map by count
     want sum_i of count_i starting from 0 to n
     of sorted map to be greater than or equal to arr.size/2
     n is the return.
     */
    let minSum = arr.length / 2;
    let counts = arr.reduce(function (counter, item) {
        counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
        return counter;
    }, {});
    let unsorted = [];
    for (let key in counts) {
        unsorted.push(counts[key]);
    }
    let sorted = unsorted.sort((a, b) => { return b - a; });
    let sum = 0;
    let index = -1;
    while (sum < minSum) {
        index++;
        sum += sorted[index];
    }
    return index + 1;
}
;
console.log(minSetSize([7, 7, 7, 7, 7]));
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
//# sourceMappingURL=leetcode1338.js.map