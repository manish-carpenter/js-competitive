reverse = (str) => {
  
  const strArr = str.split(' ');
  
  const len = strArr.length -1;

  const reverseArr = [];

  for (let i = len; i >= 0; i --) {
    reverseArr.push(strArr[i]);
  }

  const rs = reverseArr.join(' ');

  console.log(rs);
}

reverse('one two');