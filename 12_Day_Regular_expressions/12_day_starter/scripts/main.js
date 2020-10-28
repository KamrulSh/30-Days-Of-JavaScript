// level 2 ========================>

// #1

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
removeDot = /[A-Za-z0-9]+/g;
splitedPara = paragraph.match(removeDot);
console.log(splitedPara);
splitedParaSet = new Set(splitedPara);
console.log(splitedParaSet);
arr = [];
for (const s of splitedParaSet) {
  const filteredArr = splitedPara.filter(one => s === one);
  arr.push({ word: s, count: filteredArr.length });
}
console.log(arr)
arr.sort((a,b) => {
  return b.count - a.count ;
})
console.log(arr)
