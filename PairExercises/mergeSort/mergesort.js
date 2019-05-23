function split(wholeArr) {
  if (wholeArr.length === 1) {
    return wholeArr;
  }
  const halfPoint = Math.floor(wholeArr.length / 2);
  const firstHalf = wholeArr.slice(0, halfPoint);
  const secondHalf = wholeArr.slice(halfPoint);
  return [firstHalf, secondHalf];
}

function merge(arrOne, arrTwo) {
  let combinedArr = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < arrTwo[i]) {
      combinedArr.push(arrOne[i], arrTwo[i]);
    } else {
      combinedArr.push(arrTwo[i], arrOne[i]);
    }
  }
  // if (arrOne[0] < arrTwo[0]) {
  //   combinedArr = arrOne.concat(arrTwo);
  // } else {
  //   combinedArr = arrTwo.concat(arrOne);
  // }
  return combinedArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const [firstHalf, secondHalf] = split(arr);
    merged2 = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    return merged2;
    // merged1 = mergeSort(firstHalf);
    // // console.log('merged1', merged1);

    // console.log('merged1', merged1, 'merged2', merged2);
    // if (merged1[0] > merged2[0]) {
    //   return merge(merged2, merged1);
    // } else {
    //   return merge(merged1, merged2);
    // }
  }
}
