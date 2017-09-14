describe('Bubble Sort', function(){

var arr = [1]


  describe ('in-order', function() {
    it('is able to return true or false if sorted', function() {
      // your code here 
      expect(inOrder([1,2,3,4,5])).toEqual(true);
      expect(inOrder([1,5,4,3])).toEqual(false);
    });

  })
 
  describe ('swap', function() {
    it('swap can swap values of array', function() {
      // your code here 

      var firstArr = [1,2];
      var item = firstArr[0];
      var index = 0;


      var secondArr = [5,4,3];
      var secondItem = secondArr[0];
      var secondIndex = 0;
   
      
      swap(item, index, firstArr);

      swap(secondItem, secondIndex, secondArr);

      expect(firstArr).toEqual([1,2]);
      expect(secondArr).toEqual([4,5,3]);
    });

  })


  describe ('bubble sort', function() {
    it('it sorts an array', function() {
      // your code here 

      var evenArr = [1,4,3,2];
      var oddArr = [5,4,1,2,3];

      expect(bubbleSort(evenArr)).toEqual([1,2,3,4]);
      expect(bubbleSort(oddArr)).toEqual([1,2,3,4,5]);
    });

  })

  // beforeAll(function () {
  //   spyOn(bubbleSort, 'sort').and.callThrough(); // replace existing `bubbleObj['sort']` method
  // });

 
});
