anagram = (str1, str2) => {
  str1 = str1.replace('/\s/g').toLowerCase();
  str2 = str2.replace('/\s/g').toLowerCase();

  str1CharSet = {};
  str2CharSet = {};

  for (char of str1) {
    str1CharSet[char] = (str1CharSet[char] || 0) + 1;
  }
  
  for (char of str2) {
    str2CharSet[char] = (str2CharSet[char] || 0) + 1;
  }

  if (str1CharSet.length !== str2CharSet.length) {
    return false
  }

  for (char in str1CharSet) {
    if (str1CharSet[char] !== str2CharSet[char]) {
      return false
    }
  }

  return true;

}

checkAnagram = () => {

  if (!anagram('Hii', 'ihi')) {
    console.log('Not anagram');
  } else {
    console.log('anagram');
  }
}

checkAnagram();
