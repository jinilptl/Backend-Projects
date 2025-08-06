const express=require('express');

const app=express();

const PORT=4000;

app.get('/',(req,res)=>{
  res.send('<p>welcome to the home page of Todo list</p>')
})
app.listen(PORT,()=>{
  console.log(`server started on port number ${PORT}`);
  
})

