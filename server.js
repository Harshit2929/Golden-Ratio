const express = require("express");
const app = express()

const port = 3000 || process.env.port;


app.use(express.static('public'))

app.post('/api/v1/newsletter',function(request,response){
    response.status(400).json({
        result:"POST API Working"
    })
})

app.get('/api/v1/testing',function(request,response){

    console.log("This GET API was Triggered");

    response.status(400).json({
        result:"APIs are Working correctly"
    })
})

app.listen(port,()=>{
    console.log(`Server Started at PORT = ${port}`)
})