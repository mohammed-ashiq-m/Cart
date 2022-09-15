const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/path');

app.use(express.json());
app.use(express.urlencoded({extended  : false  }));

app.use('/cart', routes);

app.use(bodyParser.json());

app.listen(3002, () => {
  console.log("Listening on port 3002!!!!");
});

