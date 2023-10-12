

const emptyArr = async (arr: string[]) => {
  const anotherArr = arr;
  arr = [];
  console.log(`Another arr = ${anotherArr} \n Original arr = ${arr}`);
}

const emptyArr1 = async (arr: string[]) => {
  const anotherArr = arr;
  arr.length = 0;
  console.log(`Another arr = ${anotherArr} \n Original arr = ${arr}`);
}



emptyArr(['test', 'this', 'array']);
emptyArr1(['test', 'this', 'array']);
