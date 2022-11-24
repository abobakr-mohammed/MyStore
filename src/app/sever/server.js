const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');


const port=3000;
const app=express();

app.use(bodyparser.json());

app.user(cors);

app.get("/",function(requ,res){
    res.send("hallow from node server");
});

app.listen(port,function(){
  console.log("server running on port"+port);  
});

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"datarecived"})
})