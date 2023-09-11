const numbers = [
    1,200,3,
    [
      40,5,6,
      [
        70,100,9
      ]
    ],        
    30,4,50,6];

const flatten = (values) => values.reduce (
  (acc, item, index, array) => acc.concat(
    Array.isArray(item) ? flatten(item)
    :item
  ), []
)

const largestNumber = (values) => {
  let highest = 0;
  for (let i=0; i<values.length; i+=1) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
}
console.log(largestNumber(flatten(numbers)));