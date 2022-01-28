//Importing Express Module
const express =  require("express");

//Saving root path in path variable so developer does not need to care about
const path = require("path");



const app = new express();
app.set('view engine','ejs'); // installing ejs module
app.set('views','views');

//all static file will be on public folder
app.use(express.static('public'));

// app.use('/assets', express.static('assets'))

//managing routing
//if user pass url by adding "/", user will redirect to index.html page
app.get('/',(req,res)=>
{
    res.render('index');
});

//if user pass url by adding "/login", user will redirect to login.html page
app.get('/g2_test',(req,res)=>
{
    res.render('g2_test');
});

//if user pass url by adding "/g2_test", user will redirect to g2_test.html page
app.get('/login',(req,res)=>
{
   // res.sendFile(path.resolve( __dirname, 'public/login.html'))
   res.render('login');
});
app.get('/g_test',(req,res)=>
{
   // res.sendFile(path.resolve( __dirname, 'public/login.html'))
   res.render('g_test');
});
//calling app on port 3000
app.listen(3000,()=>
{
    console.log("App starts using port 3000");
});