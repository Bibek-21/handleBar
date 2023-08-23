

//Loads the express module
const express = require('express');
// const handlebars = require("handlebars");  
const exphbr= require("express-handlebars") //Loads the handlebars module
const dotenv = require("dotenv")
dotenv.config()
//Creates our express server
const app = express();
app.engine('hbs', exphbr.engine({
    layoutsDir: __dirname + '/views/layouts',
//new configuration parameter
extname: 'hbs',
defaultLayout:'planB',
partialsDir:__dirname + '/views/partials/',
}));

app.set('view engine', 'hbs')     //Sets our app to use the handlebars engine




//Serves static files (we need it to import a css file)
app.use(express.static(__dirname + 'public'))
//Sets a basic route

app.get('/', (req, res) => {
    res.render('index', { layout: 'index' });
});
  
//Makes the app listen to port 3000
app.listen(process.env.PORT, () => console.log(`App listening to port ${process.env.PORT}`));