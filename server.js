import express from 'express'

let counter = 0
const app = express()

app.get("/",(req,res)=>{
    res.send("the counter is "+ counter)
})

app.post("/inc",(req,res)=>{
    counter++
    res.send("the counter is increased by 1 to "+ counter)
})

app.post("/dec",(req,res)=>{
    counter--
    res.send("the counter is decreased by 1 to "+ counter)
})

app.post("/die",(req,res)=>{
    res.send("server shuts down")
    server.close()
})


const port = 3000
const server= app.listen(port)