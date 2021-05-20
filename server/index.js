const express = require('express');
const app = express();
const path = require('path');
const db = require('/Users/ryanpannone/HR/webpack-babel-practice/database/queries.js')
const port = 3001;
const bodyParser = require('body-parser')



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static(path.join(__dirname, '..')));

app.set('view engine', 'html');

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});