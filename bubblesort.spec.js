describe('Bubble Sort', function(){

  const bubbleObj = {};
  bubbleObj.sort = function (array) {
    return bubbleSort(array);
  };
  bubbleObj.getToCenter = function () {
    this.sort();
    this.sort();
    this.sort();
    return 'got to center';
  };

  beforeAll(function () {
    spyOn(bubbleSort, 'sort').and.callThrough(); // replace existing `bubbleObj['sort']` method
  });

  it('getting to the center of bubbleObj involves exactly three sorts', function () {
    bubbleObj.getToCenter();
    expect(bubbleObj.sort.calls.count()).toEqual(3);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
