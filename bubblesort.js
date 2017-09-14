function bubbleSort(array) {
  if (!array.length) {
    return array;
  }

  let sorted = false;

  while (!sorted) {
    array.forEach(function (item, idx) {
      swap(item, idx, array);
    });

    if (inOrder(array)) {
      sorted = true;
    }
  }

  return array;
}

function inOrder(arr) {
  for (var i = 0, x = arr.length; i < x; i++) {
    if (arr[i] > arr[i+1] && i+1 < x) {
      return false;
    }
  }
  return true;
}

function swap(item, idx, array) {
  if (item > array[idx+1] && idx+1 < array.length) {
    let tempVal = array[idx];
    array[idx] = array[idx + 1];
    array[idx + 1] = tempVal;
  }
}
