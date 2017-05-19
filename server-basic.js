const express = require('express');

var app = express();
app.get('/',(req,res) => {
  // res.send('<h1>Hello express!</h1>');
  res.send({
    name:'Jayant',
    likes: ['biking','cities']
  });
});

app.get('/about', (req,res) => {
  res.send('About Page');
});

app.get('/bad', (req,res) => {
  // res.send('bad Page')
  res.send({
    errorMessage: 'Unable to handel request'
  });
});


app.listen(3000);
