//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));
const request=require("request");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(rq,res){
  res.sendFile(__dirname+"/signup.html");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("server is running on port 3000");
});

app.post("/",function(req,res){
 const firstName=req.body.fname;
 const lastName=req.body.lname;
 const emailid=req.body.email;

 var data = {
   members:[
{
     email_address :emailid,
     status:"subscribed",
     merge_fields :{
          FNAME:firstName,
          LNAME:lastName

     }
}
   ]
 };
 const url="https://us2.api.mailchimp.com/3.0/lists/b8ae409f39";
var jsonData=JSON.stringify(data);
const options={
  method:"POST",
  auth: "harshit424:8f3b187f273baefe0e33667b46496424-us2"
};

const request=https.request(url,options,function(response){
if(response.statusCode===200)
{
res.sendFile(__dirname+"/success.html");
}
else{
  res.sendFile(__dirname+"/failure.html");

}
response.on("data",function(data){
  console.log(JSON.parse(data));
});

});
request.write(jsonData);
request.end();
});
app.post("/failure",function(req,res){
  res.redirect("/");
});
