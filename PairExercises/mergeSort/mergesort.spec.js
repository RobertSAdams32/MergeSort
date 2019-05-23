describe('Split Array function', function() {
  it('it able to split an even array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('it able to split an odd array into two halves', function() {
    expect(split([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6, 7]]);
  });
});

// describe('Merge Function', function() {
//   it('it is able to merge two sorted array into one sorted array', function() {
//     expect(merge([1, 2, 3], [4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
//   });
// });

describe('Merge Sort Function', function() {
  it('is able to sort an array of values using merge', function() {
    expect(
      mergeSort([
        11,
        3,
        1,
        20,
        18,
        12,
        19,
        6,
        10,
        4,
        9,
        17,
        14,
        16,
        5,
        8,
        2,
        7,
        13,
        15,
      ])
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });
});
