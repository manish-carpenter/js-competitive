const reverse = async (string: string) => {
  const arrOfStr = string.split(" ");
  const revArrOfStr:string[] = []
  for (const word of arrOfStr) {
    const len = word.length;
    let revWord = "";

    for (let i = len; i>0; i--) {
      revWord = revWord + word[i-1];
    }
    revArrOfStr.push(revWord);

  }
  const revStr = revArrOfStr.join(" ");
  console.log(revStr);
}

reverse('Reverse this string');

// using inbuild fucntions

// const reversBySeperator = async (str: string, char: string) => {
//   const revStr = str.split("").reverse().join("");
//   console.log(revStr);
// }
// const str = 'This is the input string';
// reversBySeperator(str, "");


