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
  arrOne.length > arrTwo.length
    ? (length = arrOne.length)
    : (length = arrTwo.length);
  let j = 0;
  let i = 0;
  while (arrOne[i] !== undefined || arrTwo[j] !== undefined) {
    if (arrOne[i] === undefined) {
      combinedArr.push(...arrTwo.slice(j));
      break;
    }
    if (arrTwo[j] === undefined) {
      combinedArr.push(...arrOne.slice(i));
      break;
    }
    if (arrOne[i] < arrTwo[j]) {
      combinedArr.push(arrOne[i]);
      i++;
    } else if (arrOne[i] > arrTwo[j]) {
      combinedArr.push(arrTwo[j]);
      j++;
    } else {
      combinedArr.push(arrOne[i], arrTwo[j]);
      i++;
      j++;
    }
  }
  return combinedArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const [firstHalf, secondHalf] = split(arr);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
