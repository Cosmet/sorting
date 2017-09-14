describe('Merge Sort', function(){
  var arr = [4,5,3,1,2,9,8,7,6,10];
  var arrOdd = [4,5,3,1,2,9,8,7,6,10,11];
  var left = [1,3,5];
  var leftOdd = [1,3,5,7];
  var right = [2,4,6];
  
  beforeEach(function () {
     arr = [4,5,3,1,2,9,8,7,6,10];
    arrOdd = [4,5,3,1,2,9,8,7,6,10,11];
    left = [1,3,5];
    leftOdd = [1,3,5,7];
    right = [2,4,6];  
  });


  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect(split(arr)).toEqual([[4,5,3,1,2],[9,8,7,6,10]]);
    });

    it('is able to split an array into two halves if one is odd', function() {
      // your code here 
      expect(split(arrOdd)).toEqual([[4,5,3,1,2],[9,8,7,6,10, 11]]);
    });


  });


  it('using an empty array returns an empty array', function(){
    // test the merging algorithm
      expect(mergeSort([])).toEqual([]);

  });
  it('merge sort works properly', function(){
    // test the merging algorithm
      expect(mergeSort(arr)).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });

  it('merge sort works properly with odds', function(){
    // test the merging algorithm
      expect(mergeSort(arrOdd)).toEqual([1,2,3,4,5,6,7,8,9,10,11]);

  });


  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
      expect(merge(left, right)).toEqual([1,2,3,4,5,6]);

  });


  it('is able to merge two sorted arrays into one sorted array even if one is odd', function(){
    // test the merging algorithm
      expect(merge(leftOdd, right)).toEqual([1,2,3,4,5,6,7]);

  });

});