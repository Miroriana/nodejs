
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/firstcontent.txt', 'utf8');
const second = readFileSync('./content/secondcontent.txt', 'utf8');
// console.log(first,second);
writeFileSync('./content/result-sync.txt', `here is the result : ${first} ,${second}`,
{flag: 'a'});


