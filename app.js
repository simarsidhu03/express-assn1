const express = require('express');
const path = require('path');

const moment = require('moment');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');


app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.locals.year=moment().format('YYYY');
  
    next();
  });
  
app.get('/',function(req, res) {  
  res.render('index',{title: 'Home'});
});

app.get('/services',function(req, res) {  
  res.render('services',{title:'Services'});
});

app.get('/gallery',function(req, res) {  
  res.render('gallery',{title:'Gallery'});
});
app.get('/contact',function(req, res) {  
    res.render('contact',{title:'Contact'});
  });

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});