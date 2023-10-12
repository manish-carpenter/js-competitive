longestWord = (str) => {
  const strArr = str.split(' ');
  let longestWordIs = '';
  for (word of strArr) {
    if (word.length > longestWordIs.length) {
      longestWordIs = word
    }
  }
  console.log(longestWordIs);
}

longestWord('Hi hello');