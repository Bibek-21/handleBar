const express = require("express");
const expressHandlebars = require('express-handlebars');
const { log } = require("handlebars/runtime");

const app = express();

app.engine('handlebars', expressHandlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT,()=>{
    console.log(`server runnign at port ${process.env.PORT}`);
});
