#!/usr/bin/env node

const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function mathOps(){
    rl.question(`
        Please enter operation and inputs : 
        Operations : + n1 n2 n3 ...
        Operations : * n1 n2 n3 ...
        --------------------------------------
    `, (answer) => {
       const dataArr = answer.split(' ')
       const operand = dataArr.slice(1)
        if(dataArr[0]=="+"){
            var total=0;
            operand.forEach(element => {
                if(element){
                    total=total + parseInt(element);
                } 
            });
            
            console.log(`Result Of Operation : `, total)
        }
        if(dataArr[0]=="*"){
            var total=1;
            // console.log("operand ", operand)
            operand.forEach(element => {
                total=total * parseInt(element);
            });
            
            console.log(`Sum of the entered no is : `, total)
        }  
    //   rl.close();
      mathOps()
    }); 
    
}
mathOps()

// const argvs = process.argv
// // console.log("argvs ->", argvs)
// const argv = argvs.slice(2)
// const operand = argv.slice(1)
// // console.log("argv ->", argv)
// if(argv[0]=="add"){
//     var total=0;
//     // console.log("operand ", operand)
//     operand.forEach(element => {
//         total=total + parseInt(element);
//     });
     
//     console.log(`Sum of the entered no is : `, total)
// }
