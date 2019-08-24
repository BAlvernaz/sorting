describe('Bubble Sort', function(){
  beforeAll(() => {
    spyOn(bubbleSort, 'compare').and.callThrough()
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('compares two IDX', ()=> {
    expect(compare.calls.count()).toEqual(1)
  }
});


