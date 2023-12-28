
// const { log } = require('console');
const {readFile,writeFile} = require('fs');
  readFile('./content/firstcontent.txt','utf8' ,(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/secondcontent.txt', 'utf8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `here is the result : ${first} ,${second}`,
        {flag: 'a'}, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
  })


