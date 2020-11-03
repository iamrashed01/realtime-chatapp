const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();

const users = require('./routes/users');

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome to our Chat Application.')
});
app.use('/users', users);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  mongoose.connect('mongodb://localhost/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('mongoDB successfully connected.');
    }).catch((err) => {
      console.log('mongoDB couldn\'t connect.', err);
    });
})