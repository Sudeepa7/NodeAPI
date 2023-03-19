const express = require('express')
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('hellow Node API')
})

app.listen(8080,()=>{
    console.log('Node API app is running on port 3000')
})