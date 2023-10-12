const express = require("express")
const app  =express()
const request = require("request")
const dotenv = require("dotenv")

dotenv.config()

app.get("/get-list-coin",(req,res)=>{
    let limit = 20
    console.log(req.query)
    if(req.query.limit) limit =req.query.limit 
    console.log(limit)
    const url1 = `${process.env.URL_COINCAP}?limit=${limit}`
    
    request.get({
        url:url1,
        json:true,
        headers:{
            "X-CMC_PRO_API_KEY":process.env.API_KEY_COINCAP 
        }}, (error,response, data) =>{
            if(error){
                return res.send({
                    error:error
                })
            }

            res.send({
                data:data
            })

        
       
    })


})

app.listen(4080,()=>{
    console.log("Server listening on port 4080")
})