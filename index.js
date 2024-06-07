import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({model:"gemini-1.5-flash-latest"});
app.get("/", (req, res)=>{
    res.render("index.ejs")
})
app.post("/", (req, res)=>{
    try{
        async function run(){
           const prompt = req.body["user-prompt"];
           const result = await model.generateContent(prompt);
           const response = await result.response;
           const text =  response.text();
           res.render("index.ejs", {content: text})
        }
        run();
       }catch(error){
           console.log("there was an error")
       } 
})
app.listen(port,()=>{
    console.log(`this is running on port ${port}`)
})