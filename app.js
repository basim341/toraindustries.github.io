const express = require("express");
const app = express();
const port = 80;
const path = require(`path`)

app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.listen(port,  ()=>{
    console.log(`the server has started successfully`)
})
// HOME PAGE POINT
app.get('/', (req, res)=>{
    res.status(200).render(`Project.pug`)})
// APPLY NOW PAGE POINT     
app.get('/ApplyNow', (req, res)=>{
    res.status(200).render(`ApplyNow.pug`)})  
   
