createUniqueArr = (arr) => {
  const set = new Set()
  const uniqueArr = [];
  for (element of arr) {
    if (!set.has(element)) {
      set.add(element);
      uniqueArr.push(element)
    }
  }
  return uniqueArr;
}

createUniqueArr2 = (arr) => {
  const set = new Set(arr);
  const uniqueArr1 = [...set];

  console.log(uniqueArr1);
}

//console.log(createUniqueArr(['adc', 'adc']))
console.log(createUniqueArr2(['abc', 'abc', 'dfr']))
