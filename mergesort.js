function mergeSort(array) {
  
    /* your code here */
    if (array.length < 2) {
      return array;
    }

    var splits = split(array),
    left   = splits[0],
    right  = splits[1];

// sort the split arrays, merge the results
  var sortedLeft = mergeSort(left);
  var sortedRight = mergeSort(right);
  
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  debugger;
  var mergedArr = [];

  while(left.length || right.length) {
    if (left[0] < right[0] || !right.length) {
        mergedArr.push(left[0]);
        left.shift();
    }
    else if (left[0] > right[0] || !left.length) {
        mergedArr.push(right[0]);
        right.shift();
    }
  }


  return mergedArr;
}


function split(wholeArray) {    
    var halfArrLength = wholeArray.length / 2;
    var firstHalf = wholeArray.slice(0, halfArrLength);
    var secondHalf = wholeArray.slice(halfArrLength)

    return [firstHalf, secondHalf];
  }

