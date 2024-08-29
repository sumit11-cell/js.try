// const mh=["iron","thor","spider"]
// const dc=["flash","batman","supermen"]

// const all =[...mh,...dc]
// console.log(all);

// const all =mh.concat(dc)
// console.log(all);


// const arr1=[1,2,3,[4,5,6],7,[8,9]]
// const aa= arr1.flat(Infinity)
// console.log(aa);

function mergeAndSortArrays(array1, array2) {
    // Concatenate the two arrays
    const mergedArray = array1.concat(array2);
  
    // Sort the merged array
    const sortedArray = mergedArray.sort((a, b) => a - b);
  
    return sortedArray;
  }
  
  // Example usage:
  const array1 = [3, 1, 4];
  const array2 = [2, 7, 5];
  
  const resultArray = mergeAndSortArrays(array1, array2);
  
  console.log(resultArray);
  
