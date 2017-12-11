const fs=require('fs')
const path=require('path')

// fs.writeFile(path.join(__dirname,'./test.js'), JSON.stringify({ id: 10 }), (err)=>{
//    if (err){
//      console.log(err)
//    }else{
//     console.log('success')
//    }
// })

// try{
//   fs.writeFileSync(path.join(__dirname,'./test.js'), JSON.stringify({ id: 20 }))
// }catch(error){
//   if(error){
//     console.log(error)
//   }
// }

// const streamWriter=fs.FileWriteStream(path.join(__dirname,'./test.js'),{id:30} )
// setInterval(() => {
//   streamWriter.write('hello',()=>{
//   console.log('+122')
// });
// }, 1000)



fs.appendFile(path.join(__dirname,'./test.js'), JSON.stringify({ id: 10 }), (err)=>{
   if (err){
     console.log(err)
   }else{
    console.log('success')
   }
})

