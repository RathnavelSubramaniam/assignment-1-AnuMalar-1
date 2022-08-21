import express from 'express';
import path from 'path'
import bodyparser from 'body-parser';

const app=express()
app.use(bodyparser.json())
app.use(bodyparser.text())
app.use(bodyparser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    const __dirname=path.resolve()
    //console.log(__dirname)
    res.sendFile(__dirname + '/greate3num.html');

})

app.post('/3num',(req,res)=>{
    
    const num1 = parseInt(req.body.first);
    const num2 = parseInt(req.body.second);
    const num3 = parseInt(req.body.third);

    const largest = Math.max(num1, num2, num3);
    res.send(largest  + " This is the Greater Number")
    
})

app.listen(5000,()=>{
    console.log("Server Running in Port 5000")
})