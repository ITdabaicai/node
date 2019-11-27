
var fs = require('fs')
// fs.stat('upload',(err,stats)=>{
//     if(err){
//         fs.mkdir('upload',err=>{
//             if(err){
//                 console.log(err)
//                 return false
//             }
//             console.log('success')
//         })
//
//     }else{
//         console.log('already esit')
//         console.log(stats.isDirectory())
//     }
//
// })

fs.readdir('html',(err,files)=>{
    if(err){
        consoel.log(err)
        return false
    }else{
        files.map(v=>{
            fs.stat(v,(err,stats)=>{
                console.log(v)
            })
        })
        console.log(files)
    }
})