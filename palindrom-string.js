palindrom = (str) => {
  let len = str.length -1;
  for ( let i = 0; i <= len; i ++, len --) {
    if (str[i] !== str[len]) {
      return false;
    }
  }
  return true;
}

isPalindrom = (str) => {
  if (palindrom(str)) {
    console.log('Palindrom');
  } else {
    console.log('Not palindrom');
  }
}

isPalindrom('abs');
isPalindrom('aba');